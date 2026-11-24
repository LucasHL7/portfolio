import { Box, Typography } from "@mui/material";
import Section from "../../../../components/Section/Section";
import { now, stack } from "../../../../data/profile";

const About = () => {
    return (
        <Section id="about" title="Sobre">
            <Box sx={{ "& p": { color: "text.secondary", lineHeight: 1.8, mb: 2 }, "& strong": { color: "text.primary", fontWeight: 500 } }}>
                <Typography>
                    Sou formado em <strong>Ciência da Computação</strong> (2020–2024). No último ano da faculdade fiz
                    meu primeiro freela para a <strong>Doce Desejo</strong>, uma doceria onde eu já tinha trabalhado:
                    primeiro a landing page de encomendas e depois o app que a equipe usa para controlar os pedidos.
                </Typography>
                <Typography>
                    Hoje sou <strong>suporte técnico N2</strong> na <strong>Tartigrado Tecnologia</strong>. Atendo os
                    chamados da RevGas, o ERP da empresa, e também participo da manutenção do sistema e do
                    desenvolvimento de testes.
                </Typography>
                <Typography>
                    No desenvolvimento, trabalho principalmente com <strong>React</strong> e{" "}
                    <strong>React Native</strong>, e também tenho experiência com Angular e Python.
                </Typography>
            </Box>

            <Box mt={5}>
                <Typography component="h3" variant="subtitle2" sx={{ fontFamily: "\"SUSE Mono\", monospace", color: "text.primary", mb: 1.5 }}>
                    Agora
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary", "& li": { mb: 0.75, lineHeight: 1.7 } }}>
                    {now.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </Box>
            </Box>

            <Box mt={5}>
                <Typography component="h3" variant="subtitle2" sx={{ fontFamily: "\"SUSE Mono\", monospace", color: "text.primary", mb: 1.5 }}>
                    Tecnologias
                </Typography>
                <Box component="dl" sx={{ m: 0, display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 3, rowGap: 1 }}>
                    {stack.map((s) => (
                        <Box key={s.group} sx={{ display: "contents" }}>
                            <Typography component="dt" color="text.primary" fontWeight={500}>
                                {s.group}
                            </Typography>
                            <Typography component="dd" color="text.secondary" sx={{ m: 0 }}>
                                {s.items}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Section>
    );
};

export default About;
