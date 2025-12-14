import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useMember } from '@/integrations';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { WixServicesProvider, MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ShoppingCart } from 'lucide-react';

function Header() {
  const { member, isAuthenticated, isLoading, actions } = useMember();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-primary border-b border-primary-foreground/10">
      <div className="max-w-[120rem] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-heading text-2xl md:text-3xl text-primary-foreground hover:opacity-80 transition-opacity">
            Sweet Bliss
          </Link>
          
          <nav className="flex items-center gap-6 md:gap-8">
            <Link to="/" className="font-paragraph text-sm md:text-base text-primary-foreground hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link to="/store" className="font-paragraph text-sm md:text-base text-primary-foreground hover:opacity-70 transition-opacity">
              Shop
            </Link>
            <Link to="/about" className="font-paragraph text-sm md:text-base text-primary-foreground hover:opacity-70 transition-opacity">
              About
            </Link>
            
            {isLoading ? (
              <div className="w-6 h-6">
                <LoadingSpinner />
              </div>
            ) : isAuthenticated ? (
              <>
                <Link to="/profile" className="font-paragraph text-sm md:text-base text-primary-foreground hover:opacity-70 transition-opacity">
                  Profile
                </Link>
                <button 
                  onClick={actions.logout}
                  className="font-paragraph text-sm md:text-base text-primary-foreground hover:opacity-70 transition-opacity"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button 
                onClick={actions.login}
                className="font-paragraph text-sm md:text-base text-primary-foreground hover:opacity-70 transition-opacity"
              >
                Sign In
              </button>
            )}
            
            <MiniCart
              cartIcon={ShoppingCart}
              cartIconClassName="text-primary-foreground hover:opacity-70 transition-opacity cursor-pointer"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10 mt-24">
      <div className="max-w-[120rem] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl text-primary-foreground mb-4">Sweet Bliss</h3>
            <p className="font-paragraph text-base text-primary-foreground/80">
              Authentic Indian sweets crafted with tradition and love
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-xl text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/store" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Shop
              </Link>
              <Link to="/about" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-xl text-primary-foreground mb-4">Connect</h4>
            <p className="font-paragraph text-base text-primary-foreground/80">
              Follow us for the latest updates and special offers
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-paragraph text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Sweet Bliss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
