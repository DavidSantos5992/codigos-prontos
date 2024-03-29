   useEffect(() => {
        loadPenalCodes()

        const currentDate = new Date();

        const formatTime = (date) => {
            const hour = date.getHours().toString().padStart(2, '0');
            const minute = date.getMinutes().toString().padStart(2, '0');
            return `${hour}:${minute}`;
        };

        const formatDate = (date) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();
            return `${day}/${month}/${year}`;
        };

        const hoursNewCrime = formatTime(currentDate)
        const dateNewCrime = formatDate(currentDate)

        setNewCrime({
            ...newCrime,
            hours: hoursNewCrime,
            date: dateNewCrime,
        });

    }, []);