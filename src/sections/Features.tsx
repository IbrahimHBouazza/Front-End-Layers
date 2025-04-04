"use client";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Tag>Features</Tag>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-center font-medium text-4xl md:text-6xl lg:text-7xl mt-10"
          >
            Where power meets <span className="text-lime-400">simplicity</span>
          </motion.h2>

          <div
            className="mt-12 grid grid-cols-1 
            md:grid-cols-4 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {i === 0 && (
                  <FeatureCard
                    title="Real time collaboration"
                    description="Work with your team in real time. Share your designs with your team and get feedback on your work."
                    className="md:col-span-2 lg:col-span-1"
                  >
                    <div className="aspect-video flex items-center">
                      <Avatar className="z-30">
                        <img
                          src={avatar1.src}
                          alt="Avatar 1"
                          className="rounded-full"
                        />
                      </Avatar>
                      <Avatar className="-ml-6 z-30 border-indigo-500">
                        <img
                          src={avatar2.src}
                          alt="Avatar 2"
                          className="rounded-full"
                        />
                      </Avatar>
                      <Avatar className="-ml-6 border-amber-500">
                        <img
                          src={avatar3.src}
                          alt="Avatar 3"
                          className="rounded-full"
                        />
                      </Avatar>
                      <Avatar className="-ml-6" />
                    </div>
                  </FeatureCard>
                )}
                {i === 1 && (
                  <FeatureCard
                    title="Interactive prototyping"
                    description="Engage your users with interactive prototypes. Make your designs come to life with animations and transitions."
                    className="md:col-span-2 lg:col-span-1"
                  >
                    <div className="aspect-video flex items-center justify-center">
                      <p className="text-4xl font-extrabold text-white/20 text-center">
                        We've achieved{" "}
                        <span
                          className="bg-gradient-to-r from-purple-200 to 
                            bg-pink-400 bg-clip-text text-transparent"
                        >
                          Incredible
                        </span>{" "}
                        growth in the last 3 months.
                      </p>
                    </div>
                  </FeatureCard>
                )}
                {i === 2 && (
                  <FeatureCard
                    title="Keyboard quick actions"
                    description="Powerful keyboard shortcuts to help you fly through your design workflow."
                    className="md:col-span-2 md:col-start-2 lg:col-span-1"
                  >
                    <div className="aspect-video flex items-center justify-center gap-4">
                      {["Shift", "alt", "C"].map((k, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 0.95 }}
                          whileTap={{ scale: 0.85 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Key className={k === "Shift" ? "w-28" : ""}>
                            {k}
                          </Key>
                        </motion.div>
                      ))}
                    </div>
                  </FeatureCard>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            className="mt-8 flex flex-wrap gap-3 justify-center"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 0 2px rgba(163, 230, 53, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-neutral-900 border border-white/10 inline-flex 
                    px-3 py-1.5 md:py-2 rounded-2xl gap-3 items-center"
              >
                <span
                  className="bg-lime-400 text-neutral-950 size-5 
                        rounded-full inline-flex items-center justify-center text-xl"
                >
                  &#10038;
                </span>
                <span className="font-medium md:text-lg">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
