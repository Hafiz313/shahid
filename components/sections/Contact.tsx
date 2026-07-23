"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contact, personal } from "@/config/content";
import { useInView } from "@/lib/hooks/useInView";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/hooks/useAnimationVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { isValidEmail } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const { ref, isInView } = useInView({ threshold: 0.1 });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        window.location.href = `mailto:${contact.emailTarget}?subject=${encodeURIComponent(`Portfolio Contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      window.location.href = `mailto:${contact.emailTarget}?subject=${encodeURIComponent(`Portfolio Contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-surface/30">
      <SectionHeading
        title={contact.heading}
        subtitle={contact.subheading}
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div variants={fadeUp}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="contact-name"
                label="Name"
                placeholder={contact.form.namePlaceholder}
                value={formData.name}
                onChange={(val) => {
                  setFormData((prev) => ({ ...prev, name: val }));
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                error={errors.name}
                required
              />

              <Input
                id="contact-email"
                label="Email"
                type="email"
                placeholder={contact.form.emailPlaceholder}
                value={formData.email}
                onChange={(val) => {
                  setFormData((prev) => ({ ...prev, email: val }));
                  if (errors.email)
                    setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                error={errors.email}
                required
              />

              <Input
                id="contact-message"
                label="Message"
                type="textarea"
                placeholder={contact.form.messagePlaceholder}
                value={formData.message}
                onChange={(val) => {
                  setFormData((prev) => ({ ...prev, message: val }));
                  if (errors.message)
                    setErrors((prev) => ({ ...prev, message: undefined }));
                }}
                error={errors.message}
                required
                rows={6}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
                id="contact-submit"
                ariaLabel="Send your message"
              >
                {isSubmitting
                  ? contact.form.submittingLabel
                  : contact.form.submitLabel}
              </Button>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
                  >
                    ✓ {contact.success}
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    ✕ {contact.error}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-xl font-semibold text-textPrimary mb-6">
                Other Ways to Reach Me
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <span className="text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-textMuted">Email</p>
                    <p className="text-textSecondary group-hover:text-primary transition-colors">
                      {personal.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <span className="text-lg">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-textMuted">Phone</p>
                    <p className="text-textSecondary group-hover:text-primary transition-colors">
                      {personal.phone}
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <span className="text-lg">💼</span>
                  </div>
                  <div>
                    <p className="text-sm text-textMuted">LinkedIn</p>
                    <p className="text-textSecondary group-hover:text-primary transition-colors">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <span className="text-lg">🐙</span>
                  </div>
                  <div>
                    <p className="text-sm text-textMuted">GitHub</p>
                    <p className="text-textSecondary group-hover:text-primary transition-colors">
                      View my repositories
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
