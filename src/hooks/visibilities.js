import { useEffect, useState } from "react";
import { Visibility } from "../Utils/Visibility";
import useScrollPosition from "./scroll-position"

export function useVisibilities(element) {

    const _visibilities = []

    for (let i = 0; i < element; i++) {
        _visibilities.push(new Visibility(i))
    }
    const [visibilities, setVisibilities] = useState(_visibilities);

    const scrollPosition = useScrollPosition()

    function findVisibility(id) {
        return visibilities.find((obj) => obj.id === id)
    }

    function tuneVisibility(id, value) {
        const visibility = findVisibility(id)
        if (visibility) {
            visibility.setVisibility(value)
            setVisibilities((old) => (
                [...old.filter((obj) => obj.id !== id), visibility]
            ))
        }
    }

    useEffect(() => {
        const section = Math.floor(scrollPosition / 1000)
        const perc = (scrollPosition / 500) % 2
        if (perc > 0.90) {
            tuneVisibility(section, 2 - perc)
            tuneVisibility(section + 1, perc - 1)
        }

    }, [scrollPosition]);

    return visibilities;
};

