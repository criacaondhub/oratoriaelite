import { motion } from "framer-motion"

export default function Guarantee() {
    return (
        <section className="relative w-full bg-transparent pb-12 md:pb-20">
            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto bg-white border border-black/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative overflow-hidden -mt-24 md:-mt-40"
                >
                    {/* Background Glow sutil dentro do card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#CC0000]/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                    {/* Lado Esquerdo: Selo de Garantia */}
                    <div className="w-full md:w-[30%] flex justify-center">
                        <div className="relative group">
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            >
                                <img
                                    src="assets/garantia.svg"
                                    alt="Selo de 7 Dias de Garantia"
                                    className="w-40 md:w-56 h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                                />
                            </motion.div>
                            {/* Brilho atrás do selo */}
                            <div className="absolute inset-0 bg-yellow-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
                        </div>
                    </div>

                    {/* Lado Direito: Conteúdo de Texto */}
                    <div className="w-full md:w-[70%] text-center md:text-left flex flex-col gap-4">
                        <h2 className="text-zinc-900 text-[24px] md:text-[42px] font-black uppercase font-heading leading-tight">
                            VOCÊ NÃO TEM <span className="text-[#CC0000]">RISCO NENHUM</span>
                        </h2>

                        <div className="flex flex-col gap-4">
                            <p className="text-zinc-700 text-[15px] md:text-[18px] font-body leading-relaxed tracking-tight">
                                Se por qualquer motivo, você acreditar que este treinamento não é para você, ou que o conteúdo não está do seu agrado, você terá o direito ao estorno total do seu dinheiro de forma incondicional e sem letrinhas miúdas dentro do período de <span className="text-zinc-900 font-bold">7 dias.</span>
                            </p>

                            <p className="text-zinc-900 font-bold text-[16px] md:text-[20px] font-body tracking-tight leading-tight">
                                Satisfação garantida ou devolvemos seu dinheiro sem mais perguntas!
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
