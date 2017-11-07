<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" :class="item" v-for="(item,index) in starClasses" :key="index"></span>
  </div>
</template>

<script>
    /*
  最高分: 5
  小数部分>=0.5
   */
  const LENGTH = 5
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'

  export default {
    props:{
      score:Number,
      size:Number
    },
    computed:{
      starClasses(){
        const scs = []
        //向css添加CLASS_ON
        var score = this.score
        var scoreInteger = Math.floor(score)
        for(let i = 0;i < scoreInteger;i++){
          scs.push(CLASS_ON)
        }
        //向css添加CLASS_HALF
        if(score-scoreInteger >= 0.5){
          scs.push(CLASS_HALF)
        }
        //向scs添加CLASS_OFF
        while(scs.length < LENGTH){
          scs.push(CLASS_OFF)
        }
        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star-24
    .star-item
      display inline-block
      margin-right 3px
      &:last-child
        margin-right: 0
      width 10px
      height 10px
      background-repeat no-repeat
      background-size 10px 10px
    .on
      bg-star(star24_on)
    .half
      bg-star(star24_half)
    .off
      bg-star(star24_off)
  .star-36
    .star-item
      display inline-block
      margin-right 6px
      &:last-child
        margin-right: 0
      width 15px
      height 15px
      background-repeat no-repeat
      background-size 15px 15px
    .on
      bg-star(star36_on)
    .half
      bg-star(star36_half)
    .off
      bg-star(star36_off)
  .star-48
    .star-item
      display inline-block
      margin-right 22px
      &:last-child
        margin-right: 0
      width 20px
      height 20px
      background-repeat no-repeat
      background-size 20px 20px
    .on
      bg-star(star48_on)
    .half
      bg-star(star48_half)
    .off
      bg-star(star48_off)
</style>

