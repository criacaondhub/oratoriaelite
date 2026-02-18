import { motion } from "framer-motion"
import EmblaCarousel from "../ui/EmblaCarousel"
import "../ui/embla.css"

export default function Modules() {
    const images = Array.from({ length: 15 }, (_, i) => `assets/modulo-${String(i + 1).padStart(2, '0')}.webp`)

    const OPTIONS = { loop: true, align: 'center' as const }

    return (
        <section className="relative py-20 overflow-hidden bg-transparent w-full">
            {/* 1. Header Area - Margem 32px (mb-8) */}
            <div className="container mx-auto px-6 mb-8 text-center uppercase">
                <h2 className="text-[32px] md:text-[48px] font-extrabold leading-[1.1] text-white font-heading mx-auto max-w-4xl text-center">
                    Tenha acesso ao treinamento de<br />
                    <div className="relative inline-block mt-2">
                        <span className="relative z-10 px-3 py-0">oratória mais completo do mundo</span>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0 bg-[#CC0000] -z-0"
                            style={{ transformOrigin: "left" }}
                        />
                    </div>
                </h2>
            </div>

            {/* 2. Content Area - Embla Carousel with Opacity */}
            <div className="w-full max-w-6xl mx-auto">
                <EmblaCarousel slides={images} options={OPTIONS} />
            </div>

            {/* 3. CTA Area - Margem 32px (mt-8) */}
            <div className="container mx-auto px-6 mt-8 flex justify-center">
                <motion.a
                    href="#preco"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-fit bg-[#CC0000] text-white px-10 py-5 rounded-[0.5rem] font-bold text-xl uppercase flex items-center gap-4 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
                >
                    Quero participar
                    <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        className="flex items-center justify-center pointer-events-none"
                    >
                        <i className="fi fi-rr-angle-right text-white text-2xl flex" />
                    </motion.div>
                </motion.a>
            </div>
        </section>
    )
}
