<template>
    <div class="toast">     
   <slot ></slot>
   <div class="line"></div>
   <span class="close" v-if="closeButton" @click="onClickClose">
       {{closeButton.text}}
   </span>
    </div>
</template>

<script>

    export default {
        name:"uitoast",
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoDelay:{
                type:Number,
                default:5
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return {text:"关闭",callback:undefined}
                }
            }
        },
        mounted(){
            console.log(this.closeButton)
            if(this.autoClose){
                setTimeout(() => {
                    this.close()
                }, this.autoDelay*1000);
            }
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            log(){
                console.log('测试')
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback==='function'){
                  this.closeButton.callback(this);
                }
               
            }
        }
    }
</script>

<style lang="scss" scoped>
$font-size:14px;
$toast-height:40px;
$toast-bg:rgba(0,0,0,0.75);
.toast{
 font-size: $font-size;
 line-height: 1.8;
 height: $toast-height;
 position: fixed;
 top: 0;
 left: 50%;
 transform: translateX(-50%);
 display: flex;
 color: white;
 align-items: center;
 background: $toast-bg;
 border-radius: 4px;
 box-shadow: 0 0 3px 0 rhba(0,0,0,0.50);
 padding: 0 16px;
}
.close{
  padding-left: 16px;
}
.line{
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
}
</style>