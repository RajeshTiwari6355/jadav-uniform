import type { InquirySubmission } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSubmitInquiry() {
  return useMutation<string, Error, InquirySubmission>({
    mutationFn: async (_submission: InquirySubmission) => {
      // Simulate network delay
      await new Promise((res) => setTimeout(res, 800));
      return `INQ-${Date.now()}`;
    },
    onSuccess: () => {
      toast.success(
        "Inquiry submit ho gayi! Hum 24 ghante mein aapse contact karenge.",
      );
    },
    onError: () => {
      toast.error("Inquiry submit nahi hui. Kripya dobara try karein.");
    },
  });
}
