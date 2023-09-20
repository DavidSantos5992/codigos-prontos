const [searchText, setSearchText] = useState('');

const filterPlayers = (text) => {
    const lowercaseText = text.toLowerCase();

    if (/^\d+$/.test(text)) {
        const filteredPlayers = players.filter((player) =>
            player.id.toString().includes(text)
        );
        return filteredPlayers;

    } else {
        const filteredPlayers = players.filter((player) =>
            player.name.toLowerCase().includes(lowercaseText) || (player.name.toLowerCase() + ' - ' + player.id) == text
        );
        return filteredPlayers;
    }

};


{
    filterPlayers(searchText).map((el, index) => (

        <div className="selectedPlayers" key={index}>
            <label className="control-2 control-checkbox-2">
                <input
                    checked={verifySelectedPlayers(el)}
                    onChange={(event) => handleSelectedPlayer(event, el)}
                    type="checkbox"
                />
                <div className="control_indicator-2"></div>
                <p>{`${el.name} - ${el.id} `}</p>
            </label>
        </div>

    ))
}

<input
    className={`${playerOpenSelection ? 'serachPlayerOpen' : 'serachPlayerClose'}`}
    type="text"
    placeholder='Digite aqui...'
    onChange={(event) => setSearchText(event.target.value)}
/>


/* metodo otimizado porem ainda não funciona completamente 

        let array = [
    {
        name: 'David',
        id: 6,
        text: 'Ola david'
    },
    {
        name: 'Robson',
        id: 15,
        text: 'Ola david'
    },
    ];

    let busca = 'da';
    const filteredArray = array
    .filter((elemento) => (elemento.name.toLowerCase() + ' - ' + elemento.id).toLowerCase().includes(busca.toLowerCase()))
    .map((elemento) => {
        console.log(elemento.name);
        return elemento;
    });

    console.log(filteredArray);

*/