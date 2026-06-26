import { motion } from "framer-motion"

const UpsellPricing2 = () => {
    return (
        <section id="preco" className="relative w-full py-[70px] bg-transparent overflow-hidden font-body">
            <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center">

                <div className="flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-[3.1250vw] w-full md:max-w-[98.9583vw]">

                    {/* Left Side: Features List - Order 1 on mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-[20px] xl:gap-[1.5625vw] flex-1 w-full xl:w-auto items-center xl:items-start min-w-[300px] order-1 xl:order-1"
                    >
                        <div className="flex flex-col gap-[20px] xl:gap-[1.5625vw] w-fit">
                            {[
                                { text: "Treinamento Completo Oratória de Elite - ", price: "R$ 997,00" },
                                { text: "Argumentação: Como Vencer Debates - ", price: "R$ 297,00" },
                                { text: "Treinamento Pense Rápido, Fale Melhor - ", price: "R$ 197,00" },
                                { text: "Protocolo Zero Timidez - ", price: "R$ 97,00" },
                                { text: "ECONOMIA DE: ", price: "R$ 1.240,10", highlight: true }
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
                        className="relative shrink-0 w-full md:w-auto p-[2px] overflow-hidden md:rounded-[1.2500vw] rounded-[24px] md:rounded-[2.3438vw] group order-2 xl:order-2"
                    >
                        {/* Animated Border Gradient */}
                        <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#CC0000_360deg)] animate-[spin_4s_linear_infinite]" />

                        {/* Card Content Container */}
                        <div
                            className="w-full md:min-w-[25.0000vw] xl:min-w-[31.2500vw] bg-black/90 rounded-[22px] md:rounded-[2.2396vw] px-[15px] py-[40px] md:px-[2.0833vw] xl:px-[3.1250vw] md:py-[2.6042vw] flex flex-col items-center relative gap-[40px] backdrop-blur-md shadow-[0_0_50px_rgba(204,0,0,0.1)] z-10"
                        >
                            {/* Logo */}
                            <img
                                alt="Oratória de Elite"
                                className="md:w-[14.5833vw] w-[200px] h-auto drop-shadow-lg"
                                src="/oratoria-de-elite/assets/logo-ode-center.svg"
                            />

                            {/* Prices */}
                            <div className="flex flex-col items-center md:gap-[0.8333vw] gap-4">
                                <div className="flex flex-col items-center">
                                    <span className="text-white/50 font-body text-[14px] md:text-[1.1458vw] line-through">De R$ 997,00</span>
                                    <span className="text-white font-body text-[16px] md:text-[1.2500vw]">por apenas 12x de</span>
                                </div>
                                <div className="text-[#59FF74] font-body font-bold text-[56px] md:text-[3.6458vw] lg:text-[4.1667vw] xl:text-[5.2083vw] leading-none tracking-tighter -my-2 whitespace-nowrap drop-shadow-lg">
                                    R$ 51,90
                                </div>
                                <span className="text-white font-body text-[16px] md:text-[1.2500vw] font-medium transition-all">Ou apenas R$ 487,90 à vista</span>
                            </div>

                            {/* Lastlink Upsell Buttons */}
                            <div style={{ fontFamily: 'DM Sans', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                                <div
                                    className="button-default button-accept w-full"
                                    style={{ padding: '17px 32px', lineHeight: '22px', borderRadius: '12px', fontWeight: 700, backgroundColor: 'rgb(52, 226, 60)', color: 'rgb(0, 0, 0)', textAlign: 'center' }}
                                    id="llupsell-CA0D637DE-"
                                >
                                    GARANTIR OFERTA ESPECIAL
                                </div>
                                <div
                                    className="button-default button-deny w-full"
                                    style={{ textDecoration: 'underline', lineHeight: '22px', fontSize: '16px', fontWeight: 700, color: 'rgb(178, 178, 178)', textAlign: 'center' }}
                                    id="denyButton9214351"
                                    onClick={() => {
                                        const currentUrl = new URL(window.location.href)
                                        const newUrl = new URL("https://lastlink.com/app/member/dashboardV2")
                                        currentUrl.searchParams.forEach((value, key) => {
                                            newUrl.searchParams.append(key, value)
                                        })
                                        window.location.href = newUrl.toString()
                                    }}
                                >
                                    Recusar esta oferta
                                </div>
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-col items-center gap-6 w-full pt-2">
                                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[#9CA3AF]">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CC0000]">
                                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <span className="text-[#808080] font-body text-[16px] md:text-[1.0417vw]">Compra 100% segura</span>
                                    </div>

                                </div>
                                <img
                                    alt="Formas de Pagamento"
                                    className="w-full max-w-[200px] md:max-w-[15.6250vw] h-auto opacity-100 transition-all"
                                    src="/oratoria-de-elite/assets/Credit_Card_Logos.webp"
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
                        className="flex flex-col items-start xl:items-start gap-[20px] xl:gap-[1.5625vw] flex-1 w-full xl:w-auto text-left min-w-[300px] order-3 xl:order-3"
                    >
                        <div className="flex items-center gap-[12px] justify-start w-full">
                            <div className="md:w-[3.0729vw] md:h-[3.0729vw] w-[59px] h-[59px] rounded-full overflow-hidden shrink-0 border border-white/10 relative bg-neutral-800">
                                <img
                                    alt="Giovanni"
                                    className="w-full h-full object-cover"
                                    src="/oratoria-de-elite/assets/avatar-giovanni.webp"
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
                        <p className="text-white font-body font-normal text-[16px] md:text-[1.1458vw] leading-relaxed w-full xl:max-w-[36.4583vw]">
                            “Eu criei o <span className="text-[#CC0000] font-bold">Oratória de Elite</span> para corrigir um problema comum, silencioso e ignorado, que faz pessoas excepcionais não serem levadas a sério”
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default UpsellPricing2
