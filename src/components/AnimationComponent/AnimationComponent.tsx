import { styled } from "@mui/material";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface AnimationComponentProps {
    children: ReactNode;
    delay?: number;
}

const RevealBox = styled("div", {
    shouldForwardProp: (prop) => prop !== "visible" && prop !== "delay",
})<{ visible: boolean; delay: number }>(({ visible, delay }) => ({
    height: "100%",
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(12px)",
    transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
    "@media (prefers-reduced-motion: reduce)": {
        opacity: 1,
        transform: "none",
        transition: "none",
    },
}));

const AnimationComponent = ({ children, delay = 0 }: AnimationComponentProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <RevealBox ref={ref} visible={visible} delay={delay}>
            {children}
        </RevealBox>
    );
};

export default AnimationComponent;
