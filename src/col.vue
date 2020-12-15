<template>
     <div class="col" :class="colClass" :style="colStyle">
              <slot></slot>
        
     </div>
</template>

<script>
    export default {
        props:{
            span:{
                type:[Number,String]
            },
            offset:[Number,String],
            phone:{
                type:Object,
                validator(value){
                    let keys=Object.keys(value)
                    let valid=true
                    keys.forEach(key=>{

                    if(!['span','offset'].includes(key)){
                        valid=false
                    }
                    }) 
                   return valid
                }
            }
            
        },
        data(){
            return {
                gutter:0
            }
        },
        computed:{
            colClass(){
                let {span,offset,phone}=this
                let phoneClass=[]
                if(phone){
                    phoneClass=[`col-phone-${phone.span}`]
                }
                return [span&&`col-${span}`,offset&&`offset-${offset}`,...phoneClass]
            },
            colStyle(){
                return {
                    paddingLeft:this.gutter/2+'px',
                    paddingRight:this.gutter/2+'px',
                }
            }
        },
        
    }
</script>

<style lang="scss" scoped>
 .col{
        
        width: 50%;
        // border:1px solid red;
        // padding: 0 10px;
        $class-prefix:col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24)*100%;
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ($n/24)*100%;
            }
        }
        @media (max-width:576px) {
             $class-prefix:col-phone-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24)*100%;
            }
        }
        $class-prefix:offset-phone-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ($n/24)*100%;
            }
        }
        }
         @media (min-width: 557px)and (max-width:768px) {
             $class-prefix:col-ipad-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24)*100%;
            }
        }
        $class-prefix:offset-ipad-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ($n/24)*100%;
            }
        }
        }
         @media (min-width:769px) and (max-width: 992px) {
             $class-prefix:col-narrow-pc;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24)*100%;
            }
        }
        $class-prefix:offset-narrow-pc-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ($n/24)*100%;
            }
        }
        }
      }

</style>