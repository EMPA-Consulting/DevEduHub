import { useEffect } from "react";

export default function UseUpdateLogger(value) {
    useEffect(() => {
        console.log(value);
    }, [value]);
}   