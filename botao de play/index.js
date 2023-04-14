var app = new Vue({
    el: '#app',

    data: {

        screen: 0,

        modalActive: 0,
        isPlaying: false,

        menu: true,
        
    },

    methods:
    {
        squeezed() {
            let el = document.getElementById('botao')
            el.classList.toggle('active')
            console.log(el)
        },
        closeUI()
        {
            this.menu = false
        },

        togglePlay() {
            this.isPlaying = !this.isPlaying;
          }
      

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
