const formatPhoneNumber = (phoneNumber) => {
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    let formattedNumber = `(${cleanedNumber.substring(0, 2)}) ${cleanedNumber.substring(2, 7)}-${cleanedNumber.substring(7, 11)}`;

    if (formattedNumber.length == 4) {
        formattedNumber = ''
    }

    return formattedNumber;
}
