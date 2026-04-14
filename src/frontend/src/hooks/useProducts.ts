import type { Category, Product } from "@/types";
import { SAMPLE_PRODUCTS } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => SAMPLE_PRODUCTS,
    staleTime: 5 * 60 * 1000,
  });
}

export function useProductsByCategory(category: Category) {
  const { data: products = [], ...rest } = useProducts();
  return {
    ...rest,
    data: products.filter((p) => p.category === category),
  };
}
