import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useSubmitInquiry";
import type { InquirySubmission } from "@/types";
import { useState } from "react";

interface InquiryFormProps {
  productId?: string;
  productName?: string;
}

function makeDefault(
  productId?: string,
  productName?: string,
): InquirySubmission {
  return {
    name: "",
    email: "",
    phone: "",
    productId,
    size: "",
    color: "",
    quantity: 10,
    message: productName
      ? `${productName} ke baare mein inquiry karna chahta/chahti hoon.`
      : "",
  };
}

export function InquiryForm({ productId, productName }: InquiryFormProps) {
  const [form, setForm] = useState<InquirySubmission>(() =>
    makeDefault(productId, productName),
  );
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending } = useSubmitInquiry();

  const setField =
    (key: keyof InquirySubmission) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const val =
        key === "quantity" ? Number(e.target.value || "0") : e.target.value;
      setForm((prev) => ({ ...prev, [key]: val }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        setSubmitted(true);
        setForm(makeDefault(productId));
      },
    });
  };

  if (submitted) {
    return (
      <div
        className="text-center py-10 bg-accent/10 rounded-xl border border-accent/30"
        data-ocid="inquiry-success"
      >
        <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-display text-xl font-bold text-primary mb-2">
          Shukriya! Inquiry Mil Gayi
        </h3>
        <p className="font-body text-muted-foreground text-sm mb-5">
          Hum 24 ghante mein aapko contact karenge.
        </p>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={() => setSubmitted(false)}
        >
          Ek Aur Inquiry Karein
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      data-ocid="inquiry-form"
    >
      {productName && (
        <div className="bg-accent/10 border border-accent/30 rounded-lg px-4 py-3">
          <p className="font-body text-sm text-primary font-semibold">
            Product: <span className="text-accent">{productName}</span>
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label
            htmlFor="inq-name"
            className="font-body text-sm font-semibold text-foreground"
          >
            Aapka Naam <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inq-name"
            value={form.name}
            onChange={setField("name")}
            placeholder="Ramesh Kumar"
            required
            className="border-border"
            data-ocid="inquiry-name-input"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="inq-phone"
            className="font-body text-sm font-semibold text-foreground"
          >
            Mobile Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inq-phone"
            type="tel"
            value={form.phone}
            onChange={setField("phone")}
            placeholder="+91 98765 43210"
            required
            className="border-border"
            data-ocid="inquiry-phone-input"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="inq-email"
          className="font-body text-sm font-semibold text-foreground"
        >
          Email Address
        </Label>
        <Input
          id="inq-email"
          type="email"
          value={form.email}
          onChange={setField("email")}
          placeholder="ramesh@example.com"
          className="border-border"
          data-ocid="inquiry-email-input"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <Label
            htmlFor="inq-size"
            className="font-body text-sm font-semibold text-foreground"
          >
            Size
          </Label>
          <Input
            id="inq-size"
            value={form.size}
            onChange={setField("size")}
            placeholder="M / 10 / etc."
            className="border-border"
            data-ocid="inquiry-size-input"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="inq-color"
            className="font-body text-sm font-semibold text-foreground"
          >
            Color
          </Label>
          <Input
            id="inq-color"
            value={form.color}
            onChange={setField("color")}
            placeholder="Navy/White"
            className="border-border"
            data-ocid="inquiry-color-input"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="inq-qty"
            className="font-body text-sm font-semibold text-foreground"
          >
            Quantity <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inq-qty"
            type="number"
            min={1}
            value={form.quantity}
            onChange={setField("quantity")}
            required
            className="border-border"
            data-ocid="inquiry-quantity-input"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="inq-message"
          className="font-body text-sm font-semibold text-foreground"
        >
          Message / Sawaal
        </Label>
        <Textarea
          id="inq-message"
          value={form.message}
          onChange={setField("message")}
          rows={4}
          placeholder="Koi bhi sawaal ya zaroorat batayein..."
          className="border-border resize-none"
          data-ocid="inquiry-message-input"
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-semibold transition-smooth"
        size="lg"
        data-ocid="inquiry-submit-btn"
      >
        {isPending ? "Submit ho raha hai..." : "Inquiry Bhejo"}
      </Button>
    </form>
  );
}
