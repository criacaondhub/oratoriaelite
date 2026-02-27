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
        <section ref={containerRef} className="relative h-[400vh] overflow-visible bg-white">

            {/* Top Image (Mobile Only) */}
            <img src="assets/method-mobile-1.webp" alt="" className="w-full h-auto block md:hidden object-cover" />

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center gap-8 md:gap-10 py-12 md:py-[80px] px-6 lg:px-16 overflow-hidden -mt-[35px] md:mt-0">


                {/* 1. HEADER ZONE */}
                <div className="w-full max-w-5xl text-center z-50">
                    <h2 className="text-[28px] md:text-[46px] font-extrabold leading-[1.2] md:leading-[1.1] text-black uppercase font-heading">
                        <span className="relative inline-block">
                            <span className="relative z-10 px-1 md:px-3 py-0 text-white">O método validado</span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-x-0 bottom-0 top-0 bg-[#CC0000] -z-0"
                                style={{ transformOrigin: "left" }}
                            />
                        </span>{" "}
                        por negociadores, políticos, influencers, bilionários e até a elite da polícia.
                    </h2>

                    <p className="text-[16px] md:text-[22px] font-normal text-gray-800 leading-[1.4] md:leading-[1.2] mt-4 font-body">
                        Você terá acesso ao conteúdo usado para treinar profissionais que precisam se comunicar com <strong className="font-bold text-black">precisão, sob pressão e sem margem para erro.</strong>
                    </p>
                </div>

                {/* 2. FOLDER ZONE */}
                <div className="relative w-full max-w-[780px] h-[400px] md:h-[400px] lg:h-[420px] xl:h-[520px] flex items-center justify-center pointer-events-none">

                    {/* Imagem Fixa Esquerda (Desktop Only) */}
                    <div className="hidden lg:block absolute right-full xl:right-[102%] 2xl:right-[104%] top-1/2 -translate-y-1/2 w-[180px] xl:w-[250px] 2xl:w-[320px] h-auto">
                        <img
                            src="assets/img-1.webp?v=1.2"
                            alt="Visual de apoio 1"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Pasta 1 (Clareza) - Base */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <img
                            src="assets/pasta-1.webp?v=1.1"
                            alt="Clareza - Passo 1"
                            className="max-h-full w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                    </div>

                    {/* Pasta 2 (Confiança) */}
                    <motion.div
                        style={{ y: yPasta2, opacity: opacityPasta2 }}
                        className="absolute inset-0 z-20 flex items-center justify-center"
                    >
                        <img
                            src="assets/pasta-2.webp?v=1.1"
                            alt="Confiança - Passo 2"
                            className="max-h-full w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                    </motion.div>

                    {/* Pasta 3 (Domínio) */}
                    <motion.div
                        style={{ y: yPasta3, opacity: opacityPasta3 }}
                        className="absolute inset-0 z-30 flex items-center justify-center"
                    >
                        <img
                            src="assets/pasta-3.webp?v=1.1"
                            alt="Domínio - Passo 3"
                            className="max-h-full w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                    </motion.div>

                    {/* Imagem Fixa Direita (Desktop Only) */}
                    <div className="hidden lg:block absolute left-full xl:left-[102%] 2xl:left-[104%] top-1/2 -translate-y-1/2 w-[180px] xl:w-[250px] 2xl:w-[320px] h-auto">
                        <img
                            src="assets/img-2.webp?v=1.2"
                            alt="Visual de apoio 2"
                            className="w-full h-auto"
                        />
                    </div>
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
                        className="relative group w-full md:w-fit rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center mt-4 md:mt-6 transition-all font-body isolate"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(204,0,0,0)", "0px 0px 50px rgba(204,0,0,1)", "0px 0px 0px rgba(204,0,0,0)"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-[#CC0000] group-hover:bg-[#EE0000] rounded-[0.5rem] transition-colors -z-10"
                        />
                        <span className="text-white px-8 py-5 md:py-4 text-center w-full relative z-10">Quero Destravar a Oratória</span>
                    </motion.a>
                </div>

            </div>
        </section>
    )
}
