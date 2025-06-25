import { useState } from "react";
import styles from "./LuckyNumber.module.css";


export function LuckyNumber() {
    //REACT HOOK - useState()
    const [luckyNumber, setLuckyNumber] = useState(0);

    function handleClick() {
        setLuckyNumber(Math.ceil(Math.random() * 31));
    }

    return (
        <div className={styles.conteiner}>
            { luckyNumber ? (
                <h1> LuckyNumber = {luckyNumber}</h1>
            ) : (
                <h1> Lucky Number 🎲</h1>
            )}
            <button className={styles.button} onClick={handleClick}>Clique!</button>
            {luckyNumber = []}
        </div>
    );
}