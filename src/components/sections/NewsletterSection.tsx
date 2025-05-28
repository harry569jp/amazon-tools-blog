"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FadeIn from "../animations/FadeIn";

type FormValues = {
  name: string;
  email: string;
};

export default function NewsletterSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setFormState("submitting");
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setFormState("success");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("error");
    }
  };

  return (
    <section className="py-20 bg-[hsl(var(--rimbo-dark))] text-white">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <p className="mono-text text-[hsl(var(--rimbo-yellow))] mb-2">NEWSLETTER</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="heading-lg mb-2">Branding<br/>Brilliance</h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-text max-w-2xl mb-8">
              Sign up for your monthly dose of Branding Brilliance. Keep your brand sharp, your site smarter, and your strategy one step ahead.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="w-full max-w-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Name *"
                            className="bg-transparent border-b border-white/30 rounded-none px-0 py-2 text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:border-white"
                            {...field}
                          />
                          <motion.span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--rimbo-yellow))]"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            animate={form.formState.touchedFields.name ? { width: "100%" } : { width: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="E-mail *"
                            type="email"
                            className="bg-transparent border-b border-white/30 rounded-none px-0 py-2 text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:border-white"
                            {...field}
                          />
                          <motion.span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--rimbo-yellow))]"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            animate={form.formState.touchedFields.email ? { width: "100%" } : { width: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full bg-white text-[hsl(var(--rimbo-dark))] font-medium py-2.5 px-4 rounded-md hover:bg-white/90 transition-colors duration-300 disabled:opacity-70"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {formState === "submitting" ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[hsl(var(--rimbo-dark))]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : "Submit"}
                  </motion.button>
                </div>
              </form>
            </Form>
          </FadeIn>

          {/* Success message */}
          <AnimatedMessage
            show={formState === "success"}
            message="Success! The 'Branding Brilliance' newsletter will now land in your inbox ;)"
            type="success"
          />

          {/* Error message */}
          <AnimatedMessage
            show={formState === "error"}
            message="Something went wrong while submitting."
            type="error"
          />
        </div>
      </div>
    </section>
  );
}

type AnimatedMessageProps = {
  show: boolean;
  message: string;
  type: "success" | "error";
};

function AnimatedMessage({ show, message, type }: AnimatedMessageProps) {
  return (
    <div className="h-6 mt-4">
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className={`text-sm ${type === "success" ? "text-[hsl(var(--rimbo-yellow))]" : "text-red-400"}`}
        >
          {message}
        </motion.div>
      )}
    </div>
  );
}
