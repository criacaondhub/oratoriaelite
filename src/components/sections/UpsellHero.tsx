import { motion } from "framer-motion"

export default function UpsellHero() {
    return (
        <div className="flex flex-col w-full">
            {/* Disclaimer Ribbon - Height 60px on desktop */}
            <div className="w-full bg-[#CC0000] h-auto md:h-[60px] py-3 md:py-0 z-[20] shadow-[0_4px_20px_rgba(204,0,0,0.4)] relative overflow-hidden flex items-center">
                {/* Animated background patterns */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250px_250px] animate-[pulse_3s_linear_infinite]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-center justify-center gap-3 md:gap-6">
                        <motion.img
                            src="assets/alert.svg"
                            alt="Alerta"
                            className="w-5 h-5 md:w-6 md:h-6"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <p className="text-white text-center font-body font-black text-[14px] md:text-[20px] uppercase tracking-wider leading-tight">
                            Não feche a página, ela contém um convite exclusivo!
                        </p>

                        <motion.img
                            src="assets/alert.svg"
                            alt="Alerta"
                            className="w-5 h-5 md:w-6 md:h-6"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        />
                    </div>
                </div>
            </div>

            <section className="relative w-full min-h-[calc(100vh-60px)] flex flex-col overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex items-center pb-0 lg:pb-0">
                    {/* Added pt-10 on mobile to push content 40px down */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[18px] md:gap-8 items-center w-full mt-10 lg:mt-0 pt-10 md:pt-0">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-8 flex flex-col gap-[18px] md:gap-6 items-center lg:items-start text-center lg:text-left transform translate-y-[100px] md:translate-y-0"
                        >
                            {/* Title with Highlight - Forced Desktop Breaks */}
                            <h1 className="text-[32px] md:text-[64px] font-extrabold leading-[1.1] md:leading-[1] tracking-tight text-white uppercase font-heading">
                                Você acabou de <br className="hidden md:block" />
                                DESBLOQUEAR o acesso a <br className="hidden md:block" />
                                <span className="relative inline-block">
                                    <span className="relative z-10 px-2 py-0 text-white">TRÍADE DE CURSOS</span>
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                        className="absolute inset-0 bg-[#CC0000] -z-0"
                                        style={{ transformOrigin: "left" }}
                                    />
                                </span> do <br className="hidden md:block" />
                                El Professor da Oratória
                            </h1>

                            {/* Logo Box (Replacing Subtitle) - Custom Widths for logo-ode-center */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-2xl flex items-center gap-6 md:gap-10 mt-2 md:mt-4"
                            >
                                <img
                                    src="assets/logo-ode-center.svg"
                                    alt="Logo Oratória de Elite"
                                    className="w-[130px] md:w-[260px] h-auto"
                                />
                                <span className="text-white text-3xl md:text-5xl font-light opacity-50">+</span>
                                <img
                                    src="assets/logo-fsv.svg"
                                    alt="Logo FSV"
                                    className="h-10 md:h-20 w-auto"
                                />
                            </motion.div>

                            {/* CTA */}
                            <motion.a
                                href="#oferta"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group w-full md:w-fit rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center justify-center mt-6 md:mt-8 transition-all font-body isolate"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(204,0,0,0)", "0px 0px 50px rgba(204,0,0,1)", "0px 0px 0px rgba(204,0,0,0)"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-[#CC0000] group-hover:bg-[#EE0000] rounded-[0.5rem] transition-colors -z-10"
                                />
                                <span className="text-white px-8 py-5 text-center w-full relative z-10 uppercase">Quero garantir minha vaga</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute inset-x-0 top-0 w-full z-[1] order-first lg:order-last lg:h-screen lg:right-0 lg:left-auto lg:w-auto lg:flex lg:justify-end lg:items-end pointer-events-none"
                >
                    <picture className="w-full h-auto lg:h-full">
                        <source media="(max-width: 1023px)" srcSet="assets/hero-ode-mobile.webp?v=13" />
                        <img
                            src="assets/hero-ode.webp?v=13"
                            alt="Giovanni Begossi"
                            className="w-full h-auto lg:h-[95vh] lg:w-auto object-contain lg:object-cover object-top lg:object-right-bottom scale-100 origin-top lg:origin-bottom"
                        />
                    </picture>
                </motion.div>
            </section>
        </div>
    )
}
