import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Palette, ShieldCheck, Truck, Users } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Durable fabrics jo school ke poore session tak tikein. Colorfastness guaranteed.",
  },
  {
    icon: Truck,
    title: "Bulk Delivery",
    desc: "Schools aur colleges ke liye bulk orders pe special discount aur timely delivery.",
  },
  {
    icon: Palette,
    title: "Custom Colors",
    desc: "Aapke institution ke colors mein custom uniforms. Logo embroidery bhi available.",
  },
  {
    icon: Users,
    title: "Trusted by 200+ Schools",
    desc: "Gujarat ke 200 se zyada schools aur colleges ne Jadav Uniform par bharosa kiya.",
  },
];

export function HomePage() {
  const { data: products = [], isLoading } = useProducts();
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-uniforms.dim_1200x600.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 max-w-7xl py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-accent/20 text-accent border border-accent/40 mb-6 font-body text-xs tracking-widest uppercase">
                Rajkot ki Bharosemand Dukaan
              </Badge>
            </motion.div>
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              School &amp; College <span className="text-accent">Uniforms</span>{" "}
              Jo Tikti Hain
            </motion.h1>
            <motion.p
              className="font-body text-lg text-primary-foreground/75 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Premium quality uniforms for schools and colleges. Bulk orders
              welcome. Custom logo embroidery, all sizes available. Gujarat mein
              20+ saalon ka experience.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/shop">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 gap-2"
                  data-ocid="hero-shop-btn"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
                  data-ocid="hero-inquiry-btn"
                >
                  Bulk Inquiry
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
          aria-hidden="true"
        />
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="bg-card rounded-lg p-6 border border-border product-card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <feat.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-primary mb-2">
                  {feat.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-body text-sm font-semibold text-accent uppercase tracking-widest mb-2">
                Best Sellers
              </p>
              <h2 className="section-title">Popular Uniforms</h2>
              <div className="h-1 w-16 bg-accent mt-3 rounded-full" />
            </div>
            <Link to="/shop">
              <Button
                variant="ghost"
                className="text-primary font-semibold gap-1 hidden sm:flex"
                data-ocid="view-all-btn"
              >
                Sab Dekho <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="bg-card rounded-lg h-80 animate-pulse border border-border"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link to="/shop">
              <Button
                size="lg"
                className="btn-primary gap-2"
                data-ocid="homepage-shop-all-btn"
              >
                Poora Collection Dekho <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-accent"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            School ke liye Bulk Order?
          </motion.h2>
          <p className="font-body text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            200+ uniforms order karo aur special institutional pricing pao. Free
            delivery Gujarat mein.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-10"
              data-ocid="bulk-cta-btn"
            >
              Abhi Inquiry Karo
            </Button>
          </Link>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}
