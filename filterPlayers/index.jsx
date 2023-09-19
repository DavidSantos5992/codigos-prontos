const [searchText, setSearchText] = useState('');

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