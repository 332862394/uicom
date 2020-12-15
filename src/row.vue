<template>
    <div class="row" :style="rowStytle" :class="rowclass">
       <slot></slot>
       
      </div>
</template>

<script>
    export default {
        props:{
            gutter:[Number,String],
            align:{
                type:String,
                validator(value){
                    return ['left','right','center'].includes(value)
                }
            }
        },
        computed:{
           rowStytle(){
               let {gutter}=this
               return {
                   marginLeft:-gutter/2+'px',
                   marginRight:-gutter/2+'px'
               }
           },
           rowclass(){
               let {align}=this
               return [align&&`align-${align}`]
           }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                 vm.gutter=this.gutter
            })
        }
        
    }
</script>

<style lang="scss" scoped>
.row{
        display: flex;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-right{
            justify-content: flex-start;
        }
        &.align-center{
            justify-content: center;
        }
        
      }
</style>