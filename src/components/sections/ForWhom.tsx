import { motion } from "framer-motion"

export default function ForWhom() {
    const column1 = [
        {
            text: (
                <>
                    Trabalha com vendas e quer<br className="hidden md:block" />
                    <strong className="font-bold text-white">potencializar seus resultados.</strong>
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-white">Sente que merece mais sucesso</strong><br className="hidden md:block" />
                    <strong className="font-bold text-white">profissional,</strong> mas a comunicação<br className="hidden md:block" />
                    não acompanha a competência.
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-white">Precisa liderar uma equipe,</strong> inspirar<br className="hidden md:block" />
                    pessoas e falar com autoridade.
                </>
            ),
        },
    ]

    const column2 = [
        {
            text: (
                <>
                    <strong className="font-bold text-white">Quer acabar com a insegurança</strong><br className="hidden md:block" />
                    e fazer apresentações<br className="hidden md:block" />
                    impactantes e memoráveis.
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-white">Quer se tornar referência na sua área</strong><br className="hidden md:block" />
                    e não apenas mais um no mercado.
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-white">Quer se tornar o melhor</strong><br className="hidden md:block" />
                    <strong className="font-bold text-white">comunicador</strong> que pode ser.
                </>
            ),
        },
    ]

    return (
        <section className="relative py-20 overflow-hidden bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full bg-black/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-14 lg:p-16 shadow-2xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

                        {/* Left Content - Reduced to 3 columns to give more space to the boxes */}
                        <div className="lg:col-span-3 flex flex-col gap-8">
                            <h2 className="text-[28px] md:text-[48px] font-extrabold md:font-extrabold leading-[1.2] md:leading-[1.1] text-white uppercase font-heading text-left">
                                Para quem é esse<br />
                                treinamento?
                            </h2>

                            <motion.a
                                href="#preco"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group w-fit bg-[#CC0000] text-white px-8 py-5 rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center gap-4 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
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

                        {/* Right Side - Benefit Boxes - Expanded to 9 columns */}
                        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Column 1 */}
                            <div className="flex flex-col gap-6">
                                {column1.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        className="flex items-start gap-4 p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group h-full"
                                    >
                                        <img
                                            src="assets/check-square.svg"
                                            alt="Check"
                                            className="w-8 h-8 flex-shrink-0 mt-1"
                                        />
                                        <p className="text-[16px] md:text-[20px] text-gray-300 leading-[1.3] font-body">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Column 2 */}
                            <div className="flex flex-col gap-6">
                                {column2.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + (index * 0.1) }}
                                        className="flex items-start gap-4 p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group h-full"
                                    >
                                        <img
                                            src="assets/check-square.svg"
                                            alt="Check"
                                            className="w-8 h-8 flex-shrink-0 mt-1"
                                        />
                                        <p className="text-[16px] md:text-[20px] text-gray-300 leading-[1.3] font-body">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
