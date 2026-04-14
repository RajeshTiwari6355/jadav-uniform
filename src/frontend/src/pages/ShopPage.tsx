import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/useProducts";
import type { Category } from "@/types";
import { Link, useSearch } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Filter = "all" | Category;

const categoryFilters: { value: Filter; label: string }[] = [
  { value: "all", label: "Sabhi" },
  { value: "school", label: "School" },
  { value: "college", label: "College" },
];

const sizeOptions = [
  "All Sizes",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
];
const colorOptions = [
  "All Colors",
  "Navy",
  "White",
  "Blue",
  "Black",
  "Maroon",
  "Red",
  "Green",
  "Gold",
];

interface ShopSearch {
  category?: string;
}

export function ShopPage() {
  const searchParams = useSearch({ strict: false }) as ShopSearch;
  const [activeFilter, setActiveFilter] = useState<Filter>(() => {
    if (searchParams?.category === "school") return "school";
    if (searchParams?.category === "college") return "college";
    return "all";
  });
  const [search, setSearch] = useState("");
  const [selectedSize, setSelectedSize] = useState("All Sizes");
  const [selectedColor, setSelectedColor] = useState("All Colors");
  const { data: products = [], isLoading } = useProducts();

  // Sync category from URL search params on mount/change
  useEffect(() => {
    if (searchParams?.category === "school") setActiveFilter("school");
    else if (searchParams?.category === "college") setActiveFilter("college");
  }, [searchParams?.category]);

  const filtered = products.filter((p) => {
    const matchCategory = activeFilter === "all" || p.category === activeFilter;
    const matchSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchSize =
      selectedSize === "All Sizes" ||
      (Array.isArray(p.sizes) && p.sizes.includes(selectedSize));
    const matchColor =
      selectedColor === "All Colors" ||
      (Array.isArray(p.colors) &&
        p.colors
          .map((c: string) => c.toLowerCase())
          .some((c) => c.includes(selectedColor.toLowerCase())));
    return matchCategory && matchSearch && matchSize && matchColor;
  });

  const resetFilters = () => {
    setSearch("");
    setActiveFilter("all");
    setSelectedSize("All Sizes");
    setSelectedColor("All Colors");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-primary border-b-2 border-accent py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Our Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              Uniform Shop
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-10">
        {/* Category Filters */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <fieldset className="flex gap-2 flex-wrap border-0 p-0 m-0">
              <legend className="sr-only">Category filter</legend>
              {categoryFilters.map((f) => (
                <Button
                  key={f.value}
                  variant={activeFilter === f.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(f.value)}
                  className={
                    activeFilter === f.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-foreground hover:border-accent hover:text-accent"
                  }
                  data-ocid={`filter-${f.value}`}
                >
                  {f.label}
                </Button>
              ))}
            </fieldset>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search uniforms..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 border-border"
                data-ocid="shop-search-input"
              />
            </div>
          </div>

          {/* Size & Color Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2">
              <label
                htmlFor="size-filter"
                className="font-body text-sm font-medium text-foreground shrink-0"
              >
                Size:
              </label>
              <select
                id="size-filter"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="font-body text-sm border border-border rounded-md px-3 py-1.5 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                data-ocid="shop-size-filter"
              >
                {sizeOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label
                htmlFor="color-filter"
                className="font-body text-sm font-medium text-foreground shrink-0"
              >
                Color:
              </label>
              <select
                id="color-filter"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="font-body text-sm border border-border rounded-md px-3 py-1.5 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                data-ocid="shop-color-filter"
              >
                {colorOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        {!isLoading && (
          <p className="font-body text-sm text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            products found
          </p>
        )}

        {/* Product Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className="bg-card rounded-lg overflow-hidden border border-border"
              >
                <Skeleton className="h-52 w-full" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="text-center py-20 bg-muted/20 rounded-xl border border-border"
            data-ocid="shop-empty-state"
          >
            <p className="font-display text-xl font-bold text-primary mb-2">
              Koi product nahi mila
            </p>
            <p className="font-body text-muted-foreground mb-6">
              Search ya filter change karein.
            </p>
            <Button
              onClick={resetFilters}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Sab Dikhao
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.4) }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Bulk Order Banner */}
      <div className="bg-muted/30 border-t border-border py-10 mt-10">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="font-display text-xl font-bold text-primary mb-2">
            Bulk Order ke liye?
          </p>
          <p className="font-body text-muted-foreground mb-5 text-sm">
            Schools aur colleges ke liye special rates available hain. Aaj hi
            inquiry karein.
          </p>
          <Link to="/contact">
            <Button className="btn-primary" data-ocid="shop-bulk-inquiry-btn">
              Inquiry Karein
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
