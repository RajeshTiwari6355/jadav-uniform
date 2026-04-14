import { InquiryForm } from "@/components/InquiryForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    lines: ["+91 98765 43210", "+91 91234 56789"],
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@jadavuniform.com", "orders@jadavuniform.com"],
    href: "mailto:info@jadavuniform.com",
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["Main Market, Uniform Bazar,", "Rajkot, Gujarat 360001"],
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon–Sat: 9:00 AM – 7:00 PM", "Sun: 10:00 AM – 4:00 PM"],
  },
];

export function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary border-b-2 border-accent py-14">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Baat Karein
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
              Sampark Karein
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl leading-relaxed">
              Order inquiry, bulk pricing, ya koi sawaal — hum yahan hain. 24
              ghante mein reply guaranteed.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-primary mb-2">
              Contact Details
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full mb-8" />
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card rounded-xl p-5 border border-border product-card-hover"
                  data-ocid={`contact-${info.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-primary text-sm mb-1">
                        {info.title}
                      </p>
                      {info.lines.map((line) => (
                        <p
                          key={line}
                          className="font-body text-sm text-muted-foreground"
                        >
                          {info.href ? (
                            <a
                              href={info.href}
                              className="hover:text-accent transition-smooth"
                              target={
                                info.href.startsWith("https")
                                  ? "_blank"
                                  : undefined
                              }
                              rel="noopener noreferrer"
                            >
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden border border-border bg-muted h-48 flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=Rajkot+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-smooth"
              >
                <MapPin className="w-8 h-8" />
                <span className="font-body text-sm font-semibold">
                  Google Maps par Dekho
                </span>
              </a>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-primary mb-2">
              Inquiry Form
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full mb-8" />
            <div className="bg-card rounded-xl border border-border p-6 md:p-8">
              <InquiryForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
