import React from "react"

const Footer = () => {
    return (
        <footer className="relative w-full bg-transparent py-[50px] px-[15px] xl:px-[120px] flex items-center justify-center font-body border-t border-white/5">
            <div className="text-center text-white/90 text-[14px] md:text-[16px] leading-[1.6] max-w-[1200px]">
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
