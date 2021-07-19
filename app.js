const app = Vue.createApp({
 data() {
     return {
         firstName: 'Rorrito',
         lastName: 'Perez',
         email: 'rorrito.perez@gmail.com',
         gender:'male',
         picture: 'https://randomuser.me/api/portraits/men/75.jpg',
     }
 },

 methods: {
getUser () {
  this.firstName='Sam'
  this.lastName='Rosa'
  this.email='samrosa@yahoo.com'
  this.gender='female'
  this.picture= 'https://randomuser.me/api/portraits/women/75.jpg'
}
 }

})

app.mount ('#app')

