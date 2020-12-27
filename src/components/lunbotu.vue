<template>
  <div class="main">
    <div class="wrap">
    <!-- <div class="wrap"> -->
      <div class="swiper">
        <ul class="swiper-list" :style="{'left':-width+'px'}">
          <li class="swiper-item" v-for="(item,index) in imgList" :key="index"><img class="swiper-img" :src="item" alt=""></li>
        </ul>
        <div class="pre" @click="goPre">《</div>
        <div class="next" @click="goNext">》</div>
      </div>
      <div class="dots">
        <ul class="dot-list">
          <li class="dot" v-for="(item,index) in imgList.length" :key="index" :class="{active:item == dotId}" @click="changeDot(item)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dizhi from "../assets/imgs/地址.png"
import dingdan from "../assets/imgs/订单.png"
import gouwuche from "../assets/imgs/购物车.png"
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgList:[dizhi,dingdan,gouwuche],
      width:0,
      cur:0,
      dotId:1,
      timer:null,
    }
  },
  methods:{
    goPre(){
      clearInterval(this.timer);
      var len = this.imgList.length;
      if(this.cur == 0){
        this.cur = len - 1;
        this.dotId = len;
      }else{
        this.cur --;
        this.dotId --;
      }
      this.width = this.cur * 350;
      this.timer = setInterval(()=>{
        this.goNext();
      },1500);
    },
    goNext(){
      clearInterval(this.timer);
      var len = this.imgList.length;
      if(this.cur == len - 1){
        this.cur = 0;
        this.dotId = 1;
      }else{
        this.cur ++;
        this.dotId ++;
      }
      this.width = this.cur * 350;
      this.timer = setInterval(()=>{
        this.goNext();
      },1500);
    },
    // stopInterval(){
    //   clearInterval(this.timer);
    // },
    // goInterval(){
    //   this.timer = setInterval(()=>{
    //     this.goNext();
    //   },1500);
    // },
    changeDot(item){
      clearInterval(this.timer);
      this.dotId = item;
      // console.log(item)
      this.cur = (item -1)
      this.width = this.cur * 350;
      this.timer = setInterval(()=>{
        this.goNext();
      },1500);
    },
  },
  created(){
    this.timer = setInterval(()=>{
      this.goNext();
    },1500);
  },
}
</script>

<style scoped lang="less">
.main{
  .wrap{
    .swiper{
      width:700px;
      height:200px;
      margin:50px auto 0;
      position:relative;
      overflow: hidden;
      .swiper-list{
        width:3000px;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        display:flex;
        flex-shrink: 0;
        .swiper-item{
          .swiper-img{
            width:700px;
            height:200px;
          }
        }
      }
      .pre{
        position:absolute;
        top:50%;
        left:20px;
        transform:translateY(-50%);
        font-size:40px;
      }
      .next{
        position:absolute;
        top:50%;
        right:20px;
        transform:translateY(-50%);
        font-size:40px;
      }
    }
    .dots{
      margin-top:10px;
      // position:absolute;
      // bottom:-20px;
      // left:50%;
      .dot-list{
        display:flex;
        justify-content: center;
        .dot{
          width:20px;
          height:20px;
          border-radius: 10px;
          border: 1px solid black;
          margin-right:20px;
          &.active{
            background:red;
          }
        }
      }
    }
  }
}
</style>
