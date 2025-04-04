"use client";

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", image: twiceLogo },
    { name: "Acme Corp", image: celestialLogo },
    { name: "Echo Valley", image: apexLogo },
    { name: "Pulse", image: outsideLogo },
    { name: "Outside", image: pulseLogo },
    { name: "Apex", image: echoValleyLogo },
    { name: "Celestial", image: acmeLogo },
    { name: "Twice", image: quantumLogo },       
];

export default function LogoTicker() {
    return <section className="py-24 overflow-x-clip lg:py-5">
        <div className="container">
            <h3 className="text-center text-xl text-white/50 mb-8">
            Already chosen by these market leaders
            </h3>
            <div className="flex gap-24 items-center overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,transparent)]">
                <motion.div 
                className="flex items-center gap-8 whitespace-nowrap"
                initial={{ x: 0 }}
                animate={{ x: '-50%' }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                >
                    {Array.from({ length: 2 }).map((_, index) => (
                        <Fragment key={index}>
                            {logos.map((logo) => (
                                <img 
                                src={logo.image.src} 
                                key={logo.name} 
                                alt={logo.name} 
                                className="" 
                                />
                            ))}
                        </Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>;
}
