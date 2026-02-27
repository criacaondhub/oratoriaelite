import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import React from "react"

const About = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    // Only apply rotation on larger screens (desktop)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Prevent 3D effect on small screens to avoid jumpy behavior
        if (window.innerWidth < 1024) return;

        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <section className="relative w-full py-16 md:py-[80px] bg-transparent overflow-hidden font-body perspective-1000">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX: window.innerWidth >= 1024 ? rotateX : 0,
                        rotateY: window.innerWidth >= 1024 ? rotateY : 0,
                        transformStyle: "preserve-3d",
                    }}
                    className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-16 shadow-2xl"
                >

                    {/* Image Column */}
                    <div className="relative w-full lg:w-1/2 flex justify-center items-start">
                        <div className="relative overflow-hidden rounded-2xl w-full max-w-[550px] aspect-[3/4] lg:aspect-[4/5]">
                            <img
                                src="assets/giovanni-bio-2.webp?v=1.1"
                                alt="Giovanni Begossi"
                                className="w-full h-full object-cover object-top drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                                style={{ transform: "none" }}
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8 text-white">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[28px] md:text-6xl font-extrabold md:font-black uppercase font-heading leading-tight md:leading-none">
                                Sobre o <span className="text-[#CC0000] drop-shadow-[0_0_15px_rgba(204,0,0,0.3)]">El Professor</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6 text-gray-300 text-[16px] md:text-lg leading-relaxed">
                            <p>
                                Mais conhecido como <span className="text-white font-bold">El Professor da Oratória,</span> Giovanni Begossi é <span className="text-white font-bold">bicampeão brasileiro de oratória,</span> advogado, palestrante internacional, TEDx Speaker e autor do best seller <span className="text-white font-bold">COMO FALAR BEM E FICAR RICO,</span> o livro de oratória mais vendido da Amazon.
                            </p>

                            <p>
                                Com mais de <span className="text-white font-bold">15 anos de experiência</span> e criador do maior perfil de oratória da América Latina com mais de <span className="text-white font-bold">4.5 milhões de seguidores</span> nas redes sociais, Giovanni treina a comunicação persuasiva de políticos, atletas campeões olímpicos, bilionários e grandes personalidades como Natalia Beauty, Sheila Mello e Cela, além de instituições renomadas como Falconi, Biogen, Johnson & Johnson e até mesmo da <span className="text-white font-bold">SWAT de São Paulo (GATE), do BOPE e do Exército Brasileiro (EsAO).</span>
                            </p>

                            <p>
                                Seu propósito é transformar a vida de cada vez mais pessoas por meio da comunicação.
                            </p>
                        </div>

                        {/* Showcase de Livros */}
                        <div className="mt-2 bg-gradient-to-br from-black/40 to-black/10 md:bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 relative overflow-hidden group shadow-inner">
                            {/* Inner Glow Animado */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#CC0000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="w-[180px] sm:w-[150px] md:w-[180px] flex-shrink-0 relative z-10 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                                <img
                                    src="assets/livros.webp"
                                    alt="Livros Best Sellers"
                                    className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_20px_35px_rgba(204,0,0,0.3)] transition-all duration-500"
                                />
                            </div>

                            <div className="flex flex-col gap-3 relative z-10 text-center sm:text-left">
                                <h3 className="text-[18px] md:text-[22px] font-bold font-body uppercase tracking-wide bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-500 text-transparent bg-clip-text">
                                    Autor Bestseller
                                </h3>
                                <p className="text-gray-300 text-[14px] md:text-[16px] leading-[1.3] md:leading-[1.4] tracking-tight">
                                    Autor de obras consagradas que já transformaram a comunicação de milhares de pessoas em todo o Brasil: <strong className="text-white font-bold">Como Falar Bem e Ficar Rico</strong> e <strong className="text-white font-bold">Como Fazer Amigos e Influenciar Pessoas.</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}

export default About
