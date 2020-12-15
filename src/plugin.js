import Toast from './toast.vue'
export default{
   install(Vue,options){
       Vue.prototype.$toast=function(message){
           console.log("hihihi toast")
           let constructor=Vue.extend(Toast)
           let toast=new constructor()
           toast.$slots.default=[message]
           toast.$mount()
           document.body.appendChild(toast.$el)
       }
   } 
}