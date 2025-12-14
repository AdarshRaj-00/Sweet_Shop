// HPI 1.6-V
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Star, Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { Image } from '@/components/ui/image';

// --- 1. CANONICAL DATA SOURCES ---
const features = [
  {
    title: 'Traditional Recipes',
    description: 'Authentic flavors passed down through generations',
    image: 'https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=traditional-mithai-1',
    rotation: -3
  },
  {
    title: 'Premium Quality',
    description: 'Made with the finest ingredients and care',
    image: 'https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=premium-mithai-2',
    rotation: 2
  },
  {
    title: 'Fresh Daily',
    description: 'Prepared fresh every day for perfect taste',
    image: 'https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=fresh-mithai-3',
    rotation: -2
  }
];

const galleryImages = [
  { id: 'gallery-1', src: 'https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=mithai-gallery-1', alt: 'Assorted Mithai Box' },
  { id: 'gallery-2', src: 'https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=mithai-gallery-2', alt: 'Silver Leaf Garnish' },
  { id: 'gallery-3', src: 'https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=mithai-gallery-3', alt: 'Festive Celebration' },
  { id: 'gallery-4', src: 'https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=mithai-gallery-4', alt: 'Royal Preparation' },
];

// --- 2. UTILITY COMPONENTS ---

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-1000 ease-out ${className || ''}`}>{children}</div>;
};

const ParallaxImage = ({ src, alt, className, speed = 0.5 }: { src: string, alt: string, className?: string, speed?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <Image src={src} alt={alt} width={1200} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

// --- 3. MAIN PAGE COMPONENT ---

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Custom cursor effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-black text-white overflow-clip selection:bg-white selection:text-black">
      
      {/* Custom Styles for this page only */}
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }
        .text-stroke-hover:hover {
          -webkit-text-stroke: 0px;
          color: white;
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .clip-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
      `}</style>

      {/* HERO SECTION - Inspired by "Live & Love" Layout */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[120rem] w-full relative z-10 flex flex-col items-center">
          
          {/* Massive Headline */}
          <AnimatedElement className="text-center mb-12 md:mb-24 relative z-20">
            <h1 className="font-heading text-[15vw] leading-[0.8] md:text-[12rem] text-white mix-blend-difference whitespace-nowrap">
              Tradition <span className="font-paragraph italic text-[4rem] md:text-[6rem] align-middle mx-4">&</span> Taste
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-white/70 mt-8 max-w-2xl mx-auto tracking-wide">
              Experience the authentic flavors of India with our handcrafted mithai.
            </p>
          </AnimatedElement>

          {/* The Three Cards - Direct Homage to Inspiration Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-7xl mx-auto perspective-1000">
            {features.map((feature, index) => (
              <AnimatedElement key={index} delay={index * 200} className="group relative">
                <div 
                  className="bg-white text-black p-4 pb-8 rounded-[2rem] transform transition-all duration-700 hover:scale-105 hover:z-10 hover:-rotate-0 shadow-2xl"
                  style={{ transform: `rotate(${feature.rotation}deg)` }}
                >
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] mb-6 relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="font-heading text-3xl md:text-4xl mb-3">{feature.title}</h3>
                    <p className="font-paragraph text-lg text-black/70 leading-relaxed border-t border-black/10 pt-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-paragraph text-sm tracking-widest uppercase text-white/50">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <div className="w-full bg-white text-black py-6 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <span className="font-heading text-4xl md:text-6xl">Authentic Mithai</span>
              <Star className="w-6 h-6 fill-current" />
              <span className="font-heading text-4xl md:text-6xl italic">Handcrafted Daily</span>
              <Star className="w-6 h-6 fill-current" />
              <span className="font-heading text-4xl md:text-6xl">Premium Ingredients</span>
              <Star className="w-6 h-6 fill-current" />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </div>

      {/* NARRATIVE SECTION - Sticky Scroll */}
      <section className="w-full py-32 px-6 bg-black relative">
        <div className="max-w-[120rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Sticky Text Content */}
          <div className="lg:sticky lg:top-32 h-fit">
            <AnimatedElement>
              <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm uppercase tracking-widest mb-8">Our Heritage</span>
              <h2 className="font-heading text-6xl md:text-8xl mb-12 leading-tight">
                The Art of <br/>
                <span className="italic text-white/50">Sweetness</span>
              </h2>
              <div className="space-y-8 max-w-xl">
                <p className="font-paragraph text-xl md:text-2xl text-white/80 leading-relaxed">
                  For generations, we have been crafting the finest Indian sweets, preserving traditional recipes while maintaining the highest standards of quality and taste.
                </p>
                <p className="font-paragraph text-lg text-white/60 leading-relaxed">
                  Every piece of mithai is made with love, care, and the finest ingredients, bringing you authentic flavors that celebrate the rich heritage of Indian confectionery.
                </p>
                <div className="pt-8">
                  <Link to="/about" className="group inline-flex items-center gap-4 text-lg font-paragraph border-b border-white/30 pb-2 hover:border-white transition-colors">
                    Read Our Full Story
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Scrolling Image Gallery */}
          <div className="space-y-32 pt-20 lg:pt-0">
            {galleryImages.map((img, idx) => (
              <AnimatedElement key={img.id} className={`relative ${idx % 2 !== 0 ? 'lg:translate-x-20' : ''}`}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-none md:rounded-[4rem]">
                  <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none rounded-none md:rounded-[4rem]" />
                  <ParallaxImage 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent z-10">
                    <span className="font-heading text-3xl text-white">{img.alt}</span>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 border-r border-b border-white/30 rounded-br-3xl hidden md:block" />
                <div className="absolute -left-4 -top-4 w-24 h-24 border-l border-t border-white/30 rounded-tl-3xl hidden md:block" />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION - Horizontal Scroll */}
      <section className="w-full py-32 bg-white text-black overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 mb-16 flex justify-between items-end">
          <AnimatedElement>
            <h2 className="font-heading text-6xl md:text-8xl">Curated <span className="italic text-black/50">Collection</span></h2>
          </AnimatedElement>
          <AnimatedElement delay={200}>
            <Link to="/store" className="hidden md:flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-black/80 transition-colors">
              View All Sweets <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedElement>
        </div>

        <div className="w-full overflow-x-auto pb-12 px-6 hide-scrollbar">
          <div className="flex gap-8 w-max">
            {[1, 2, 3, 4, 5].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-[85vw] md:w-[30vw] flex-shrink-0 group cursor-pointer"
              >
                <Link to="/store" className="block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative bg-gray-100">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
                    <Image
                      src={`https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=collection-item-${item}`}
                      alt={`Collection Item ${item}`}
                      width={600}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex justify-between items-start border-t border-black/10 pt-4">
                    <div>
                      <h3 className="font-heading text-3xl mb-1">Royal Selection {item}</h3>
                      <p className="font-paragraph text-black/60">Premium Assortment</p>
                    </div>
                    <span className="font-paragraph text-xl">₹450</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSIVE CTA SECTION */}
      <section className="w-full min-h-[80vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/12d367_71ebdd7141d041e4be3d91d80d4578dd~mv2.png?id=cta-background-mithai"
            alt="Sweet Shop Ambience"
            width={1920}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedElement>
            <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-8" />
            <h2 className="font-heading text-6xl md:text-9xl text-white mb-8">
              Taste the <br/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Tradition</span>
            </h2>
            <p className="font-paragraph text-xl md:text-3xl text-white/80 mb-12 max-w-3xl mx-auto">
              Discover our complete collection of authentic Indian sweets, from classic favorites to seasonal specialties.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                to="/store"
                className="px-12 py-5 bg-white text-black font-paragraph text-lg rounded-full hover:bg-white/90 transition-all transform hover:scale-105"
              >
                Shop Collection
              </Link>
              <Link
                to="/about"
                className="px-12 py-5 border border-white text-white font-paragraph text-lg rounded-full hover:bg-white/10 transition-all"
              >
                Our Story
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* FOOTER PREVIEW */}
      <section className="w-full py-20 px-6 border-t border-white/10 bg-black">
        <div className="max-w-[120rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-3xl mb-2">Join our Sweet Circle</h3>
            <p className="font-paragraph text-white/60">Subscribe for exclusive offers and new arrivals.</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
            />
            <button className="bg-white text-black px-8 py-3 rounded-full font-paragraph hover:bg-white/90 transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}