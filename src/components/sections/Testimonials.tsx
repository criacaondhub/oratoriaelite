import { motion } from "framer-motion"

const testimonials = [
    {
        name: "Camila Skorie",
        role: "Especialista em Desenvolvimento Humano",
        image: "assets/foto-camila.webp",
        content: "Para minha surpresa, no primeiro mês tendo acesso aos conteúdos, <span class='bg-[#CC0000]/25 text-white px-1 font-bold'>ministrei meu melhor treinamento da minha vida e com isso e fui promovida!</span> Além disso, fiz 2 palestras e já estou com a 3ª agendada. <span class='bg-[#CC0000]/25 text-white px-1 font-bold'>Os conteúdos foram muito além da comunicação.</span> Sou muito feliz e muito grata a todo suporte e treinamento."
    },
    {
        name: "Nei Garcia",
        role: "Técnico Agrícola",
        image: "assets/foto-nei.webp",
        content: "Eu ja tinha feito diversos cursos com outros mentores, porém, sempre foi mais do mesmo e não tive resultados. <span class='bg-[#CC0000]/25 text-white px-1 font-bold'>Entrar no curso do Giovanni foi o melhor investimento que fiz em minha vida profissional e pessoal!</span> Ele entrega mais do que promete, isso sem contar a didática e a comunicação dele que é fora de série. Gratidão El Professor."
    },
    {
        name: "Jordana Amorim",
        role: "Empresária Contadora",
        image: "assets/foto-jordana.webp",
        content: "Apesar do meu conhecimento técnico, sempre dificuldade em me expressar, ser valorizada e trazer clareza aos meus clientes. <span class='bg-[#CC0000]/25 text-white px-1 font-bold'>O curso foi um divisor de águas em minha vida, onde o valor do investimento já retornou em mais de 100%.</span> Graças a autoridade que desenvolvi com as aulas, estou participando de podcasts, lancei meu curso, fui convidada a palestrar e ainda melhorei meu fechamento de contratos!"
    },
    {
        name: "Ana Augusta",
        role: "Representante Comercial",
        image: "assets/foto-ana.webp",
        content: "Eu entrei pro curso para aprimorar as minhas habilidades de comunicação, afinal, ela está em 90% do meu dia. <span class='bg-[#CC0000]/25 text-white px-1 font-bold'>A entrega foi espetacular, do acesso à entrega do conteúdo!</span> Quando eu aprendi a me comunicar melhor, <span class='bg-[#CC0000]/25 text-white px-1 font-bold'>meu salário subiu, e consegui ganhar mais de R$10.000,00</span> no mês. Só tenho a agradecer, porque este curso foi transformador na minha vida."
    },
    {
        name: "Marcelo Luz",
        role: "Especialista em Consórcios",
        image: "assets/foto-marcelo.webp",
        content: "Eu achava que minha oratória era boa, mas sabia que ela precisava ser lapidada! <span class='bg-[#CC0000]/25 text-white px-1 font-bold'>O curso foi um divisor de águas para mim, onde aprendi storytelling, elaborar palestras, gatilhos mentais e até mesmo como me posicionar nas redes sociais.</span> Foi uma enxurrada de informações do básico ao avançado. Agradeço ao Giovanni por todo aprendizado."
    }
]

const Testimonials = () => {
    return (
        <section className="relative w-full py-24 bg-transparent overflow-hidden font-body">
            {/* Parallax Background Effect */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: 'url("assets/bg-parallax.webp?v=1.1")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* Title & Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-white text-[28px] md:text-[48px] font-extrabold md:font-black leading-none uppercase font-heading mb-6 inline-block">
                        <span className="relative inline-block px-4 py-3">
                            <span className="absolute inset-0 bg-[#CC0000]"></span>
                            <span className="relative text-white z-10">Resultados que falam por si</span>
                        </span>
                    </h2>
                    <p className="text-gray-300 text-[16px] md:text-xl max-w-3xl mx-auto font-body leading-relaxed mt-4">
                        Dentro do <span className="font-bold text-white">Oratória de Elite</span> você aprende o método usado para treinar profissionais que precisam se comunicar com precisão, sob pressão, sem margem para erro.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="w-full max-w-[1800px] mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-[17px] w-full max-w-[430px]"
                        >
                            {/* Header: Foto + Nome */}
                            <div className="flex items-center gap-[11px] shrink-0">
                                <div className="w-[58px] h-[58px] rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 shrink-0 overflow-hidden relative">
                                    <img
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                        src={testimonial.image}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=random&color=fff`
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col gap-[1px]">
                                    <h3 className="text-white text-[16.7px] font-body font-bold leading-tight uppercase">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-[#808080] text-[15px] font-body font-light leading-tight">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>

                            {/* Card de Depoimento */}
                            <div className="relative border border-[#262626] rounded-[16.7px] p-[33px] bg-gradient-to-b from-[#1a1a1a] to-transparent flex flex-col items-start gap-6 min-h-[320px] h-full transition-all hover:border-[#CC0000]/30 group">
                                {/* Ícone Aspas */}
                                <div className="shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 40 34" fill="none">
                                        <path d="M40 33.3774L40 16.6887L28.8742 16.6887C28.8742 10.5556 33.8613 5.56287 40 5.56287L40 -4.57764e-05C30.7976 -4.65809e-05 23.3113 7.48625 23.3113 16.6887L23.3113 33.3774L40 33.3774Z" fill="#CC0000" className="transition-colors group-hover:fill-[#FF0000]" />
                                        <path d="M16.6887 33.3774L16.6887 16.6887L5.56291 16.6887C5.56291 10.5556 10.5501 5.56287 16.6887 5.56287L16.6887 -4.78143e-05C7.48629 -4.86188e-05 -1.55122e-06 7.48624 -2.35572e-06 16.6887L-3.8147e-06 33.3774L16.6887 33.3774Z" fill="#CC0000" className="transition-colors group-hover:fill-[#FF0000]" />
                                    </svg>
                                </div>

                                {/* Texto do Depoimento */}
                                <div className="relative z-10 flex-1 w-full">
                                    <p
                                        className="text-white font-body font-normal text-[15px] leading-[1.6]"
                                        dangerouslySetInnerHTML={{ __html: testimonial.content }}
                                    />
                                </div>

                                {/* Overlay sutil */}
                                <div className="absolute inset-0 bg-white/5 pointer-events-none mix-blend-overlay opacity-20 rounded-[16.7px]"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
