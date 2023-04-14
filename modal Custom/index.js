var app = new Vue({
    el: '#app',

    data: {

        modalActive: 1,

        customModal: {
            text: 'Você realmente deseja comprar HelloKitty gun por $1000.000.000,00?',
            type: 'success', /*confirmation , error, success */
        },
        
    },

    methods:
    {

        insertModal(nextModal) {
            this.modalActive = nextModal
        },

    },

    

    mounted() {

        /* fechar no esc */

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;

            if(app.menu && keyName == 'Escape') {
                app.closeUI()
            }

        });

    },

});
