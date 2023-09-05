const isValidInput = (value) => {
    const onlyLetters = /^[a-zA-Z]*$/; // Expressão regular para aceitar apenas letras
    return onlyLetters.test(value);
};

<input type="text"
    id="nameInput"

    onChange={(e) => {

        const newValue = e.target.value;
        if (isValidInput(newValue)) {

        } else {
            document.getElementById('nameInput').value = newValue.slice(0, -1)
        }

    }}
/>