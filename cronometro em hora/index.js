var app = new Vue({
    el: '#app',

    data: {

        figthTimer : '00:00',

    },

    watch : {

    },

    methods: {

        countdownTimer() {

            let seconds = 2 * 60;
          
            const interval = setInterval(() => {
              seconds--;
          
              if (seconds == 0) {
                clearInterval(interval);
                this.figthTimer = '00:00';
              }
          
              const minutesRemaining = Math.floor(seconds / 60);
              const secondsRemaining = seconds % 60;
          
              const formattedTime = `${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
              console.log(formattedTime);

              this.figthTimer = formattedTime
        
            }, 1000);
        },

    

    },

    mounted() {

        this.countdownTimer()


    },

});
