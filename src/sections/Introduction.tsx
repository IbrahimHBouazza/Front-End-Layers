"use client";
import Tag from "@/components/Tag";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ['start end', 'end start'],
    });

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 flex flex-col gap-4">
                        <span className="">Your creative process deserves better.</span>{" "}
                        <span className="flex flex-wrap justify-center gap-x-2">
                            {words.map((word, index) => {
                                const opacity = useTransform(wordIndex, [index - 1, index], [0.1, 1]);
                                return (
                                    <motion.span
                                        key={index}
                                        style={{ opacity }}
                                        className="transition duration-300 text-white"
                                    >
                                        {word}
                                    </motion.span>
                                );
                            })}
                        </span>
                        <span className="text-lime-400 block mt-4">That's why we built Layers.</span>
                    </div>
                </div>
                <div className="h-[200vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
