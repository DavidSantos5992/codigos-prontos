useEffect(() => {
    const numberOfArrays = countArraysInObject(playerAnalysis);
    console.log(`O objeto contém ${numberOfArrays} arrays.`);
}, [playerAnalysis]);

function countArraysInObject(obj) {

    console.log('obj na função', obj)
    let count = 0;
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            count++;
        }
    }
    return count;
}


/* ou  */

{Object.keys(playerAnalysis).map((e) => (

    <CustomerAnalysis title={'fonte de trafego'} />

))}
