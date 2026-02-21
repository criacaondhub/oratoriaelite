import { motion } from "framer-motion"
import React from "react"

const PoliceElite = () => {
    return (
        <section className="relative w-full py-24 bg-black overflow-hidden font-body">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center mb-16 md:mb-24">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center text-3xl md:text-[48px] font-black font-heading text-white uppercase leading-[1.1] max-w-5xl"
                >
                    <span className="relative inline-block">
                        <span className="relative z-10 px-4 py-1">Um método validado</span>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0 bg-[#CC0000]"
                            style={{ transformOrigin: "left" }}
                            viewport={{ once: true }}
                        />
                    </span>{" "}
                    por políticos, influentes,<br />
                    bilionários e até a elite da polícia
                </motion.h2>
            </div>

            {/* Full Screen Image (Ponta a Ponta) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-full flex justify-center"
            >
                <img
                    src="assets/galeria-policial.webp"
                    alt="Método validado pela Elite"
                    className="w-full h-auto object-cover"
                />
            </motion.div>
        </section>
    )
}

export default PoliceElite
