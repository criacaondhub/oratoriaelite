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
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="assets/giovanni-bio.webp"
                                alt="Giovanni Begossi"
                                className="w-full max-w-[500px] h-auto object-cover drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
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
                                Mais conhecido como <span className="text-[#CC0000] font-bold">El Professor da Oratória,</span> Giovanni Begossi é bicampeão brasileiro de oratória, palestrante internacional, advogado e TEDx Speaker, além de contar com mais de 20 prêmios de oratória em 3 línguas diferentes.
                            </p>

                            <p>
                                É autor do best-seller <span className="text-white font-bold">Como Falar Bem e Ficar Rico</span> obra que alcançou o <span className="text-[#CC0000] font-bold">Top #1 na Amazon em "Falar em Público"</span> e também no PublishNews em "Negócios".
                            </p>

                            <p>
                                Com 15 anos de experiência em comunicação, Giovanni já foi mentor de grandes players como Natália Beauty, Cela e Tiago Reis, além de atender políticos, desembargadores, bilionários e atletas campeões olímpicos.
                            </p>

                            <p>
                                Atualmente, é responsável pelo maior perfil de comunicação e oratória da América Latina no Instagram, onde soma mais de 4 milhões de seguidores e já faturou múltiplos milhões.
                            </p>

                            <p>
                                Além disso, ministra treinamentos para grandes empresas como Biogen, Johnson & Johnson e Falconi e também para corporações de elite, como a SWAT de São Paulo (GATE) e o Exército Brasileiro (EsAO).
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}

export default About
