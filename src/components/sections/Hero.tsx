import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8 flex flex-col gap-6"
                    >
                        {/* Logo */}
                        <div className="w-fit mb-4">
                            <img
                                src="assets/logo-ode-left.svg"
                                alt="Logo Oratória de Elite"
                                className="h-16 md:h-24 w-auto"
                            />
                        </div>

                        {/* Title with 4 EXACT lines and Highlight */}
                        <h1 className="text-[36px] md:text-[58px] font-extrabold leading-[1] tracking-tight text-white uppercase font-heading">
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
                        <p className="text-[20px] md:text-[30px] font-medium text-gray-200 leading-[1.1] max-w-2xl mt-4 font-body">
                            O método definitivo para convencer qualquer pessoa e qualquer situação
                        </p>

                        {/* CTA */}
                        <motion.a
                            href="#preco"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group w-fit bg-[#CC0000] text-white px-8 py-5 rounded-[0.5rem] font-bold text-xl uppercase flex items-center gap-4 mt-6 transition-all hover:bg-[#EE0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.5)] font-body"
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
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                        }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>

            {/* Right Image - FIXED TOTAL HEIGHT */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute right-0 top-0 h-screen w-full lg:w-[60%] flex justify-end items-end pointer-events-none z-0"
            >
                <img
                    src="assets/hero-ode.webp?v=12"
                    alt="Giovanni Begossi"
                    className="h-full w-auto object-cover object-bottom scale-100 origin-bottom"
                    style={{ height: '100vh' }}
                />
            </motion.div>
        </section>
    )
}
