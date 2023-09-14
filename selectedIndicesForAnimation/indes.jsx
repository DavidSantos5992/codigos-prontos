const handleClass = (i) => {

    let found = selectedIndicesForAnimation .indexOf(i)

    if (found >= 0) {

        const newArray = [...selectedIndicesForAnimation ]

        newArray.splice(found, 1)

        setSelectedIndicesForAnimation  (newArray)

    } else {

        setSelectedIndicesForAnimation  ([
            ...selectedIndicesForAnimation ,
            i
        ])

    }
}

const verify = (i) => {

    let found = selectedIndicesForAnimation .indexOf(i)

    return found >= 0 ? true : false

}