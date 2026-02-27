import { motion } from "framer-motion"

const testimonials = [
    {
        name: "Camila Skorie",
        role: "Especialista em Desenvolvimento Humano",
        image: "assets/foto-camila.webp",
        content: "Para minha surpresa, no primeiro mês tendo acesso aos conteúdos, <span class='bg-[#CC0000]/10 text-[#CC0000] px-1 font-bold'>ministrei o melhor treinamento da minha vida e com isso e fui promovida!</span> Além disso, fiz 2 palestras e já estou com a 3ª agendada. <span class='bg-[#CC0000]/10 text-[#CC0000] px-1 font-bold'>Os conteúdos foram muito além da comunicação.</span> Sou muito feliz e muito grata a todo o suporte e treinamento."
    },
    {
        name: "Nei Garcia",
        role: "Técnico Agrícola",
        image: "assets/foto-nei.webp",
        content: "Eu ja tinha feito diversos cursos com outros mentores, porém sempre foi mais do mesmo e não tive resultados. <span class='bg-[#CC0000]/10 text-[#CC0000] px-1 font-bold'>Entrar no curso do Giovanni foi o melhor investimento que fiz em minha vida profissional e pessoal!</span> Ele entrega mais do que promete, isso sem contar a didática e a comunicação dele que é fora de série. Gratidão El Professor."
    },
    {
        name: "Jordana Amorim",
        role: "Empresária Contadora",
        image: "assets/foto-jordana.webp",
        content: "Apesar do meu conhecimento técnico, sempre tive dificuldade em me expressar, ser valorizada e trazer clareza aos meus clientes. <span class='bg-[#CC0000]/10 text-[#CC0000] px-1 font-bold'>O curso foi um divisor de águas em minha vida, onde o valor do investimento já retornou em mais de 100%.</span> Graças a autoridade que desenvolvi com as aulas, estou participando de podcasts, lancei meu curso, fui convidada a palestrar e ainda melhorei meu fechamento de contratos!"
    },
    {
        name: "Ana Augusta",
        role: "Representante Comercial",
        image: "assets/foto-ana.webp",
        content: "Eu entrei pro curso para aprimorar as minhas habilidades de comunicação, afinal, ela está em 90% do meu dia. <span class='bg-[#CC0000]/10 text-[#CC0000] px-1 font-bold'>A entrega foi espetacular, do acesso à entrega do conteúdo!</span> Quando eu aprendi a me comunicar melhor, <span class='bg-[#CC0000]/10 text-[#CC0000] px-1 font-bold'>meu salário subiu, e consegui ganhar mais de R$10.000,00</span> no mês. Só tenho a agradecer, porque este curso foi transformador na minha vida."
    },
    {
        name: "Marcelo Luz",
        role: "Especialista em Consórcios",
        image: "assets/foto-marcelo.webp",
        content: "Eu achava que minha oratória era boa, mas sabia que ela precisava ser lapidada! <span class='bg-[#CC0000]/10 text-[#CC0000] px-1 font-bold'>O curso foi um divisor de águas para mim!</span> Foi uma enxurrada de informações do básico ao avançado. Agradeço ao Giovanni por todo aprendizado."
    }
]

const Testimonials = () => {
    return (
        <section id="depoimentos" className="relative w-full pt-24 pb-40 md:pt-32 md:pb-64 bg-[#CC0000]/40 backdrop-blur-sm overflow-hidden font-body">
            {/* Elementos Decorativos de Fundo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -mr-64 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[100px] -ml-48 -mb-32 pointer-events-none" />

            {/* Partículas Geométricas Animadas - Apenas Desktop */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0.2,
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%"
                        }}
                        animate={{
                            x: [
                                (Math.random() * 100) + "%",
                                (Math.random() * 100) + "%",
                                (Math.random() * 100) + "%"
                            ],
                            y: [
                                (Math.random() * 100) + "%",
                                (Math.random() * 100) + "%",
                                (Math.random() * 100) + "%"
                            ],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 25 + Math.random() * 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-[350px] h-[350px] border border-white/10 rounded-full"
                        style={{
                            borderWidth: i % 2 === 0 ? '1.5px' : '0px',
                            background: i % 2 !== 0 ? 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' : 'transparent'
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                {/* Title & Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-white text-[28px] md:text-[52px] font-extrabold leading-tight uppercase font-heading mb-8">
                        <span className="relative inline-block px-5 py-3 mb-4">
                            <span className="absolute inset-0 bg-white"></span>
                            <span className="relative text-[#CC0000] z-10 font-black">+70 mil pessoas destravadas</span>
                        </span>
                        <p className="text-white/90 text-[16px] md:text-[22px] max-w-4xl mx-auto font-body leading-relaxed mt-4 font-normal normal-case tracking-normal">
                            De profissionais liberais à empresários, de líderes à liderados de pequenas, médias e grandes empresas, até mesmo políticos, artistas e pastores. <strong className="font-bold text-white">Este é um treinamento para todas as profissões!</strong>
                        </p>
                    </h2>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="w-full max-w-[1800px] mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6 w-full max-w-[430px]"
                        >
                            {/* Card de Depoimento - White clean theme */}
                            <div className="relative border border-white/10 rounded-[2rem] p-8 md:p-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-start gap-8 min-h-[360px] h-full transition-all hover:scale-[1.02] duration-300 group">

                                {/* Header: Foto + Nome dentro do card */}
                                <div className="flex items-center gap-4 shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center border-2 border-[#CC0000]/10 shrink-0 overflow-hidden relative">
                                        <img
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                            src={testimonial.image}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=CC0000&color=fff`
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-zinc-900 text-lg font-bold leading-tight uppercase font-body">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-zinc-500 text-sm font-medium leading-tight">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Texto do Depoimento */}
                                <div className="relative z-10 flex-1 w-full">
                                    <p
                                        className="text-zinc-800 font-body font-normal text-[15px] md:text-[16px] leading-[1.7]"
                                        dangerouslySetInnerHTML={{ __html: testimonial.content }}
                                    />
                                </div>

                                {/* Ícone Aspas - No canto inferior direito para um toque moderno */}
                                <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 40 34" fill="none">
                                        <path d="M40 33.3774L40 16.6887L28.8742 16.6887C28.8742 10.5556 33.8613 5.56287 40 5.56287L40 -4.57764e-05C30.7976 -4.65809e-05 23.3113 7.48625 23.3113 16.6887L23.3113 33.3774L40 33.3774Z" fill="#CC0000" />
                                        <path d="M16.6887 33.3774L16.6887 16.6887L5.56291 16.6887C5.56291 10.5556 10.5501 5.56287 16.6887 5.56287L16.6887 -4.78143e-05C7.48629 -4.86188e-05 -1.55122e-06 7.48624 -2.35572e-06 16.6887L-3.8147e-06 33.3774L16.6887 33.3774Z" fill="#CC0000" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
