import { motion } from "framer-motion"

export default function UpsellHero() {
    return (
        <div className="flex flex-col w-full">
            {/* Disclaimer Ribbon - Height 60px on desktop */}
            <div className="w-full bg-[#CC0000] h-auto md:h-[3.1250vw] py-3 md:py-0 z-[20] shadow-[0_4px_20px_rgba(204,0,0,0.4)] relative overflow-hidden flex items-center">
                {/* Animated background patterns */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250px_250px] animate-[pulse_3s_linear_infinite]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-center justify-center gap-3 md:gap-6">
                        <motion.img
                            src="/oratoria-de-elite/assets/alert.svg"
                            alt="Alerta"
                            className="w-5 h-5 md:w-6 md:h-6"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <p className="text-white text-center font-body font-black text-[14px] md:text-[1.0417vw] uppercase tracking-wider leading-tight">
                            Não feche a página, ela contém um convite exclusivo!
                        </p>

                        <motion.img
                            src="/oratoria-de-elite/assets/alert.svg"
                            alt="Alerta"
                            className="w-5 h-5 md:w-6 md:h-6"
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        />
                    </div>
                </div>
            </div>

            <section className="relative w-full min-h-[calc(100vh-60px)] flex flex-col items-center justify-start md:justify-center overflow-hidden pt-10 pb-12 md:py-20">
                <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:max-w-[53.3333vw] flex flex-col gap-8 items-center text-center"
                    >
                        {/* Title - Centralized and slightly smaller */}
                        <h1 className="text-[28px] md:text-[2.5000vw] font-extrabold leading-[1.2] md:leading-[1.1] tracking-tight text-white uppercase font-heading md:max-w-[46.8750vw]">
                            Você acabou de DESBLOQUEAR o <br className="md:hidden" /> acesso à <br className="hidden md:block" />
                            <span className="relative inline-block">
                                <span className="relative z-10 px-2 py-0 text-white">TRÍADE DE CURSOS</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-0 bg-[#CC0000] -z-0"
                                    style={{ transformOrigin: "left" }}
                                />
                            </span> do <br className="md:hidden" /> El Professor da Oratória
                        </h1>

                        {/* Subtitle */}
                        <p className="text-white text-[16px] md:text-[1.0417vw] font-body leading-relaxed md:max-w-[46.8750vw] md:whitespace-nowrap">
                            <strong className="font-bold">Não feche essa página!</strong> Assista o vídeo abaixo que eu tenho um recado <strong className="font-bold">muito importante</strong>
                        </p>

                        {/* Video Container */}
                        <div 
                            className="w-full md:max-w-[44.2708vw] aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative"
                            dangerouslySetInnerHTML={{ __html: `
                                <div id="ifr_69b2f51a243e791f0728dbe5_wrapper" style="margin: 0 auto; width: 100%; "> 
                                    <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_69b2f51a243e791f0728dbe5_aspect"> 
                                        <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69b2f51a243e791f0728dbe5" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload="this.onload=null, this.src='https://scripts.converteai.net/69acc469-7ca6-4905-a042-9dae89c1548f/players/69b2f51a243e791f0728dbe5/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> 
                                    </div> 
                                </div>
                            `}}
                        />

                        {/* CTA */}
                        <div className="flex flex-col items-center gap-4 w-full mt-4">
                            <motion.a
                                href="https://pay.hub.la/96ud5NuEe5gGJQ3MlFCh"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group w-full md:w-fit rounded-[0.5rem] font-bold text-[16px] md:text-xl leading-[1.1] uppercase flex items-center justify-center transition-all font-body isolate"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(204,0,0,0)", "0px 0px 50px rgba(204,0,0,1)", "0px 0px 0px rgba(204,0,0,0)"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-[#CC0000] group-hover:bg-[#EE0000] rounded-[0.5rem] transition-colors -z-10"
                                />
                                <span className="text-white px-8 md:px-12 py-5 text-center w-full relative z-10 uppercase whitespace-nowrap">Garantir presente especial</span>
                            </motion.a>
                            <a
                                href="https://elprofessordaoratoria.com.br/evento-02/"
                                className="text-white/60 hover:text-white transition-all text-sm underline uppercase font-bold"
                            >
                                RECUSAR ESSA OFERTA
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
