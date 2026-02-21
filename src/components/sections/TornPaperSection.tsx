import { motion } from "framer-motion"

const TornPaperSection = () => {
    const column1 = [
        "Os 3 “P's” da Oratória Confiante",
        "Linguagem corporal e voz",
        "Retórica e Neurociência",
        "Pré-Apresentação",
        "Ambiência",
        "Rotina",
    ]

    const column2 = [
        "Rapport (básico e avançado)",
        "Gatilhos Mentais",
        "Infotenimento",
        "Storytelling",
        "Escuta Ativa",
        "Arquétipo",
    ]

    const column3 = [
        "9.5 Técnicas para lidar com nervosismo",
        "Vícios de Linguagem",
        "Nunca negue palco",
        "Vocabulário",
        "Mentalidade",
        "Dicção",
    ]

    const ListIcon = () => (
        <img
            src="assets/check-square.svg"
            alt="Check"
            className="w-5 h-5 flex-shrink-0"
            style={{ filter: 'invert(15%) sepia(85%) saturate(7434%) hue-rotate(351deg) brightness(87%) contrast(107%)' }}
        />
    )

    const Column = ({ items }: { items: string[] }) => (
        <div className="flex flex-col gap-4">
            {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                    <ListIcon />
                    <span className="text-black font-body text-base md:text-lg font-medium text-left leading-tight">
                        {item}
                    </span>
                </div>
            ))}
        </div>
    )

    return (
        <section className="relative w-full min-h-fit md:min-h-[800px] flex flex-col items-center justify-center overflow-hidden py-16 md:py-32 bg-white md:bg-transparent">
            {/* Background de Papel Rasgado - Apenas Desktop */}
            <div
                className="absolute inset-x-0 top-0 bottom-0 pointer-events-none hidden md:block"
                style={{
                    backgroundImage: `url('assets/papel-rasgado.webp')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'drop-shadow(0px -10px 20px rgba(0,0,0,0.5))'
                }}
            />

            {/* Conteúdo da Seção */}
            <div className="relative z-10 w-full max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-black text-[28px] md:text-[48px] font-extrabold md:font-black leading-tight max-w-4xl mx-auto uppercase">
                        O único que te ensina os{" "}
                        <span className="relative inline-block px-3 py-1 ml-2">
                            <span className="absolute inset-0 bg-[#CC0000] -rotate-1"></span>
                            <span className="relative text-white z-10">3 C’S</span>
                        </span>{" "}
                        da Comunicação completos
                    </h2>
                </motion.div>

                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 md:bg-white/10 md:backdrop-blur-sm rounded-3xl md:p-12 md:border md:border-black/5 md:shadow-inner">
                    <Column items={column1} />
                    <Column items={column2} />
                    <Column items={column3} />
                </div>
            </div>
        </section>
    )
}

export default TornPaperSection
