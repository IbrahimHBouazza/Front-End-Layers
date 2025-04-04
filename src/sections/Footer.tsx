"use client";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "#", label: "Contact Us" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col gap-8 md:gap-12"
        >
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:gap-12"
          >
            <h1 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
              Get Started Today
            </h1>
            <p className="text-white/50 text-xl font-medium mt-3 text-center max-w-xl mx-auto">
              Get in touch with us to start your journey to success.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center"
            >
              <Button variant="primary" className="text-lg md:text-lg">
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="gap-4 md:gap-12 flex text-white/70 text-base md:text-lg">
              {footerLinks.map((link) => (
                <motion.div
                  whileHover={{ color: "#a3e635", scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  key={link.label}
                >
                  <Link href={link.href}>{link.label}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <p className="text-white/30 text-base md:text-lg">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
