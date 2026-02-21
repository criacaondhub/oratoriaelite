import { motion } from "framer-motion"

const PoliceElite = () => {
    return (
        <section className="relative w-full py-12 md:py-24 bg-black overflow-hidden font-body">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center mb-10 md:mb-24">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center text-[28px] md:text-[48px] font-extrabold md:font-black font-heading text-white uppercase leading-[1.2] md:leading-[1.1] max-w-5xl"
                >
                    <span className="relative inline-block mb-1 md:mb-0">
                        <span className="relative z-10 px-2 py-0 md:px-4 md:py-1">Um método validado</span>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-x-0 bottom-0 top-0 bg-[#CC0000]"
                            style={{ transformOrigin: "left" }}
                            viewport={{ once: true }}
                        />
                    </span>{" "}<br className="block md:hidden" />
                    por políticos, influentes,<br className="block md:hidden" />
                    bilionários e até<br className="block md:hidden" />
                    a elite da polícia
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
