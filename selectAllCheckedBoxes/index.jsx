import React from 'react';

export default function checkBox() {

    const verifySelectedPlayers = (player) => {

        return messageList.find(e => e == player) != undefined ? true : false

    }

    function handleSelectedPlayer(event, element) {

        if (element == 'all') {

            console.log('all', event.target.checked)
            if (event.target.checked) {
                setMessageList(
                    players
                )
            } else {
                setMessageList([])
            }

            return

        }
    }

    return (

        {
            array.map((el) => (

                <label className="control-2 control-checkbox-2">

                    <input checked={verifySelectedPlayers(el)} onChange={(event) => handleSelectedPlayer(event, el)} type="checkbox" />

                </label>

            ))
        }

    )
}