const formatPhoneNumber = (phoneNumber) => {
         
        
    if ( phoneNumber.length > 15) {

        return phoneNumber = phoneNumber.slice(0, -1) 
       
    }

    console.log(phoneNumber)
    console.log(phoneNumber.length)
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    if (cleanedNumber.length <= 2) {
        // Se o número for igual ou menor que 2 dígitos, não formate ainda
        return cleanedNumber;
    } else if (cleanedNumber.length <= 11) {
        // Formate como (XX) XXXXX-XXXX
        let formattedNumber = `(${cleanedNumber.substring(0, 2)}) ${cleanedNumber.substring(2, 7)}`;

        if (cleanedNumber.length >= 8) {
            // Adicione o hífen e os últimos 4 dígitos se houver
            formattedNumber += `-${cleanedNumber.substring(7, 11)}`;
        }

        return formattedNumber;
    } else {
        // Se tiver mais de 11 dígitos, apenas pegue os primeiros 11
        return cleanedNumber.substring(0, 11);
    }
}