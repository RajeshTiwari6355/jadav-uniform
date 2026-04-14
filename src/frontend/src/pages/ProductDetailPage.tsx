import { InquiryForm } from "@/components/InquiryForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProduct } from "@/hooks/useProduct";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Package, Palette, Phone, Ruler, Tag } from "lucide-react";
import { motion } from "motion/react";

export function ProductDetailPage() {
  const { productId } = useParams({ from: "/shop/$productId" });
  const { data: product, isLoading } = useProduct(productId);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Skeleton className="h-[420px] w-full rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="font-display text-2xl font-bold text-primary mb-3">
          Product nahi mila
        </p>
        <p className="font-body text-muted-foreground mb-6">
          Yeh product available nahi hai ya URL galat hai.
        </p>
        <Link to="/shop">
          <Button className="btn-primary">Shop par wapas jao</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border py-3">
        <div className="container mx-auto px-4 max-w-7xl flex items-center gap-2 text-sm font-body text-muted-foreground">
          <Link to="/" className="hover:text-accent transition-smooth">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent transition-smooth">
            Shop
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate max-w-xs">
            {product.name}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-10">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-body font-semibold text-muted-foreground hover:text-accent transition-smooth mb-8"
          data-ocid="back-to-shop-link"
        >
          <ArrowLeft className="w-4 h-4" /> Shop par wapas jao
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-muted border border-border">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <Badge className="w-fit mb-3 bg-accent/15 text-accent border border-accent/30 text-xs uppercase tracking-widest font-semibold">
              {product.category === "school"
                ? "School Uniform"
                : "College Uniform"}
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3 leading-snug">
              {product.name}
            </h1>
            <div className="h-1 w-14 bg-accent rounded-full mb-5" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-6">
              <Tag className="w-4 h-4 text-accent" />
              <span className="font-display text-3xl font-bold text-primary">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="font-body text-sm text-muted-foreground">
                / piece
              </span>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-5 bg-muted/30 rounded-xl border border-border">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Ruler className="w-4 h-4 text-accent" />
                  <span className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Available Sizes
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-card border border-border rounded text-xs font-body font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Palette className="w-4 h-4 text-accent" />
                  <span className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Colors
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 bg-card border border-border rounded text-xs font-body font-medium text-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-8 text-sm font-body text-muted-foreground">
              <Package className="w-4 h-4 text-accent" />
              <span>
                Minimum order:{" "}
                <strong className="text-foreground">10 pieces</strong>
              </span>
            </div>

            <a href="tel:+919876543210">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" /> Call to Order
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Inquiry Form */}
        <div className="mt-14">
          <div className="mb-6">
            <h2 className="section-title">Inquiry Karein</h2>
            <div className="h-1 w-14 bg-accent rounded-full mt-2" />
            <p className="font-body text-muted-foreground mt-2 text-sm">
              Bulk order ya koi sawaal? Neeche form fill karein, hum 24 ghante
              mein reply karenge.
            </p>
          </div>
          <div className="max-w-2xl">
            <InquiryForm productId={product.id} productName={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
