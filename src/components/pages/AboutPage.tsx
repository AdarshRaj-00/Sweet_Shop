import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

export default function AboutPage() {
  const values = [
    {
      title: 'Authenticity',
      description: 'We honor traditional recipes and methods passed down through generations'
    },
    {
      title: 'Quality',
      description: 'Only the finest ingredients make it into our sweets'
    },
    {
      title: 'Freshness',
      description: 'Every piece is made fresh daily to ensure perfect taste and texture'
    },
    {
      title: 'Heritage',
      description: 'Celebrating the rich cultural traditions of Indian confectionery'
    }
  ];

  return (
    <div className="w-full bg-primary">
      {/* Hero Section */}
      <section className="w-full min-h-[60vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-[100rem] w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-6xl md:text-8xl text-primary-foreground mb-8">
              Our Heritage
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
              A journey through tradition, taste, and timeless recipes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full px-6 py-16">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary rounded-3xl overflow-hidden shadow-2xl" style={{ transform: 'rotate(-2deg)' }}>
                <Image
                  src="https://static.wixstatic.com/media/dfc47e_ca01d5ec4b4e4776b1fb10eaa807f320~mv2.png?originWidth=768&originHeight=576"
                  alt="Our Story"
                  width={800}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6">
                A Legacy of Sweetness
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/80 mb-6">
                Sweet Bliss was founded with a simple mission: to bring the authentic taste 
                of traditional Indian sweets to every celebration and everyday moment. Our 
                journey began decades ago, rooted in family recipes that have been perfected 
                over generations.
              </p>
              <p className="font-paragraph text-lg text-primary-foreground/80 mb-6">
                Each piece of mithai we create is a testament to our commitment to quality, 
                authenticity, and the art of traditional sweet-making. We source the finest 
                ingredients, from pure ghee to premium nuts and aromatic spices, ensuring 
                every bite delivers an unforgettable experience.
              </p>
              <p className="font-paragraph text-lg text-primary-foreground/80">
                Today, we continue to honor these time-tested traditions while serving our 
                community with the same dedication and passion that started it all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-6 py-24">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-6">
              Our Values
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-8 text-center"
              >
                <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="w-full px-6 py-16">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6">
                The Art of Making Mithai
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/80 mb-6">
                Creating authentic Indian sweets is both an art and a science. Our master 
                confectioners bring years of experience and expertise to every batch, 
                carefully balancing flavors, textures, and presentation.
              </p>
              <p className="font-paragraph text-lg text-primary-foreground/80 mb-6">
                From the precise temperature control required for perfect barfi to the 
                delicate layering of kaju katli, every step is executed with meticulous 
                attention to detail. We believe that great mithai is made with patience, 
                skill, and an unwavering commitment to excellence.
              </p>
              <p className="font-paragraph text-lg text-primary-foreground/80">
                This dedication to craftsmanship ensures that every sweet we create meets 
                the highest standards of taste, quality, and authenticity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary rounded-3xl overflow-hidden shadow-2xl" style={{ transform: 'rotate(1.5deg)' }}>
                <Image
                  src="https://static.wixstatic.com/media/dfc47e_4427dfb7360e4a25bd51abc6b9197328~mv2.png?originWidth=768&originHeight=576"
                  alt="Crafting Mithai"
                  width={800}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="w-full px-6 py-24">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-8">
              Our Commitment to You
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12">
              We promise to deliver not just sweets, but moments of joy, celebration, 
              and connection. Every order is prepared with the same care and attention 
              as if we were making it for our own family.
            </p>
            <div className="bg-secondary rounded-2xl p-12 max-w-4xl mx-auto">
              <p className="font-paragraph text-lg text-secondary-foreground/80 italic">
                "At Sweet Bliss, we believe that great mithai has the power to bring 
                people together, create lasting memories, and celebrate life's sweetest 
                moments. This belief drives everything we do."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
