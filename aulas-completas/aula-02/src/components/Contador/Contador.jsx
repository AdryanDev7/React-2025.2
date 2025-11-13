import { useState } from "react";

export const Contador = () => {
    // 2. Corrigido: 'useState' aqui também
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador((valorAnterior) => valorAnterior + 1);
    }
    return (
        <div>
            <h2>Contador</h2>
            <p>Valor: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}