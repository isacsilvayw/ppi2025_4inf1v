import { useState } from "react";
import styles from "./LuckyNumber.module.css";


export function LuckyNumber() {
    //REACT HOOK - useState()
    const [luckyNumber, setLuckyNumber] = useState(0);
    const [history, setHistory] = useState([]); // Novo estado para o array
    const [msg, setMsg] = useState(""); // Estado para mensagem

    function handleClick() {
        const newNumber = Math.ceil(Math.random() * 31);
        if (history.includes(newNumber)) {
            setMsg("Número escolhido");
        } else {
            setLuckyNumber(newNumber);
            setHistory([...history, newNumber]); // Adiciona ao array
            setMsg(""); // Limpa mensagem se não for repetido
        }
    }

    return (
        <div className={styles.conteiner} style={{ background: "#3f59c9", color: "#fff" }}>
            { luckyNumber ? (
                <h1> LuckyNumber = {luckyNumber}</h1>
            ) : (
                <h1> Lucky Number 🎲</h1>
            )}
            <button className={styles.button} onClick={handleClick}>Clique!</button>
            {msg && <div style={{ color: "yellow", fontWeight: "bold", margin: "1rem 0" }}>{msg}</div>}
            {/* Exibe o array de números sorteados */}
            <div>
                <h2>Números sorteados:</h2>
                <div style={{ display: "flex", gap: "1rem", fontSize: "2rem", fontWeight: "bold" }}>
                    {history.map((num, idx) => (
                        <span key={idx}>{num}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}