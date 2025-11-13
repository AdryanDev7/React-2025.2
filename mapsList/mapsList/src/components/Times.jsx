const Time = () => {
    const clubes = [
        { nome: 'Flamengo', cidade: 'Rio de Janeiro' },
        { nome: 'Palmeiras', cidade: 'São Paulo' },
        { nome: 'Grêmio', cidade: 'Porto Alegre' },
        { nome: 'Atlético Mineiro', cidade: 'Belo Horizonte' },
    ];
    const mapsClubes = clubes.map((clube, index) =>
        <li key={index}>{clube.nome} - {clube.cidade}</li>) // concatenar nome e cidade
    return (
        <div>
            <h2>Clubes de Futebol Brasileiros</h2>
            <ul>
                {mapsClubes} {/* chamando o vetor */}
            </ul>
        </div>
    )
}
export default Time;