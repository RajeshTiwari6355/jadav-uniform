import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, Heart, Star, Users } from "lucide-react";
import { motion } from "motion/react";

const milestones = [
  {
    year: "2004",
    title: "Shuruaat",
    desc: "Rajkot ke ek chote shop se Jadav Uniform ki neev rakhi gayi.",
  },
  {
    year: "2010",
    title: "Expansion",
    desc: "Gujarat ke 50+ schools mein supply shuru ki.",
  },
  {
    year: "2018",
    title: "Customization",
    desc: "Custom logo embroidery aur institution-specific uniforms ki seva shuru ki.",
  },
  {
    year: "2024",
    title: "Today",
    desc: "200+ institutions, lakhon santushta students aur parents.",
  },
];

const values = [
  {
    icon: Award,
    title: "Shreshth Quality",
    desc: "Har uniform mein ISI standard fabric use hota hai. Quality testing mandatory hai.",
  },
  {
    icon: Heart,
    title: "Vishwaas",
    desc: "20 saalon se schools aur parents ka bharosa hamaari sabse badi poonji hai.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Gujarat ke har bache tak quality uniform pahunchana hamara lakshya hai.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "Sirf uniform nahi, ek school identity banate hain hum.",
  },
];

export function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-primary border-b-2 border-accent py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Hamare Baare Mein
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              JADAV UNIFORM Ki Kahani
            </h1>
            <p className="font-body text-primary-foreground/70 max-w-2xl text-lg leading-relaxed">
              2004 se Rajkot mein. Gujarat ke schools aur colleges ke liye
              premium uniforms banane ka ek passionate safar.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                Humari Story
              </p>
              <h2 className="section-title mb-3">Ek Chhote Sapne Se Shuru</h2>
              <div className="h-1 w-14 bg-accent rounded-full mb-6" />
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Jadav Uniform ki shuruaat 2004 mein ek chote shop se hui thi.
                  Hamara lakshya tha ki Gujarat ke students ko affordable aur
                  durable school uniforms milein.
                </p>
                <p>
                  Dheere dheere, hamare kaam ki quality ki charcha failti gayi.
                  Schools ne direct orders dene shuru kiye. Aaj hum 200 se zyada
                  institutions ko supply karte hain.
                </p>
                <p>
                  Har uniform mein hum premium fabric use karte hain, custom
                  embroidery available hai, aur bulk orders ke liye special
                  institutional pricing dete hain.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden border border-border bg-muted"
            >
              <img
                src="/assets/generated/hero-uniforms.dim_1200x600.jpg"
                alt="JADAV UNIFORM Quality Products"
                className="w-full h-72 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              20+ Saal
            </p>
            <h2 className="section-title">Hamara Safar</h2>
            <div className="h-1 w-14 bg-accent rounded-full mt-3 mx-auto" />
          </div>
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div
                    className={`flex-1 bg-card rounded-xl p-6 border border-border product-card-hover ${i % 2 === 0 ? "md:text-right" : ""}`}
                  >
                    <span className="font-display text-2xl font-bold text-accent">
                      {m.year}
                    </span>
                    <h3 className="font-display font-bold text-primary text-lg mt-1">
                      {m.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {m.desc}
                    </p>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-accent items-center justify-center shrink-0 z-10">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Hamare Moolya
            </p>
            <h2 className="section-title">Hum Kya Maante Hain</h2>
            <div className="h-1 w-14 bg-accent rounded-full mt-3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-card rounded-xl p-6 border border-border product-card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-primary mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 border-t-2 border-accent">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Hamara Collection Dekho
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8 text-lg max-w-md mx-auto">
            School ya college — sab ke liye uniform available hai. Aaj order
            karein.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/shop">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
                data-ocid="about-shop-btn"
              >
                Shop Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
                data-ocid="about-contact-btn"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
