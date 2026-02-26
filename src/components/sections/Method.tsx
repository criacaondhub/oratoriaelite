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
        <section ref={containerRef} className="relative h-[350vh] overflow-visible bg-white md:bg-transparent">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between py-12 px-6 overflow-hidden">
                {/* Background de Papel Rasgado - Apenas Desktop, preso no sticky */}
                <div
                    className="absolute inset-x-0 -top-[15vh] -bottom-[15vh] pointer-events-none hidden md:block -z-10"
                    style={{
                        backgroundImage: `url('assets/papel-rasgado.webp')`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        filter: 'drop-shadow(0px -10px 20px rgba(0,0,0,0.5))'
                    }}
                />

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
                <div className="relative w-full max-w-[780px] h-[400px] md:h-[520px] flex items-center justify-center pointer-events-none">

                    {/* Imagem Fixa Esquerda (Desktop Only) */}
                    <div className="hidden lg:block absolute right-[104%] top-1/2 -translate-y-1/2 w-[350px] h-auto">
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
                    <div className="hidden lg:block absolute left-[104%] top-1/2 -translate-y-1/2 w-[350px] h-auto">
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
                        className="group w-full md:w-fit bg-[#CC0000] text-white px-8 py-5 md:py-4 rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center gap-2 md:gap-4 mt-4 md:mt-6 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
                    >
                        Quero Destravar a Oratória
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
