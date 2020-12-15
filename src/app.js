import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Toast from './toast.vue'
import plugin from './plugin'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-toast',Toast)
Vue.use(plugin)
new Vue({
    el:'#app',
    data:{
    loading1:false,
    loading2:true,
    loading3:false,
    message:'hi'
    
} ,
created(){
    this.$toast("这是toast测试",{
        closeButton:{
            text:'知道了',
            callback(toast){
                toast.log()
                console.log("这是测试回调")
            }
        }
    })
},
methods:{
    inputChange(xxx){
        console.log("fff")
        console.log(xxx.target.value)
    },
    showToast(){
       
    }
},

})