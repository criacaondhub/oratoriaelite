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
        answer: "1 ano de acesso."
    },
    {
        question: "Quantos dias de garantia tenho do treinamento?",
        answer: "7 dias de garantia por lei."
    },
    {
        question: "É possível destravar a minha comunicação com este treinamento?",
        answer: "Sim, é totalmente possível você destravar a sua comunicação com este treinamento, pois milhares de alunos já passaram por mim e eu dediquei 110% do meu tempo para priorizar a sua evolução."
    },
    {
        question: "Para quem é o curso?",
        answer: "Para todos que estão insatisfeitos com a própria comunicação e querem falar com mais clareza, sem vícios de linguagem e com uma dicção impecável."
    },
    {
        question: "E se eu não tiver resultados?",
        answer: "Com os direcionamentos do método, é quase impossível não transformar sua comunicação. Um sábio não nega conhecimento, mas também não deixa parado."
    },
    {
        question: "Por que deveria confiar neste método?",
        answer: "O Oratória de Elite foi baseado no que há de mais moderno na neurociência e comportamentos, além das otimizações com base nos feedbacks e resultados obtidos pelos milhares de alunos ao longo dos anos."
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
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-20 max-w-7xl mx-auto">

                    {/* Left Column: Support info */}
                    <div className="w-full lg:w-[40%] flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-neutral-900 uppercase leading-none"
                            >
                                Ainda restaram <br />
                                <span className="text-[#CC0000]">dúvidas?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-neutral-600 font-body text-lg md:text-xl leading-relaxed"
                            >
                                Veja ao lado algumas <span className="font-bold text-neutral-900">perguntas feitas com frequência</span> e, se ainda assim não esclarecerem suas dúvidas, <span className="font-bold text-neutral-900">entre em contato conosco:</span>
                            </motion.p>
                        </div>

                        {/* WhatsApp Button Card */}
                        <motion.a
                            href="https://wa.me/5511937607834"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-xl shadow-neutral-200/50 group transition-all w-fit"
                        >
                            <div className="w-16 h-16 shrink-0 bg-white rounded-full flex items-center justify-center p-3 shadow-sm">
                                <img
                                    src="https://elprofessordaoratoria.com.br/wp-content/uploads/2025/04/Logo-Whats.webp"
                                    alt="WhatsApp"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-body font-bold text-neutral-900 uppercase">
                                    Suporte no <span className="text-[#25D366]">Whatsapp</span>
                                </h3>
                                <div className="text-[12px] font-bold tracking-widest text-[#CC0000] uppercase">
                                    Clique aqui e entre em contato
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
                        >
                            <h3 className="text-2xl font-black font-heading text-neutral-400 uppercase tracking-[0.2em] mb-4">
                                Perguntas Frequentes
                            </h3>
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
