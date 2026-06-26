import { motion } from "framer-motion"

export default function UpsellMethod2() {
    return (
        <section id="metodo" className="relative w-full overflow-hidden bg-white pt-0 pb-16 md:py-24">
            {/* Top Image (Mobile Only) */}
            <img src="/oratoria-de-elite/assets/method-mobile-1.webp" alt="" className="w-full h-auto block md:hidden object-cover mb-10" />

            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">

                {/* 1. HEADER ZONE */}
                <div className="w-full md:max-w-[46.8750vw] max-w-4xl text-center mb-12 md:mb-16">
                    <h2 className="text-[28px] md:text-[2.3958vw] font-extrabold leading-[1.2] md:leading-[1.1] text-black uppercase font-heading">
                        Você acabou de desbloquear 1 C da comunicação, mas pode ter {" "}
                        <span className="relative inline-block whitespace-nowrap">
                            <span className="relative z-10 px-1 md:px-3 py-0 text-white">acesso aos 3</span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-x-0 bottom-0 top-0 bg-[#CC0000] -z-0"
                                style={{ transformOrigin: "left" }}
                            />
                        </span>
                    </h2>

                    <p className="text-[16px] md:text-[1.1458vw] font-normal text-gray-800 leading-[1.4] md:leading-[1.2] mt-4 font-body">
                        Você terá acesso ao conteúdo usado para treinar profissionais que precisam se comunicar com <strong className="font-bold text-black">precisão, sob pressão e sem margem para erro.</strong>
                    </p>
                </div>

                {/* 2. PASTA ZONE - Side by Side, Larger on Desktop */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[1.0417vw] lg:gap-[1.5625vw] w-full md:max-w-[83.3333vw] mb-12 md:mb-[4.1667vw] px-0">
                    {/* Pasta 1 (Opacity 60%) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.6, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/3 flex justify-center opacity-60 z-0"
                    >
                        <img
                            src="/oratoria-de-elite/assets/pasta-1.webp"
                            alt="Clareza"
                            className="w-full max-w-[340px] md:max-w-[22.9167vw] lg:max-w-[27.0833vw] h-auto drop-shadow-2xl"
                            width={453}
                            height={346}
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>

                    {/* Pasta 2 (Verde - Opacity 100%) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-full md:w-1/3 flex justify-center z-10"
                    >
                        <img
                            src="/oratoria-de-elite/assets/pasta-2-verde.webp"
                            alt="Confiança - Desbloqueado"
                            className="w-full max-w-[340px] md:max-w-[22.9167vw] lg:max-w-[27.0833vw] h-auto drop-shadow-xl"
                            width={453}
                            height={346}
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>

                    {/* Pasta 3 (60% Opacity) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.6, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/3 flex justify-center opacity-60 z-0"
                    >
                        <img
                            src="/oratoria-de-elite/assets/pasta-3.webp"
                            alt="Domínio"
                            className="w-full max-w-[340px] md:max-w-[22.9167vw] lg:max-w-[27.0833vw] h-auto drop-shadow-xl"
                            width={453}
                            height={346}
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
