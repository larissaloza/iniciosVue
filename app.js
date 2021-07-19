const app = Vue.createApp({
 data() {
     return {
         firstName: 'Rorrito',
         lastName: 'Perez',
         email: 'rorrito.perez@gmail.com',
         gender:'male',
         picture: 'https://randomuser.me/api/portraits/men/75.jpg',
     }
 }
})

app.mount ('#app')

