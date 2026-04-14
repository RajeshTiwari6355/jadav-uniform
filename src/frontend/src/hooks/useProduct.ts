import type { Product } from "@/types";
import { SAMPLE_PRODUCTS } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useProduct(id: string) {
  return useQuery<Product | null>({
    queryKey: ["product", id],
    queryFn: async () => SAMPLE_PRODUCTS.find((p) => p.id === id) ?? null,
    staleTime: 5 * 60 * 1000,
  });
}
