import { motion } from "framer-motion"

const UpsellSupport = () => {
    return (
        <section className="relative w-full py-12 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col items-center">
                <div className="w-full md:max-w-[46.6667vw] flex flex-col gap-[2.0833vw] items-center text-center">
                    <div className="flex flex-col gap-4 w-full items-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-[28px] md:text-[2.5000vw] lg:text-[3.1250vw] font-extrabold md:font-black font-heading text-neutral-900 uppercase leading-none whitespace-nowrap"
                        >
                            Ainda restaram <span className="text-[#CC0000]">dúvidas?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-neutral-600 font-body text-[16px] md:text-[1.0417vw] leading-relaxed md:max-w-[33.3333vw]"
                        >
                            Se você ainda tem alguma dúvida e quer falar com a nossa equipe especializada, <span className="font-bold text-neutral-900">entre em contato conosco agora mesmo:</span>
                        </motion.p>
                    </div>

                    {/* WhatsApp Button Card with Animated Border */}
                    <motion.a
                        href="https://api.whatsapp.com/send/?phone=5511937607834&text=Olá%21+vim+da+página+do+Oratória+de+Elite+e+gostaria+de+falar+com+um+atendente.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-2xl p-[2px] group w-full sm:w-fit shadow-xl shadow-green-900/10 mx-auto lg:mx-0"
                    >
                        {/* Animated Border Gradient */}
                        <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#178837_360deg)] animate-[spin_4s_linear_infinite]" />

                        {/* Inner Content */}
                        <div className="relative flex flex-col items-center lg:items-start lg:flex-row lg:items-center gap-6 p-6 md:p-8 bg-[#3FB05E] rounded-[14px] z-10 w-full h-full text-center lg:text-left">
                            <img
                                src="/oratoria-de-elite/assets/icon-whats.webp"
                                alt="WhatsApp"
                                className="w-12 h-12 md:w-16 md:h-16 shrink-0 object-contain drop-shadow-md"
                                width={64}
                                height={64}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="flex flex-col gap-2 w-full items-center lg:items-start">
                                <h3 className="text-[18px] md:text-xl font-body font-bold text-white uppercase">
                                    Suporte no Whatsapp
                                </h3>
                                <div className="bg-gradient-to-r from-white to-gray-100 text-[#178837] px-4 py-3 rounded-lg text-[11px] md:text-[0.6250vw] font-black tracking-widest uppercase shadow-sm group-hover:shadow-md transition-all text-center">
                                    Clique aqui e entre em contato
                                </div>
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default UpsellSupport
