var app = new Vue({
    el: '#app',

    data: {

        screen: 0,

        modalActive: 0,

        menu: true,
        
    },

    methods:
    {

        closeUI()
        {
            this.menu = false
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
