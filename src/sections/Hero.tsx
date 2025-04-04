"use client";

import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 lg:py-32 flex flex-col items-center justify-center">
      <AnimatePresence>
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
        <div className="container flex justify-center">
            <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full text-neutral-950 font-semibold">
              £7.5M seed round raised
            </div>
        </div>

      <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">
        Impactful Design, created effortlessly
      </h1>

      <p className="text-center text-xl text-white/50 mt-8">
        Layers is a design tool that helps you create beautiful, responsive websites quickly and easily.
      </p>

      <form className="flex border border-white/15 rounded-full p-2 mt-8 w-full sm:w-4/5 md:w-3/4 lg:max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent px-4 flex-1 outline-none md:flex-1 w-full"
        />
        <Button
          type="submit"
          variant="primary"
          className="whitespace-nowrap mr-1"
          size="sm"
        >
          Get Started
        </Button>
      </form>
      </motion.div>
      </AnimatePresence>
    </section>
  );
}
