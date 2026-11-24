import { useEffect, useState } from "react";

/** Retorna o id da seção que está mais perto do topo da tela. */
export const useActiveSection = (ids: string[]) => {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const onScroll = () => {
            const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
            if (atBottom) {
                setActive(ids[ids.length - 1]);
                return;
            }
            let current = ids[0];
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
                    current = id;
                }
            }
            setActive(current);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [ids]);

    return active;
};
