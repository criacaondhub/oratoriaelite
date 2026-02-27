import { motion } from "framer-motion"

const Bonus = () => {
    return (
        <section className="relative w-full min-h-screen pt-10 pb-12 md:pb-24 flex flex-col items-center justify-center bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 relative z-10">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-white text-[28px] md:text-[48px] font-extrabold md:font-extrabold leading-tight uppercase font-heading max-w-4xl mx-auto">
                        E você ainda <br className="block md:hidden" />
                        <span className="hidden md:inline">ganha de </span>
                        <span className="relative inline-block px-3 py-1">
                            <span className="absolute inset-x-0 bottom-0 top-0 bg-[#CC0000] -z-0"></span>
                            <span className="relative text-white z-10">
                                <span className="md:hidden">ganha de bônus:</span>
                                <span className="hidden md:inline">bônus:</span>
                            </span>
                        </span>
                    </h2>
                </motion.div>

                {/* Bonus Content Container */}
                <div className="flex flex-col items-center gap-16 max-w-7xl mx-auto">

                    {/* Bonus 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-center w-full"
                    >
                        {/* Image */}
                        <img
                            src="assets/bonus-1.webp?v=1.1"
                            alt="Argumentação: Como Vencer Debates"
                            className="h-[420px] w-auto block z-20 object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                        />

                        {/* Content Box */}
                        <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md rounded-2xl md:rounded-l-none md:rounded-r-2xl p-8 md:p-12 flex flex-col gap-6 text-center md:text-left items-center md:items-start max-w-xl z-10 -mt-6 md:mt-0">
                            <h3 className="text-[28px] md:text-4xl font-black md:font-black text-white leading-tight font-heading uppercase">
                                Argumentação:<br /> Como Vencer Debates
                            </h3>
                            <p className="text-gray-300 text-[16px] md:text-xl font-normal font-body leading-relaxed">
                                Aprenda a <strong className="font-bold text-white">organizar ideias sob pressão, sustentar seu ponto de vista sem agressividade e manter seus argumentos</strong> em reuniões, discussões ou decisões importantes.
                            </p>
                            <div className="text-xl md:text-2xl font-bold font-body">
                                <span className="text-white font-medium">de </span>
                                <span className="text-[#FF001F] line-through decoration-2">R$ 297,00</span>
                                <span className="text-white font-medium"> por </span>
                                <span className="text-[#59FF74]">R$0,00</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bonus 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row-reverse items-center justify-center w-full"
                    >
                        {/* Image */}
                        <img
                            src="assets/bonus-2.webp?v=1.1"
                            alt="Pense Rápido, Fale Melhor"
                            className="h-[420px] w-auto block z-20 object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                        />

                        {/* Content Box */}
                        <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md rounded-2xl md:rounded-r-none md:rounded-l-2xl p-8 md:p-12 flex flex-col gap-6 text-center md:text-left items-center md:items-start max-w-xl z-10 -mt-6 md:mt-0">
                            <h3 className="text-[28px] md:text-4xl font-black md:font-black text-white leading-tight font-heading uppercase">
                                Pense Rápido,<br className="md:hidden" /> Fale Melhor
                            </h3>
                            <p className="text-gray-300 text-[16px] md:text-xl font-normal font-body leading-relaxed">
                                Descubra como montar um raciocínio enquanto fala e <strong className="font-bold text-white">acabar com o branco, com o medo de ser pego de surpresa e com a sensação de que você só pensa na resposta certa depois que a conversa termina.</strong>
                            </p>
                            <div className="text-xl md:text-2xl font-bold font-body">
                                <span className="text-white font-medium">de </span>
                                <span className="text-[#FF001F] line-through decoration-2">R$ 197,00</span>
                                <span className="text-white font-medium"> por </span>
                                <span className="text-[#59FF74]">R$0,00</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Bonus
