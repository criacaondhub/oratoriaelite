import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Method() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Reduzimos o scroll para 350vh para tornar o movimento mais responsivo
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Mapeamento de progresso mais rápido para maior fluidez
    const yPasta2 = useTransform(scrollYProgress, [0.2, 0.5], ["100%", "0%"])
    const opacityPasta2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])

    const yPasta3 = useTransform(scrollYProgress, [0.6, 0.9], ["100%", "0%"])
    const opacityPasta3 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])

    return (
        <section ref={containerRef} className="relative h-[350vh] overflow-visible bg-transparent">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between py-12 px-6 overflow-hidden">

                {/* 1. HEADER ZONE */}
                <div className="w-full max-w-5xl text-center z-50">
                    <h2 className="text-[28px] md:text-[46px] font-extrabold leading-[1.2] md:leading-[1.1] text-white uppercase font-heading">
                        O Método usado por negociadores,<br className="hidden md:block" />
                        influenciadores e{" "}
                        <span className="relative inline-block mt-1">
                            <span className="relative z-10 px-1 md:px-3 py-0 text-white">comunicadores de elite.</span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-x-0 bottom-0 top-0 bg-[#CC0000] -z-0"
                                style={{ transformOrigin: "left" }}
                            />
                        </span>
                    </h2>

                    <p className="text-[16px] md:text-[22px] font-medium text-gray-200 leading-[1.4] md:leading-[1.2] mt-4 font-body">
                        Dentro do <strong className="font-bold text-white">Oratória de Elite</strong> você aprende o método usado para treinar profissionais<br className="hidden md:block" />
                        que precisam se comunicar com <strong className="font-bold text-white">precisão, sob pressão, sem margem para erro.</strong>
                    </p>
                </div>

                {/* 2. FOLDER ZONE - REINSTATED HEAVY SHADOWS */}
                <div className="relative w-full max-w-[780px] h-[350px] md:h-[480px] flex items-center justify-center pointer-events-none">

                    {/* Pasta 1 (Clareza) - Base */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <img
                            src="assets/pasta-1.webp"
                            alt="Clareza - Passo 1"
                            className="max-h-full w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,1)]"
                        />
                    </div>

                    {/* Pasta 2 (Confiança) */}
                    <motion.div
                        style={{ y: yPasta2, opacity: opacityPasta2 }}
                        className="absolute inset-0 z-20 flex items-center justify-center"
                    >
                        <img
                            src="assets/pasta-2.webp"
                            alt="Confiança - Passo 2"
                            className="max-h-full w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,1)]"
                        />
                    </motion.div>

                    {/* Pasta 3 (Domínio) */}
                    <motion.div
                        style={{ y: yPasta3, opacity: opacityPasta3 }}
                        className="absolute inset-0 z-30 flex items-center justify-center"
                    >
                        <img
                            src="assets/pasta-3.webp"
                            alt="Domínio - Passo 3"
                            className="max-h-full w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,1)]"
                        />
                    </motion.div>
                </div>

                {/* 3. CTA ZONE */}
                <div className="w-full flex justify-center z-50 pointer-events-auto">
                    <motion.a
                        href="#preco"
                        style={{
                            opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
                            y: useTransform(scrollYProgress, [0.9, 1], [10, 0])
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group w-full md:w-fit bg-[#CC0000] text-white px-8 py-5 md:py-4 rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center gap-2 md:gap-4 mt-4 md:mt-6 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
                    >
                        Quero ter acesso ao Oratória de Elite
                        <motion.div
                            animate={{ x: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                            className="flex items-center justify-center pointer-events-none"
                        >
                            <i className="fi fi-rr-arrow-right text-white text-xl md:text-2xl flex" />
                        </motion.div>
                    </motion.a>
                </div>

            </div>
        </section>
    )
}
