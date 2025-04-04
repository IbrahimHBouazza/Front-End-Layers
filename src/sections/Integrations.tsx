"use client";
import Image from "next/image";
import figmaLogo from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import Tag from "@/components/Tag";
import IntegrationsColumn from "@/components/IntegrationsColumn";
import { motion } from "framer-motion";

const integrations = [
  { name: "Figma", icon: figmaLogo, description: "Figma is a collaborative interface design tool." },
  { name: "Notion", icon: notionLogo, description: "Notion is an all-in-one workspace for notes and docs." },
  { name: "Slack", icon: slackLogo, description: "Slack is a powerful team communication platform." },
  { name: "Relume", icon: relumeLogo, description: "Relume is a no-code website builder and design system." },
  { name: "Framer", icon: framerLogo, description: "Framer is a professional website prototyping tool." },
  { name: "GitHub", icon: githubLogo, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationsType = typeof integrations;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              We integrate with the tools you already use to make your workflow seamless. 
              It's easy to connect your favorite apps to your designs.
            </p>
          </motion.div>

          <div>
            <div
              className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4
                [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
            >
              {/* Column 1 - Scroll down */}
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full"
              >
                <IntegrationsColumn integrations={integrations} className="h-full" />
              </motion.div>

              {/* Column 2 - Scroll up (reverse) */}
              <motion.div
                animate={{ y: ["-50%", "0%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="hidden md:flex"
              >
                <IntegrationsColumn integrations={integrations.slice().reverse()} className="h-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
