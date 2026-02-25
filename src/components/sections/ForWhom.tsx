import { motion } from "framer-motion"

export default function ForWhom() {
    const column1 = [
        {
            text: (
                <>
                    <strong className="font-bold text-black">Quer se tornar o melhor</strong> <br className="hidden md:block" />
                    <strong className="font-bold text-black">comunicador</strong> que pode ser.
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-black">Sente que merece mais sucesso</strong> <br className="hidden md:block" />
                    <strong className="font-bold text-black">profissional,</strong> mas a comunicação <br className="hidden md:block" />
                    não acompanha a competência.
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-black">Precisa liderar uma equipe,</strong> inspirar <br className="hidden md:block" />
                    pessoas e falar com autoridade.
                </>
            ),
        },
    ]

    const column2 = [
        {
            text: (
                <>
                    <strong className="font-bold text-black">Quer acabar com a insegurança</strong> <br className="hidden md:block" />
                    e fazer apresentações <br className="hidden md:block" />
                    impactantes e memoráveis.
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-black">Quer se tornar referência na sua área</strong> <br className="hidden md:block" />
                    e não apenas mais um no mercado.
                </>
            ),
        },
        {
            text: (
                <>
                    Trabalha com vendas e quer <br className="hidden md:block" />
                    <strong className="font-bold text-black">potencializar seus resultados.</strong>
                </>
            ),
        },
    ]

    return (
        <section className="relative py-16 md:py-32 overflow-hidden bg-white md:bg-transparent">
            {/* Background de Papel Rasgado - Apenas Desktop */}
            <div
                className="absolute inset-x-0 top-0 bottom-0 pointer-events-none hidden md:block"
                style={{
                    backgroundImage: `url('assets/papel-rasgado.webp?v=1.1')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* 1. Centralized Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[28px] md:text-[48px] font-extrabold leading-[1.2] md:leading-[1.1] text-black uppercase font-heading text-center mb-[30px]"
                >
                    Um <span className="relative inline-block">
                        <span className="relative z-10 px-2 md:px-3 text-white">treinamento</span>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0 bg-[#CC0000] -z-0"
                            style={{ transformOrigin: "left" }}
                        />
                    </span> para quem:
                </motion.h2>

                {/* 2. Unified Card Container - Reduced padding to 24px (p-6) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-6xl mx-auto bg-white/95 md:bg-white backdrop-blur-sm border border-black/5 rounded-[2.5rem] p-6 pb-[30px] shadow-xl mb-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4 md:gap-6">
                            {column1.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-5 md:p-6 bg-black/5 border border-black/5 rounded-2xl hover:bg-black/10 transition-all group lg:min-h-[100px]"
                                >
                                    <img
                                        src="assets/check-square.svg"
                                        alt="Check"
                                        className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                                        style={{ filter: 'invert(15%) sepia(85%) saturate(7434%) hue-rotate(351deg) brightness(87%) contrast(107%)' }}
                                    />
                                    <p className="text-[16px] md:text-[18px] text-zinc-800 leading-[1.3] font-body text-left">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4 md:gap-6">
                            {column2.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-5 md:p-6 bg-black/5 border border-black/5 rounded-2xl hover:bg-black/10 transition-all group lg:min-h-[100px]"
                                >
                                    <img
                                        src="assets/check-square.svg"
                                        alt="Check"
                                        className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                                        style={{ filter: 'invert(15%) sepia(85%) saturate(7434%) hue-rotate(351deg) brightness(87%) contrast(107%)' }}
                                    />
                                    <p className="text-[16px] md:text-[18px] text-zinc-800 leading-[1.3] font-body text-left">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 3. Centralized CTA below boxes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="w-full flex justify-center"
                >
                    <motion.a
                        href="#preco"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group w-full md:w-fit bg-[#CC0000] text-white px-10 py-6 md:py-5 rounded-[0.5rem] font-bold text-[18px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center gap-4 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_40px_rgba(204,0,0,0.6)] font-body"
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
                </motion.div>
            </div>
        </section>
    )
}
