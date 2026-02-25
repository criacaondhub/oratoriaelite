import { motion } from "framer-motion"
import EmblaCarousel from "../ui/EmblaCarousel"
import "../ui/embla.css"

export default function Modules() {
    const images = Array.from({ length: 15 }, (_, i) => `assets/modulo-${String(i + 1).padStart(2, '0')}.webp`)

    const OPTIONS = {
        loop: true,
        align: 'center' as const
    }

    return (
        <section className="relative py-20 overflow-hidden bg-transparent w-full">
            {/* 1. Header Area */}
            <div className="container mx-auto px-6 mb-12 text-center uppercase">
                <h2 className="text-[28px] md:text-[48px] font-extrabold leading-[1.1] text-white font-heading mx-auto max-w-4xl text-center">
                    <div className="relative inline-block">
                        <span className="relative z-10 px-2 md:px-3 py-0">
                            O treinamento de oratória
                        </span>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-x-0 bottom-0 top-0 bg-[#CC0000] -z-0"
                            style={{ transformOrigin: "left" }}
                        />
                    </div>
                    <span className="block mt-2">mais completo do mundo</span>
                </h2>

                <p className="text-[16px] md:text-[22px] font-normal text-gray-200 leading-[1.4] md:leading-[1.4] mt-6 font-body normal-case max-w-4xl mx-auto">
                    São <strong className="font-bold text-white">mais de 10 horas de conteúdo altamente impactante</strong>, do básico ao avançado, do simples às técnicas mais poderosas de persuasão para você alcançar a <strong className="font-bold text-white">oratória da elite.</strong>
                </p>
            </div>

            {/* 2. Content Area - Embla Carousel */}
            <div className="w-full max-w-6xl mx-auto">
                <EmblaCarousel slides={images} options={OPTIONS} />
            </div>

            {/* 3. CTA Area */}
            <div className="container mx-auto px-6 mt-12 flex justify-center">
                <motion.a
                    href="#preco"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-full md:w-fit bg-[#CC0000] text-white px-8 md:px-10 py-5 rounded-[0.5rem] font-bold text-[15px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center gap-4 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
                >
                    Quero fazer parte do 1%
                    <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        className="flex items-center justify-center pointer-events-none"
                    >
                        <i className="fi fi-rr-arrow-right text-white text-2xl flex" />
                    </motion.div>
                </motion.a>
            </div>
        </section>
    )
}
