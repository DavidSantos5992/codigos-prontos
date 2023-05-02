var app = new Vue({
    el: '#app',

    data: {

        menu: true,

        screen: 1,

        modalActive: 0,

        /* 
        Screen
        0-) Menu de opçoes
        1-) Comandos
        
        Modais
        1-) nome desejado
        2-) raça desejada
        3-) analisando
        */

        newName: '',

        /* obj criada para teste */
        vehicle: {
            drugs: [
                {
                    name: 'maconha',
                    amount: 1,
                },
                {
                    name: 'maconha',
                    amount: 1,
                },
            ],

            weapons: [
                /* {
                    name: 'pistola',
                    amount: 1,
                } */
            ],
        },

        dog: {

            menuType: 'actions', /* actions, animations, vehicle */

            name: 'Brutos',
            breed: 'Shepherd',

            actions: [
                'mudar raça',
                'Inspecionar o Veículo',
                'Farejar Civil',
                'Atacar',
                'vir aqui',
                'Inspecionar o Veículo',
                'Farejar Civil',
                'ir até',
                'seguir',
            ],

            animations: [
                'sentar',
                'deitar',
                'latir',
            ],

            vehicle: [
                'entrar',
                'sair',
            ],

        },

        selectedBreed: 'Shepherd',

        breeds: [
            'rottweiler',
            'Husky',
            'Retriever',
            'Shepherd',
            'pug',
        ],

    },

    methods: {

        chooseMenu(nextMenu) {
            this.dog.menuType = nextMenu
            this.changeScreen(1)
        },

        changeName() {
            console.log(this.newName)
            this.dog.name = this.newName
            this.insertModal(0)

            this.newName = ''
        },

        closeUI() {
            /* console.log('oi') */
            this.menu = false
        },

        insertModal(nextModal) {
            this.modalActive = nextModal
        },

        changeScreen(nextScreen) {
            this.screen = nextScreen
        },

        setDogBreed(newBreed) {
            this.selectedBreed = newBreed
        },

        newDogBreed(action) {

            if (action == 'confirm') {
                this.dog.breed = this.selectedBreed
            } else if (action == 'cancel') {
                this.selectedBreed = this.dog.breed
            }

            this.insertModal(0)
        },

        showAction(v) {
            let element = v.toLowerCase()
            console.log(element)

            if (element == 'mudar raça') {
                this.insertModal(2)
            } else if (element == 'farejar civil') {
                this.insertModal(3)
                console.log(this.vehicle.drugs.length)
            }
        },

        AnimationBreedSelect() {

            let animation = document.getElementById('dogBreedSelect')
            let classState = animation.classList.contains('block')

            console.log(classState)

            if (classState) {
                animation.classList.remove('block')
                animation.classList.remove('scale_out_ver_top')
                animation.classList.add('scale_up_ver_top')
            } else {
                animation.classList.add('scale_out_ver_top')
                animation.classList.remove('scale_up_ver_top')

                setTimeout(() => {
                    animation.classList.add('block')
                }, 50);
            }

        },
    },

    mounted() {

        /* fechar no esc */
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;

            if (app.modalActive > 0 && keyName == 'Escape') {
                app.insertModal(0)
            } else if (app.menu && keyName == 'Escape') {
                app.menu = false
            }
        });

    },

});
