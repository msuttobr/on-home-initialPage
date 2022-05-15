import { UTurnLeftOutlined } from "@mui/icons-material"
import ButtonWithArrow from "../../../../components/ButtonWithArrow"
import GradientText from "../../../../components/GradientText"

import "./style.css"

const Footer = () => {
    const subtitle = "A empresa certa para você que tem equipes que necessitem de equipamentos de ponta, suporte exclusivo e que forneça o que você necessita para tomar decisões melhores para o seu negócio"
    const mediaIcons = ["./icons/linkedin.svg", "./icons/facebook.svg", "./icons/instagram.svg"]
    const footerList = [
        {
            title: "Site",
            options: ["Features", "Serviços", "Suporte"]
        },
        {
            title: "Empresa",
            options: ["Sobre nós", "Nosso time", "Nossa história"]
        },
        {
            title: "Legale",
            options: ["Política de Privacidade", "Termos e Condições", "Políticas da empresa"]
        },
        {
            title: "Nos siga!",
            options: ["Twitter", "Facebook", "LinkedIn"]
        },
    ]

    return (
        <footer className="footer">
            <div className="footer--content">
                <div className="footer--description">
                    <GradientText
                        textAlign="left"
                        title={"OnHome"}
                        subtitle={subtitle}
                        fontSizeTitle={40}
                        fontWeight={"bold"}
                    />
                    <ButtonWithArrow value={"Seguir"} style={{ margin: "20px 0" }}>Seguir</ButtonWithArrow>
                    <div className="footer--icons">
                        {mediaIcons.map(image => (
                            <img src={image} alt="" />
                        ))}
                    </div>
                </div>
                <div className="footer--links">
                    {footerList.map(item => (
                        <ul className="footer--list">
                            <li className="footer--link--title">{item.title}</li>
                            {item.options.map(option => (
                                <li className="footer--option">{option}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer