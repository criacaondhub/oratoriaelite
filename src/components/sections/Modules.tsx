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
            <div className="container mx-auto px-6 lg:px-16 mb-12 text-center uppercase">
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

                <p className="text-[16px] md:text-[22px] font-normal text-gray-200 leading-[1.4] md:leading-[1.4] mt-6 font-body normal-case max-w-5xl mx-auto">
                    São <strong className="font-bold text-white">mais de 10 horas de conteúdo altamente impactante</strong>, do básico ao avançado, do absoluto zero às técnicas mais poderosas de persuasão para você alcançar a <strong className="font-bold text-white">oratória da elite.</strong>
                </p>
            </div>

            {/* 2. Content Area - Embla Carousel */}
            <div className="w-full max-w-6xl mx-auto">
                <EmblaCarousel slides={images} options={OPTIONS} />
            </div>

            {/* 3. CTA Area */}
            <div className="container mx-auto px-6 lg:px-16 mt-12 flex justify-center">
                <motion.a
                    href="#preco"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group w-full md:w-fit rounded-[0.5rem] font-bold text-[15px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center transition-all font-body isolate"
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(204,0,0,0)", "0px 0px 50px rgba(204,0,0,1)", "0px 0px 0px rgba(204,0,0,0)"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[#CC0000] group-hover:bg-[#EE0000] rounded-[0.5rem] transition-colors -z-10"
                    />
                    <span className="text-white px-8 md:px-10 py-5 text-center w-full relative z-10">Quero fazer parte do 1%</span>
                </motion.a>
            </div>
        </section>
    )
}
