import { motion } from "framer-motion"

export default function ForWhom() {
    const column1 = [
        {
            text: (
                <>
                    Trabalha com vendas e quer <br className="hidden md:block" />
                    <strong className="font-bold text-white">potencializar seus resultados.</strong>
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-white">Sente que merece mais sucesso</strong> <br className="hidden md:block" />
                    <strong className="font-bold text-white">profissional,</strong> mas a comunicação <br className="hidden md:block" />
                    não acompanha a competência.
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-white">Precisa liderar uma equipe,</strong> inspirar <br className="hidden md:block" />
                    pessoas e falar com autoridade.
                </>
            ),
        },
    ]

    const column2 = [
        {
            text: (
                <>
                    <strong className="font-bold text-white">Quer acabar com a insegurança</strong> <br className="hidden md:block" />
                    e fazer apresentações <br className="hidden md:block" />
                    impactantes e memoráveis.
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-white">Quer se tornar referência na sua área</strong> <br className="hidden md:block" />
                    e não apenas mais um no mercado.
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-white">Quer se tornar o melhor</strong> <br className="hidden md:block" />
                    <strong className="font-bold text-white">comunicador</strong> que pode ser.
                </>
            ),
        },
    ]

    return (
        <section className="relative py-12 md:py-20 overflow-hidden bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full md:bg-black/40 md:backdrop-blur-xl md:border md:border-white/5 rounded-[2rem] md:p-14 lg:p-16 md:shadow-2xl"
                >
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-3 flex flex-col gap-8 w-full items-center lg:items-start order-1">
                            <h2 className="text-[28px] md:text-[48px] font-extrabold md:font-extrabold leading-[1.2] md:leading-[1.1] text-white uppercase font-heading text-center lg:text-left">
                                Um treinamento para<br className="block md:hidden" /> quem:
                            </h2>

                            <motion.a
                                href="#preco"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden lg:flex group w-fit bg-[#CC0000] text-white px-8 py-5 rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase items-center gap-4 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
                            >
                                Quero participar
                                <motion.div
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                    className="flex items-center justify-center pointer-events-none"
                                >
                                    <i className="fi fi-rr-arrow-right text-white text-2xl flex" />
                                </motion.div>
                            </motion.a>
                        </div>

                        {/* Right Side - Benefit Boxes */}
                        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 order-2 mb-10 md:mb-0">

                            {/* Column 1 */}
                            <div className="flex flex-col gap-4 md:gap-6">
                                {column1.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        className="flex items-center gap-4 p-5 md:p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group h-full"
                                    >
                                        <img
                                            src="assets/check-square.svg"
                                            alt="Check"
                                            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                                        />
                                        <p className="text-[16px] md:text-[20px] text-gray-300 leading-[1.3] font-body text-left">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Column 2 */}
                            <div className="flex flex-col gap-4 md:gap-6">
                                {column2.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + (index * 0.1) }}
                                        className="flex items-center gap-4 p-5 md:p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group h-full"
                                    >
                                        <img
                                            src="assets/check-square.svg"
                                            alt="Check"
                                            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                                        />
                                        <p className="text-[16px] md:text-[20px] text-gray-300 leading-[1.3] font-body text-left">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                        </div>

                        {/* Mobile Only CTA */}
                        <div className="w-full flex justify-center order-3 lg:hidden">
                            <motion.a
                                href="#preco"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group w-full md:w-fit bg-[#CC0000] text-white px-8 py-5 rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center gap-4 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
                            >
                                Quero participar
                                <motion.div
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                    className="flex items-center justify-center pointer-events-none"
                                >
                                    <i className="fi fi-rr-arrow-right text-white text-2xl flex" />
                                </motion.div>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
