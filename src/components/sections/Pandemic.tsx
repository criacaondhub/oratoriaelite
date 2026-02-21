import { motion } from "framer-motion"

export default function Pandemic() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 flex flex-col gap-6 md:gap-8 items-center lg:items-start"
                    >
                        {/* Title with exact line breaks and highlight */}
                        <h2 className="text-[28px] md:text-[48px] font-extrabold md:font-extrabold leading-[1.1] md:leading-[1.1] text-white uppercase font-heading text-center lg:text-left">
                            A pandemia da<br />
                            <div className="relative inline-block mt-1">
                                <span className="relative z-10 px-2 md:px-3 py-0">má comunicação</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-x-0 bottom-0 top-0 bg-[#CC0000] -z-0"
                                    style={{ transformOrigin: "left" }}
                                />
                            </div>
                        </h2>

                        {/* Mobile Only News Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="block lg:hidden w-full"
                        >
                            <img
                                src="assets/news-2.webp"
                                alt="Notícia Má Comunicação"
                                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                            />
                        </motion.div>

                        {/* Subtitle with exact line breaks */}
                        <div className="flex flex-col gap-6 text-[16px] md:text-[22px] font-medium text-gray-200 leading-[1.4] font-body text-center lg:text-left">
                            <p>
                                Quando sua comunicação falha, você perde respeito, oportunidade e espaço.
                            </p>

                            <p>
                                Quantas vezes você já perdeu espaço não por falta de conteúdo, mas por falta de presença?
                            </p>

                            <p>
                                Você tem a ideia. Você tem a capacidade.
                            </p>

                            <p>
                                Porém, na hora de se expressar, sua comunicação trava e quem não aparece, não é lembrado. Mas é possível mudar isso!
                            </p>
                        </div>

                        {/* CTA */}
                        <motion.div className="mt-4 w-full flex justify-center lg:justify-start">
                            <motion.a
                                href="#preco"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group w-full md:w-fit bg-[#CC0000] text-white px-8 py-5 rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center gap-4 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
                            >
                                Quero ter acesso ao Oratória de Elite
                                <motion.div
                                    animate={{ x: [0, 8, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                    className="flex items-center justify-center pointer-events-none"
                                >
                                    <i className="fi fi-rr-arrow-right text-white text-2xl flex" />
                                </motion.div>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - News Stacking - HIDDEN ON MOBILE */}
                    <div className="hidden lg:flex lg:col-span-6 relative flex-col items-center">
                        <div className="relative w-full max-w-[750px] flex flex-col items-center">

                            {/* News 1 - Top */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative z-30 w-full"
                            >
                                <img
                                    src="assets/news-1.webp"
                                    alt="Notícia 1"
                                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                                />
                            </motion.div>

                            {/* News 2 - Middle (Overlapping) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: -20, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative z-20 w-[105%] -mt-10"
                            >
                                <img
                                    src="assets/news-2.webp"
                                    alt="Notícia 2"
                                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                                />
                            </motion.div>

                            {/* News 3 - Bottom (Overlapping) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: -40, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="relative z-10 w-[110%] -mt-10"
                            >
                                <img
                                    src="assets/news-3.webp"
                                    alt="Notícia 3"
                                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
