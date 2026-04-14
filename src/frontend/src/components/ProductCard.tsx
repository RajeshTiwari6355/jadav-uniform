import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";
import { Link } from "@tanstack/react-router";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="bg-card rounded-xl overflow-hidden border border-border product-card-hover flex flex-col group"
      data-ocid={`product-card-${product.id}`}
    >
      <Link
        to="/shop/$productId"
        params={{ productId: product.id }}
        className="block overflow-hidden relative"
      >
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-0 text-[10px] uppercase tracking-widest font-semibold">
          {product.category === "school" ? "School" : "College"}
        </Badge>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link
          to="/shop/$productId"
          params={{ productId: product.id }}
          className="group/title"
        >
          <h3 className="font-display font-bold text-primary text-base leading-snug mb-1 group-hover/title:text-accent transition-smooth line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="h-px w-10 bg-accent mb-3" />
        <p className="font-body text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.colors.slice(0, 3).map((c) => (
            <span
              key={c}
              className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-body text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="font-display text-xl font-bold text-primary">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="font-body text-xs text-muted-foreground ml-1">
              /piece
            </span>
          </div>
          <Link to="/shop/$productId" params={{ productId: product.id }}>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-smooth text-xs font-semibold"
              data-ocid={`product-view-btn-${product.id}`}
            >
              View
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
