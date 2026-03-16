"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { testimonials } from "@/data/testimonials";
import { WordReveal } from "@/components/word-reveal";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-eo-gold text-eo-gold"
              : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = testimonials.length - visibleCount;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + visibleCount
  );

  return (
    <Section id="testimonials" className="bg-eo-navy text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-eo-blue rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-eo-gold rounded-full blur-[150px] opacity-10 -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-eo-gold font-semibold tracking-wider uppercase text-sm mb-3">
            Client Testimonials
          </h2>
          <WordReveal
            text="Trusted by Government and Industry Leaders"
            as="h3"
            className="text-3xl md:text-4xl font-bold text-white"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-eo-gold/50 mb-4 shrink-0" />

                {/* Rating */}
                {testimonial.rating && (
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                )}

                {/* Quote text */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-1 text-sm md:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.title}
                  </p>
                  <p className="text-sm text-eo-gold">
                    {testimonial.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        {testimonials.length > visibleCount && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous testimonials"
              className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial group ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-eo-gold"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={activeIndex === maxIndex}
              aria-label="Next testimonials"
              className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
