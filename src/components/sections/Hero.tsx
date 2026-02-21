import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-end lg:items-center overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex items-end lg:items-center pb-[68px] lg:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[18px] md:gap-8 items-center w-full">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8 flex flex-col gap-[18px] md:gap-6 items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Logo */}
                        <div className="w-fit mb-2 md:mb-4">
                            <img
                                src="assets/logo-ode-left.svg"
                                alt="Logo Oratória de Elite"
                                className="h-16 md:h-24 w-auto"
                            />
                        </div>

                        {/* Title with 4 EXACT lines and Highlight */}
                        <h1 className="text-[28px] md:text-[58px] font-extrabold md:font-extrabold leading-[1.1] md:leading-[1] tracking-tight text-white uppercase font-heading">
                            Transforme sua comunicação<br />
                            em uma verdadeira arma e esteja<br />
                            entre o {" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 px-2 py-0">1% das pessoas mais</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-0 bg-[#CC0000] -z-0"
                                    style={{ transformOrigin: "left" }}
                                />
                            </span><br />
                            <span className="relative inline-block mt-2">
                                <span className="relative z-10 px-2 py-0">influentes do mundo.</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-0 bg-[#CC0000] -z-0"
                                    style={{ transformOrigin: "left" }}
                                />
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-[16px] md:text-[30px] font-medium text-gray-200 leading-[1.2] md:leading-[1.1] max-w-2xl mt-2 md:mt-4 font-body">
                            O método definitivo para convencer<br className="block md:hidden" /> qualquer pessoa e qualquer situação
                        </p>

                        {/* CTA */}
                        <motion.a
                            href="#preco"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group w-fit bg-[#CC0000] text-white px-8 py-5 rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center gap-2 md:gap-4 mt-4 md:mt-6 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
                        >
                            Quero ter acesso ao Oratória de Elite
                            <motion.div
                                animate={{ x: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                className="flex items-center justify-center pointer-events-none"
                            >
                                <i className="fi fi-rr-arrow-right text-white text-xl md:text-2xl flex" />
                            </motion.div>
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Right Image - FIXED TOTAL HEIGHT */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute inset-x-0 top-0 w-full z-0 order-first lg:order-last lg:h-screen lg:right-0 lg:w-[60%] lg:flex lg:justify-end lg:items-end"
            >
                <picture className="w-full h-auto lg:h-full">
                    <source media="(max-width: 1023px)" srcSet="assets/hero-ode-mobile.webp" />
                    <img
                        src="assets/hero-ode.webp?v=12"
                        alt="Giovanni Begossi"
                        className="w-full h-auto lg:h-full lg:w-auto object-contain lg:object-cover object-top lg:object-bottom scale-100 origin-top lg:origin-bottom"
                    />
                </picture>
            </motion.div>
        </section>
    )
}
