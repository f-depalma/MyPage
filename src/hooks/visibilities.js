import { useEffect, useState } from "react";
import { Visibility } from "../Utils/Visibility";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const _visibilities = []

export const useVisibilities = (elements) => {

    if (!_visibilities.length)
        for (let i = 0; i < elements; i++) {
            _visibilities.push(new Visibility(i))
        }

    const [visibilities, setVisibilities] = useState(_visibilities);

    useEffect(() => {
        const calculate = () => {
            const scrollPosition = window.pageYOffset

            function tuneVisibility(id, value) {
                const visibility = findVisibility(id)
                if (visibility) {
                    visibility.setVisibility(value)
                    setVisibilities((old) => (
                        [...old.filter((obj) => obj.id !== id), visibility]
                    ))
                }
            }

            function findVisibility(id) {
                return visibilities.find((obj) => obj.id === id)
            }

            const section = Math.floor(scrollPosition / 1000)

            const perc = scrollPosition % 1000 / 1000

            if (perc > 0) {
                tuneVisibility(section, 1 - perc)
                tuneVisibility(section + 1, perc)
            }
        }

        window.addEventListener("scroll", calculate);

        return () => window.removeEventListener("scroll", calculate);
    });

    return visibilities;
};

