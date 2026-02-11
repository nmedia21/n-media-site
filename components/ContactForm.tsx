"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Check } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50/30 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary-500 mb-4">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-primary-600 mb-16 max-w-xl font-light leading-relaxed">
            Une idée, un projet, une question ? On adore les échanges ! N’hésitez pas à nous partager votre vision.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-10">
              {[
                { icon: Mail, label: "Email", value: "contact@n-media.fr", href: "mailto:contact@n-media.fr" },
                { icon: MapPin, label: "Localisation", value: "France", href: "#" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-medium tracking-widest uppercase text-primary-400 mb-2">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="text-primary-800 hover:text-primary-900 transition-colors font-light"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="relative"
              >
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-white flex items-center justify-center z-10 border border-primary-200 p-12"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-6 h-6 text-accent" strokeWidth={2} />
                      </div>
                      <p className="font-display text-xl font-semibold text-primary-900">Message envoyé</p>
                      <p className="text-primary-600 text-sm mt-1">Nous vous répondrons rapidement.</p>
                    </div>
                  </motion.div>
                )}

                <div className={`space-y-6 ${submitted ? "opacity-0 pointer-events-none" : ""}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium tracking-widest uppercase text-primary-500 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-b border-primary-200 text-primary-900 placeholder-primary-400 focus:outline-none focus:border-primary-900 transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium tracking-widest uppercase text-primary-500 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-b border-primary-200 text-primary-900 placeholder-primary-400 focus:outline-none focus:border-primary-900 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium tracking-widest uppercase text-primary-500 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-0 py-3 bg-transparent border-b border-primary-200 text-primary-900 placeholder-primary-400 focus:outline-none focus:border-primary-900 transition-colors resize-none"
                      placeholder="Dites-nous tout, on a hâte de vous lire !"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-primary text-white font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" strokeWidth={1.5} />
                    )}
                    <span>{isSubmitting ? "Envoi..." : "Envoyer"}</span>
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
