import { motion } from "framer-motion"

const Pricing = () => {
    return (
        <section id="preco" className="relative w-full py-[70px] bg-transparent overflow-hidden font-body">
            <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center">

                <div className="flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-[60px] w-full max-w-[1900px]">

                    {/* Left Side: Features List - Order 1 on mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-[20px] xl:gap-[30px] flex-1 w-full xl:w-auto items-center xl:items-start min-w-[300px] order-1 xl:order-1"
                    >
                        <div className="flex flex-col gap-[20px] xl:gap-[30px] w-fit">
                            {[
                                { text: "Treinamento Completo Oratória de Elite - ", price: "R$ 997,00" },
                                { text: "Argumentação: Como Vencer Debates - ", price: "R$ 297,00" },
                                { text: "Treinamento Pense Rápido, Fale Melhor - ", price: "R$ 197,00" },
                                { text: "ECONOMIA DE: ", price: "R$ 994,00", highlight: true }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-[16px]">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                        <circle cx="10" cy="10" r="10" fill={item.highlight ? "#59FF74" : "#CC0000"} />
                                        <path d="M14.7074 6.3313L9.70261 13.7065L5.79087 10.0765C5.61478 9.91348 5.60435 9.63826 5.76783 9.46217C5.93087 9.28565 6.20652 9.27609 6.38217 9.43913L9.551740 12.38L13.9878 5.84261C14.123 5.64391 14.3935 5.59261 14.5917 5.72696C14.7909 5.86174 14.8426 6.13217 14.7074 6.3313Z" fill="white" />
                                    </svg>
                                    <p className={`font-body font-bold text-[18px] leading-tight uppercase ${item.highlight ? 'text-[#59FF74]' : 'text-[#CCCCCC]'}`}>
                                        {item.text}
                                        <span className={`${item.highlight ? 'text-[#59FF74]' : 'text-[#CC0000] line-through'}`}>{item.price}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Center: Pricing Card - Order 2 on mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative shrink-0 w-full md:w-auto p-[2px] overflow-hidden rounded-[24px] md:rounded-[45px] group order-2 xl:order-2"
                    >
                        {/* Animated Border Gradient */}
                        <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#CC0000_360deg)] animate-[spin_4s_linear_infinite]" />

                        {/* Card Content Container */}
                        <div
                            className="w-full md:min-w-[480px] xl:min-w-[600px] bg-black/90 rounded-[22px] md:rounded-[43px] px-[15px] py-[40px] md:px-[40px] xl:px-[60px] md:py-[50px] flex flex-col items-center relative gap-[40px] backdrop-blur-md shadow-[0_0_50px_rgba(204,0,0,0.1)] z-10"
                        >
                            {/* Logo */}
                            <img
                                alt="Oratória de Elite"
                                className="w-[200px] sm:w-[280px] h-auto drop-shadow-lg"
                                src="assets/logo-ode-center.svg"
                                width={280}
                                height={80}
                                decoding="async"
                            />

                            {/* Prices */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex flex-col items-center">
                                    <span className="text-white/50 font-body text-[14px] md:text-[22px] line-through">De R$ 997,00</span>
                                    <span className="text-white font-body text-[16px] md:text-[24px]">por apenas 12x de</span>
                                </div>
                                <div className="text-[#59FF74] font-body font-bold text-[56px] md:text-[70px] lg:text-[80px] xl:text-[100px] leading-none tracking-tighter -my-2 whitespace-nowrap drop-shadow-lg">
                                    R$ 52,13
                                </div>
                                <span className="text-white font-body text-[16px] md:text-[24px] font-medium transition-all">Ou apenas R$497,00 à vista</span>
                            </div>

                            {/* Button - Styled like Hero CTA */}
                            <motion.a
                                href="https://pay.hub.la/ZKbJxUcq8sy54VpK45BJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group w-full md:w-fit rounded-[0.5rem] font-bold text-[15px] md:text-xl leading-[1.1] uppercase flex items-center justify-center text-center transition-all font-body isolate"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(204,0,0,0)", "0px 0px 50px rgba(204,0,0,1)", "0px 0px 0px rgba(204,0,0,0)"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-[#CC0000] group-hover:bg-[#EE0000] rounded-[0.5rem] transition-colors -z-10"
                                />
                                <span className="text-white px-8 py-5 text-center w-full relative z-10">Quero ter acesso ao <br className="md:hidden" /> Oratória de Elite</span>
                            </motion.a>

                            {/* Trust badges */}
                            <div className="flex flex-col items-center gap-6 w-full pt-2">
                                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[#9CA3AF]">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CC0000]">
                                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <span className="text-[#808080] font-body text-[16px] md:text-[20px]">Compra 100% segura</span>
                                    </div>

                                </div>
                                <img
                                    alt="Formas de Pagamento"
                                    className="w-full max-w-[300px] h-auto opacity-100 transition-all"
                                    src="assets/Credit_Card_Logos.webp"
                                    width={300}
                                    height={40}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Message - Order 3 on mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start xl:items-start gap-[20px] xl:gap-[30px] flex-1 w-full xl:w-auto text-left min-w-[300px] order-3 xl:order-3"
                    >
                        <div className="flex items-center gap-[12px] justify-start w-full">
                            <div className="w-[59px] h-[59px] rounded-full overflow-hidden shrink-0 border border-white/10 relative bg-neutral-800">
                                <img
                                    alt="Giovanni"
                                    className="w-full h-full object-cover"
                                    src="assets/avatar-giovanni.webp"
                                    width={59}
                                    height={59}
                                    loading="lazy"
                                    decoding="async"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Giovanni+Begossi&background=CC0000&color=fff";
                                    }}
                                />
                            </div>
                            <div className="flex flex-col items-start gap-[1px]">
                                <p className="text-white font-body font-bold text-[16.7px] leading-tight uppercase">Giovanni Begossi</p>
                                <p className="text-[#808080] font-body font-light text-[15px] leading-tight">O El Professor da Oratória</p>
                            </div>
                        </div>
                        <p className="text-white font-body font-normal text-[16px] md:text-[22px] leading-relaxed w-full xl:max-w-[700px]">
                            “Eu criei o <span className="text-[#CC0000] font-bold">Oratória de Elite</span> para corrigir um problema comum, silencioso e ignorado, que faz pessoas excepcionais não serem levadas a sério”
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Pricing
