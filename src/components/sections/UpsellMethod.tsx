import { motion } from "framer-motion"

export default function UpsellMethod() {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-0 pb-16 md:py-24">
            {/* Top Image (Mobile Only) */}
            <img src="/oratoria-de-elite/assets/method-mobile-1.webp" alt="" className="w-full h-auto block md:hidden object-cover mb-10" />

            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">

                {/* 1. HEADER ZONE */}
                <div className="w-full max-w-4xl text-center mb-12 md:mb-16">
                    <h2 className="text-[28px] md:text-[46px] font-extrabold leading-[1.2] md:leading-[1.1] text-black uppercase font-heading">
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

                    <p className="text-[16px] md:text-[22px] font-normal text-gray-800 leading-[1.4] md:leading-[1.2] mt-4 font-body">
                        Você terá acesso ao conteúdo usado para treinar profissionais que precisam se comunicar com <strong className="font-bold text-black">precisão, sob pressão e sem margem para erro.</strong>
                    </p>
                </div>

                {/* 2. PASTA ZONE - Side by Side, Larger on Desktop */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full max-w-[1600px] mb-12 md:mb-16 px-0">
                    {/* Pasta 1 (Verde) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/3 flex justify-center z-10"
                    >
                        <img
                            src="/oratoria-de-elite/assets/pasta-1-verde.webp"
                            alt="Clareza - Desbloqueado"
                            className="w-full max-w-[340px] md:max-w-[440px] lg:max-w-[520px] h-auto drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Pasta 2 (60% Opacity) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.6, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-full md:w-1/3 flex justify-center opacity-60 z-0"
                    >
                        <img
                            src="/oratoria-de-elite/assets/pasta-2.webp"
                            alt="Confiança"
                            className="w-full max-w-[340px] md:max-w-[440px] lg:max-w-[520px] h-auto drop-shadow-xl"
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
                            className="w-full max-w-[340px] md:max-w-[440px] lg:max-w-[520px] h-auto drop-shadow-xl"
                        />
                    </motion.div>
                </div>

                {/* 3. CTA ZONE */}
                <div className="w-full flex justify-center">
                    <motion.a
                        href="#preco"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group w-full md:w-fit rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center transition-all font-body isolate"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(204,0,0,0)", "0px 0px 50px rgba(204,0,0,1)", "0px 0px 0px rgba(204,0,0,0)"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-[#CC0000] group-hover:bg-[#EE0000] rounded-[0.5rem] transition-colors -z-10"
                        />
                        <span className="text-white px-8 py-5 md:py-4 text-center w-full relative z-10 uppercase">Quero Garantir os 3 Cs</span>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}
