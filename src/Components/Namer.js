import { useState, useEffect } from 'react';

const NAME = "JUAN⠀QUISPE"
const DURATION = 1000; //MiliSeconds

const Letter = ({char, delay}) => {
    const [className, setClassName] = useState("namer-intro")

    useEffect(() => {
        let sto = setTimeout(() => {
            setClassName("namer-movement")
        }, 200 * delay + DURATION)

        return () => clearTimeout(sto);
    }, [delay])

    return <h1 style={{"--delay":delay}} className={className} >{char}</h1>
}

const Namer = () => {
    return (
    <> 
        <div className="port-section section-namer">
            <p>Hi, my name is</p>
            <div className="namer-text" style={{"--duration":DURATION}}>
                {NAME.split("").map((char, index) => {
                    return <Letter key={index} char={char} delay={index} />
                })}
            </div>
        </div>
    </>)
}

export default Namer