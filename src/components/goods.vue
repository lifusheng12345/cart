<template>
  <div class="wrap">
    <p class="title">适用打印机</p>
    <ul class="sell-list">
      <li class="list-item" v-for="item in sellList" :key="item.machine_id" :class="{active:sellId == item.machine_id}" @click="activeSell(item)">{{ item.machine_name }}</li>
    </ul>
    <p class="title">适用行业</p>
    <ul class="industry-list">
      <!-- <li class="list-item" @click="activeClass($event)">通用</li>
      <li class="list-item" @click="activeClass($event)">线缆</li>
      <li class="list-item" @click="activeClass($event)">办公管理</li>
      <li class="list-item" @click="activeClass($event)">通信电力</li>
      <li class="list-item" @click="activeClass($event)">医药</li>
      <li class="list-item" @click="activeClass($event)">商超</li>
      <li class="list-item" @click="activeClass($event)">珠宝饰品</li>
      <li class="list-item" @click="activeClass($event)">服装</li>
      <li class="list-item" @click="activeClass($event)">烟草</li>
      <li class="list-item" @click="activeClass($event)">母婴</li>
      <li class="list-item" @click="activeClass($event)">美妆</li>
      <li class="list-item" @click="activeClass($event)">生鲜食品</li>
      <li class="list-item" @click="activeClass($event)">支付</li>
      <li class="list-item" @click="activeClass($event)">眼镜</li>
      <li class="list-item" @click="activeClass($event)">家用</li>
      <li class="list-item" @click="activeClass($event)">电子</li> -->
      <li class="list-item" :class="{active: list.includes(item.id)}" v-for="item in industryList" :key="item.id" @click="activeClass($event,item)">{{ item.name }}</li>
    </ul>
    <p class="title">个性推荐</p>
    <ul class="recomend-list">
      <li class="list-item" v-for="(item,index) in recommendList" :key="index">{{ item.width }}*{{ item.height }}</li>
    </ul>
    <!-- <button class="submit">提交</button> -->
    <div class="bottom">
      <div class="left">重置</div>
      <div class="right">确定</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[],
      sellList:[],
      industryList:[],
      recommendList:[],
      sellId:-1,
    }
  },
  methods:{
    getGoods(){
      axios.get("https://shop.jc-test.cn/client/common/getStaticData",{
      params:{
        machine_ids: "",
        industry: "",
        paper_type: "",
        is_custom_made: "",
        width: 16,
        height: "",
        type: 1
      },
    }).then(res=>{
      this.sellList = res.data.data.sellList;
      this.industryList = res.data.data.industryList;
      this.recommendList = res.data.data.recommendSizeList;
      console.log(this.sellList,this.industryList,this.recommendList);
    }).catch();
    },
    
    activeClass(e,item){
      // console.log(e.target);
      e.target.classList.toggle("active");
      if(e.target.classList.contains("active")){
        this.list.push(item.id);
      }else{
        // this.list.pop(item.id);
        var n = (() => {
          var jj;
          for(var i = 0;i < this.list.length;i++){
            if(this.list[i] == item.id){
              // return i;
              jj = i;
            }else{
              // return -1;
            }
          }
          return jj;
        })();
        console.log(n);
        this.list.splice(n,1)
        
      }
      console.log(this.list)
      // e.target.classList.add("active");
    },
    /*
    activeClass(item){
      if(this.list.includes(item.id)){
        // this.list = this.list.filter(id => id != item.id);

        // for(let i = 0; i < this.list.length; i++){
        //   if(this.list[i] == item.id){
        //     this.list.splice(i,1);
        //     break;
        //   }
        // }

        var n = -1;
        for(let i = 0; i < this.list.length; i++){
          if(this.list[i] == item.id){
            n = i;
            break;
          }
        }
        if(n != -1){
          this.list.splice(n, 1);
        }
      }else{
        this.list.push(item.id);
      }
      console.log(this.list);
    }
    */
   activeSell(item){
     this.sellId = item.machine_id;
   },
  },
  created(){
    this.getGoods();
    this.list.push(1105, 1113);
  },
}
</script>

<style scoped lang="less">
.wrap{
  display:flex;
  flex-direction: column;
  .title{
    font-size:30px;
    font-weight: bold;
    margin-left:20px;
    height:50px;
    line-height:50px;
  }
  .sell-list{
    flex:1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .list-item{
    width:167px;
    height:30px;
    margin:10px 1px 0 12px;
    font-size:25px;
    text-align:center;
    background:#ccc;
      &.active{
        background:red;
      }
    }
  }
  .title{
    font-size:30px;
    font-weight: bold;
    margin-left:20px;
    height:50px;
    line-height:50px;
  }
  .industry-list{
    flex:1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .list-item{
    width:167px;
    height:30px;
    margin:10px 1px 0 12px;
    font-size:25px;
    text-align:center;
    background:#ccc;
      &.active{
        background:red;
      }
    }
  }
  .title{
    font-size:30px;
    font-weight: bold;
    margin-left:20px;
    height:50px;
    line-height:50px;
  }
  .recomend-list{
    flex:1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .list-item{
    width:167px;
    height:30px;
    margin:10px 1px 0 12px;
    font-size:25px;
    text-align:center;
    background:#ccc;
      &.active{
        background:red;
      }
    }
  }
  .bottom{
    height:50px;
    display: flex;
    margin-top:50px;
    .left{
      flex:1;
      text-align:center;
      line-height:50px;
    }
    .right{
      flex:2;
      text-align:center;
      line-height:50px;
      background-color:skyblue;
    }
  }
}
</style>
