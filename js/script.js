const { createApp } = Vue


createApp({
    data () {
        return {
            
            todos: [
                {
                    id: 1,
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    id: 2,
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    id: 3,
                    text: 'Fare il bucato',
                    done: false,
                }
            ],
 
              
        };
    },


    methods: {
       
    }
 }).mount('#app');