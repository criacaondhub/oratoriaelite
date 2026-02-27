import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const faqs = [
    {
        question: "Onde irei receber o acesso do treinamento?",
        answer: "Após a confirmação de compra, você receberá um e-mail de confirmação e juntamente com ele o acesso da área de membros."
    },
    {
        question: "Quando terei acesso aos bônus?",
        answer: "7 dias após a confirmação do pagamento."
    },
    {
        question: "Quanto custa o treinamento?",
        answer: "12x de 52,13 no cartão de crédito ou 497,00 à vista com desconto. Lembrando que este preço é promocional e poderá ser alterado a qualquer momento."
    },
    {
        question: "Por quanto tempo terei acesso às aulas?",
        answer: "Você terá 1 ano de acesso a partir da data de aprovação da compra."
    },
    {
        question: "Quantos dias de garantia tenho do treinamento?",
        answer: "Por lei, você tem 7 dias de garantia."
    },
    {
        question: "Funciona para melhorar oratória?",
        answer: "O Oratória de Elite foi baseado no que há de mais moderno na neurociência e comportamentos, além das otimizações com base nos feedbacks e resultados obtidos pelos milhares de alunos ao longo dos anos. Milhares de alunos ja usaram o Método 3C's para desenvolver sua comunicação."
    },
    {
        question: "Para quem é o Oratória de Elite?",
        answer: "Para todos que estão insatisfeitos com a própria comunicação e querem falar com mais clareza, confiança e convencimento, usando 100% da sua capacidade de comunicação para convencer qualquer pessoa em qualquer situação."
    },
    {
        question: "E se eu não tiver resultados?",
        answer: "Com os direcionamentos do método, é quase impossível não transformar sua comunicação. Um sábio não nega conhecimento, mas também não deixa parado."
    },
    {
        question: "O Oratória de Elite possui certificado?",
        answer: "Sim. Após concluir o treinamento completo, entre em contato diretamente com o nosso suporte para obtê-lo."
    },
    {
        question: "Qual o contato do suporte?",
        answer: "Nosso suporte atende diretamente no WhatsApp no número +55 11 96494-2986 ou via e-mail contato suporte@elprofessordaoratoria.com.br"
    }
]

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-neutral-200">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
            >
                <span className={`text-[18px] md:text-[20px] font-body font-bold uppercase transition-colors ${isOpen ? 'text-[#CC0000]' : 'text-neutral-800'}`}>
                    {question}
                </span>
                <span className="shrink-0 ml-4">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="2" y="9" width="16" height="2" fill="#CC0000" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="9" y="2" width="2" height="16" fill="#CC0000" />
                            <rect x="2" y="9" width="16" height="2" fill="#CC0000" />
                        </svg>
                    )}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-neutral-600 font-body text-[16px] md:text-[18px] leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="relative w-full py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 max-w-7xl mx-auto">

                    {/* Left Column: Support info */}
                    <div className="w-full lg:w-[40%] flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
                        <div className="flex flex-col gap-4 w-full">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-[28px] md:text-5xl lg:text-6xl font-extrabold md:font-black font-heading text-neutral-900 uppercase leading-none"
                            >
                                Ainda restaram <br className="hidden md:block" />
                                <span className="text-[#CC0000]">dúvidas?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-neutral-600 font-body text-[16px] md:text-xl leading-relaxed"
                            >
                                <span className="md:hidden">Veja abaixo</span>
                                <span className="hidden md:inline">Veja ao lado</span> algumas <span className="font-bold text-neutral-900">perguntas feitas com frequência</span> e, se ainda assim não esclarecerem suas dúvidas, <span className="font-bold text-neutral-900">entre em contato conosco:</span>
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
                                    src="assets/icon-whats.webp"
                                    alt="WhatsApp"
                                    className="w-12 h-12 md:w-16 md:h-16 shrink-0 object-contain drop-shadow-md"
                                />
                                <div className="flex flex-col gap-2 w-full items-center lg:items-start">
                                    <h3 className="text-[18px] md:text-xl font-body font-bold text-white uppercase">
                                        Suporte no Whatsapp
                                    </h3>
                                    <div className="bg-gradient-to-r from-white to-gray-100 text-[#178837] px-4 py-3 rounded-lg text-[11px] md:text-[12px] font-black tracking-widest uppercase shadow-sm group-hover:shadow-md transition-all text-center">
                                        Clique aqui e entre em contato
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-8"
                        >
                            <div className="flex justify-center w-full">
                                <img
                                    src="assets/faq-vector.svg"
                                    alt="Perguntas Frequentes"
                                    className="h-[120px] md:h-[180px] w-auto"
                                />
                            </div>
                            <div className="flex flex-col border-t border-neutral-200">
                                {faqs.map((faq, index) => (
                                    <FAQItem
                                        key={index}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FAQ
