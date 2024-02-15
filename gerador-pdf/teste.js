
window.addEventListener('DOMContentLoaded', () => {
    
    const btnGenerate = document.getElementById('generate_pdf')

    btnGenerate.addEventListener('click', () => {

        const content = document.getElementById('resultadoContainer')

        const options = {
            margin: [10, 10, 10, 10],
            filename: "PDFNOVO",
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        }

        html2pdf().set(options).from(content).save();
    })

});