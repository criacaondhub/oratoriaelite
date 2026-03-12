
const Footer = () => {
    return (
        <footer className="relative w-full bg-transparent md:py-[2.6042vw] py-12 md:px-[0.7813vw] px-4 xl:px-[6.2500vw] flex items-center justify-center font-body border-t border-white/5">
            <div className="text-center text-white/90 text-[14px] md:text-[0.8333vw] leading-[1.6] max-w-[62.5000vw]">
                <p className="mb-0 font-normal">
                    Desenvolvido por{" "}
                    <a
                        href="https://novadimensaodigital.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#cc0000] underline"
                    >
                        Nova Dimensão
                    </a>
                </p>

                <div className="flex flex-col gap-4 mt-8 opacity-90 transition-opacity duration-500">
                    <p className="font-normal mb-0">
                        ESTE SITE NÃO É do FACEBOOK: Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é comercial independente da FACEBOOK, Inc.
                    </p>

                    <p className="font-normal mb-0">
                        A El Professor da Oratória Ltda. é uma empresa com o objetivo de ajudar pessoas a se comunicarem melhor e aumentar o seu nível de oratória através de cursos e mentorias digitais. Os depoimentos mostrados vão variar com base no seu esforço, no conhecimento que você adquirir e nas forças do mercado que estão além do controle de qualquer pessoa.
                    </p>

                    <p className="font-normal mb-0">
                        Nós NÃO compartilharemos seus dados com ninguém.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
