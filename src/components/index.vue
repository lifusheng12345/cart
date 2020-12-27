<template>
  <div class="container">
	  <div class="header">
		  <div class="personal-center" @click="showPop = true" ><img src="@/assets/imgs/个人中心@2x.png" alt=""><span>个人中心</span></div>
		  <!-- <el-Drawer
			:visible.sync="drawer"
			:direction="direction"
			size="200px"
			:show-close="false"
			@opened="hendleOpened"
			ref="draw">
			  <slot>{{direction}}</slot>
			  <div slot="title">
				  <span>jjlo</span>
			  </div>
			  <div class="wrap">
				  <div class="logo" @click="closeDrawer"></div>
			  </div>
		  </el-Drawer> -->
		  <!-- <van-sidebar v-model="activeKey">
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
			<van-sidebar-item title="标签名称" />
		  </van-sidebar> -->
		  
		  <div class="search">
			<input type="text" placeholder="输入搜索" />
		  	<img src="@/assets/imgs/搜索.png" alt="">
			<div class="saoyisao">
				<div class="corner1"></div>
				<div class="corner2"></div>
				<div class="corner3"></div>
				<div class="corner4"></div>
				<div class="line"></div>
			</div>
		  </div>
		  <div class="complaint"><img src="@/assets/imgs/投诉@2x.png" alt=""><span>投诉</span></div>
		  <div class="coupon"><img src="@/assets/imgs/领券中心@2x.png" alt=""><span>领券</span></div>
	  </div>

	  
	  <div class="content">
		  <div class="banner"></div>
		  <div class="item-list">
			  <div class="item">
				  <img class="item-img" src="@/assets/imgs/耗材@2x.png" alt="">
				  <span class="item-text">耗材</span>
			  </div>
			  <div class="item">
				  <img class="item-img" src="@/assets/imgs/硬件b21@2x.png" alt="">
				  <span class="item-text">硬件</span>
			  </div>
			  <div class="item">
				  <img class="item-img" src="@/assets/imgs/软件@2x.png" alt="">
				  <span class="item-text">软件</span>
			  </div>
		  </div>
		  <div class="product">
			  <div class="title">
				  <div class="spe" :class="{'show':clicked ==1}" @click="changeShowSpe">个性专属</div>
				  <div class="pop" :class="{'show':clicked ==2}" @click="changeShowPop">人气推荐</div>
			  </div>
			  <div class="goods-list-per" v-show="clicked ==1">
				  <div class="goods-item" v-for="(item,index) in personal_goods_list" :key="index">
					  <div class="img-box"><img class="goods-img" :src="item.image_path" alt=""></div>
					  <!-- <div :style="{'background-image':`url(${item.image_path})`}"></div> -->
					  <div class="title-box"><span class="custom-made" v-if="item.is_custom_made">订制</span><span class="goods-title">{{ item.goods_name }}</span></div>
					  <div class="sute-machine"><span v-if="item.machine_tag_str">适用{{ item.machine_tag_str }}机型</span></div>
					  <div class="detail-box"><span class="goods-detail">{{ item.sell_num}}次购买</span><span class="industry" v-if="item.industry_tag_str">{{ item.industry_tag_str }}</span></div>
					  <div class="price-box"><span class="goods-price">{{ Number(item.sell_price) }}</span><span class="origin-price" v-if="item.discount">{{ Number(item.shop_price) }} <div class="line-through"></div></span></div>
				  </div>
			  </div>
			  <div class="goods-list-pop" v-show="clicked ==2">
				  <div class="goods-item" v-for="(item,index) in goods_list" :key="index">
					  <div class="img-box"><img class="goods-img" :src="item.image_path" alt=""></div>
					  <!-- <div :style="{'background-image':`url(${item.image_path})`}"></div> -->
					  <div class="title-box"><span class="custom-made" v-if="item.is_custom_made">订制</span><span class="goods-title">{{ item.goods_name }}</span></div>
					  <div class="sute-machine"><span v-if="item.machine_tag_str">适用{{ item.machine_tag_str }}机型</span></div>
					  <div class="detail-box"><span class="goods-detail">{{ item.sell_num}}次购买</span><span class="industry" v-if="item.industry_tag_str">{{ item.industry_tag_str }}</span></div>
					  <div class="price-box"><span class="goods-price">{{ Number(item.sell_price) }}</span><span class="origin-price" v-if="item.discount">{{ Number(item.shop_price) }} <div class="line-through"></div></span></div>
				  </div>
			  </div>
		  </div>
	  </div>

	  <!-- <van-popup v-model="showPop" position="top" :style="{ width: '70%',height:'100%'}" :overlay="true" :overlay-style="{'opacity':0.5,'background':'red','height':'100%'}"> -->
	  <van-popup v-model="showPop" position="left" :style="{ width: '70%',height:'100%'}">
			<div class='wrap'>
				<div class="logo">
					<img class="logo-img" src="@/assets/imgs/精臣红色logo_画板1@2x.png" alt="">
					<p class="logo-title">官方直销，正品更实惠</p>
				</div>
				<div class="tel">
					<span class="telephone">{{ 18571724669 }}</span>
					<img class="download" src="@/assets/imgs/下载.png" alt="">
				</div>
				<div class="membership">
					<div class="member-box">
						<span class="member">会员章程</span>
					</div>
					<div class="points">积分：<span class="number">{{ 0 }}</span></div>
				</div>
				<ul class="my-list">
					<li class="list-item">
						<img class="item-picture" src="@/assets/imgs/购物车.png" alt="">
						<span class="ctx">购物车</span>
					</li>
					<li class="list-item">
						<img class="item-picture" src="@/assets/imgs/订单.png" alt="">
						<span class="ctx">我的订单</span>
					</li>
					<li class="list-item">
						<img class="item-picture" src="@/assets/imgs/优惠券.png" alt="">
						<span class="ctx">优惠券</span>
					</li>
					<li class="list-item">
						<img class="item-picture" src="@/assets/imgs/地址.png" alt="">
						<span class="ctx">收货地址</span>
					</li>
					<li class="list-item">
						<img class="item-picture" src="@/assets/imgs/资质认证.png" alt="">
						<span class="ctx">资质认证</span>
					</li>
				</ul>
			</div>
		</van-popup>
  </div>
</template>

<script>
import {Dialog,Drawer,} from 'element-ui'

import {Button} from 'vant'
import { Sidebar,SidebarItem,Popup, } from 'vant'
export default {
  name: 'index',
  data () {
    return {
	  clicked:1,
	  direction: 'ltr',
	  drawer: false,
	  goods_list:[],
	  personal_goods_list:[],
	//   activeKey:0,
	  showPop:false,
    }
  },
  components:{
	  [Dialog.name]:Dialog,
	  [Drawer.name]:Drawer,
	  [Button.name]:Button,	
	  [Sidebar.name]:Sidebar,	
	  [SidebarItem.name]:SidebarItem,	
	  [Popup.name]:Popup,	

  },
  methods:{
	//   hendleOpened(){
	// 	  alert("opened");
	//   },
	//   closeDrawer(){
	// 	  this.$refs.draw.closeDrawer();
	//   },
	  getGoods(){
		  this.axios.get('/api/client/recommend/popularityList',{
			  params:{},
		  }).then(res=>{
			  var data = res.data.data;
			  this.goods_list = data.list;
			  console.log(this.goods_list);
		  }).catch(e=>{
			  console.log(e);
		  });
	  },
	  getPersonalGoods(){
		  this.axios.get('/api/client/recommend/personalityExclusiveList',{
			  params:{
				  limit: 10,
				  page: 1,
				  attr: '',
				  keywords:'',
			  },
		  }).then(res=>{
			  var data = res.data.data;
			  this.personal_goods_list = data.list;
			  console.log(this.personal_goods_list);
		  }).catch(e=>{
			  console.log(e);
		  });
	  },
	//   handleClose(done) {
    //     this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {});
	//   },
	changeShowSpe(){
		this.clicked = 1;
		this.getPersonalGoods();
	},
	changeShowPop(){
		this.clicked = 2;
		this.getGoods();
	},
  },
  created(){
	  this.getGoods();
	  this.getPersonalGoods();
  },
}
</script>

<style scoped lang="less">

.container{
	padding:20.55px 20px 0 20px;
	// width:710px;
	.header{
		width:100%;
		height:64px;
		position:relative;
		display:flex;
		justify-content: space-between;
		align-items:center;
		.personal-center{
			// margin:0 auto;
			color:#404040;
			position:relative;
			width:80px;
			height:64px;
			img{
				width:40px;
				height:32px;
				display:block;
				margin:0 auto;
			}
			span{
				padding-top:4px;
				width:80px;
				height:28px;
				line-height:28px;
				font-size:20px;
			}
		}
		// /deep/ .el-drawer__wrapper .el-drawer__container .el-drawer.ltr{
		// 	width:500px;
		// 	.wrap{
		// 		padding:50px 0 0 20px;
		// 		.logo{
		// 			width:300px;
		// 			height:50px;
		// 			background:url('../assets/imgs/精臣红色logo_画板1@2x.png') no-repeat center;
		// 			background-size:cover;
		// 		}
		// 	}
		// }
		
		.search{
			width:440px;
			height:64px;
			position:relative;
			background-color:#f5f5f5;
			// border:none;
			input{
				width:100%;
				height:100%;
				border-radius:32px;
				padding-left:60px;
				font-size:28px;
				outline:none;
				box-sizing:border-box;
			}
			img{
				width:40px;
				height:40px;
				position:absolute;
				left:20px;
				top:50%;
				transform:translateY(-50%);
			}
			.saoyisao{
				width:48px;
				height:48px;
				position:absolute;
				right:26px;
				top:50%;
				transform:translateY(-50%) ;
				.corner1{
					width:11px;
					height:11px;
					border-radius: 6px 0 0 0 ;
					border-left:3px solid #404040;
					border-top:3px solid #404040;
					position:absolute;
					left:7px;
					top:7px;
				}
				.corner2{
					width:11px;
					height:11px;
					border-radius: 0 6px 0 0 ;
					border-right:3px solid #404040;
					border-top:3px solid #404040;
					position:absolute;
					right:7px;
					top:7px;
				}
				.corner3{
					width:11px;
					height:11px;
					border-radius: 0  0 6px 0 ;
					border-right:3px solid #404040;
					border-bottom:3px solid #404040;
					position:absolute;
					right:7px;
					bottom:7px;
				}
				.corner4{
					width:11px;
					height:11px;
					border-radius: 0  0 0 6px ;
					border-left:3px solid #404040;
					border-bottom:3px solid #404040;
					position:absolute;
					left:7px;
					bottom:7px;
				}
				.line{
					width:36px;
					height:3px;
					background:#404040;
					position:absolute;
					left:50%;
					top:50%;
					transform:translate(-50%,-50%);
				}
			}
		}
		.complaint{
			width:48px;
			position:relative;
			img{
				width:48px;
				height:48px;
				display:block;
			}
			span{
				width:40px;
				height:28px;
				line-height:28px;
				font-size:20px;
				margin-top:-4px;
				display:block;
				margin:0 auto;
			}
		}
		.coupon{
			width:48px;
			position:relative;
			img{
				width:48px;
				height:48px;
				display:block;
			}
			span{
				width:40px;
				height:28px;
				line-height:28px;
				font-size:20px;
				margin-top:-4px;
				display:block;
				margin:0 auto;
			}
		}
	}

	/deep/ .wrap{
			padding: 0 0 0 40px;
			.logo{
				margin:160px 0 0 ;
				.logo-img{
					width:380px;
					height:46px;
				}
				.logo-title{
					margin:14px 0 0;
					font-size:24px;
					color:#929292;
				}
			}
			.tel{
				margin-top:60px;
				.telephone{
					color:#595959;
					font-size:34px;
				}
				.download{
					margin:0 0 0 40px;
					width:36px;
					height:36px;
				}
			}
			.membership{
				margin:140px 0 54px 0;
				.member-box{
					margin:0 24px 0 0;
					padding:0 0 0 10px;
					background:#EDF3F9;
					// background:blue;
					width:162px;
					height:44px;
					line-height:44px;
					display:inline-block;
					.member{
						color:#000;
						font-size:26px;
						position:relative;
						&::after{
							content:'';
							width: 0px;
							height: 0px;
							position:absolute;
							top:50%;
							transform:translateY(-50%) ;
							left:120px;
							border-style: solid;
							border-width: 10px 0px 10px 10px;
							border-color: transparent transparent transparent blue;
						}
					}
				}
				.points{
					display: inline-block;
					color:#404040;
					font-size:30px;
					position:relative;
					.number{
						font-size:46px;
						color:#FF7B42;
						position:absolute;
						top:50%;
						transform:translateY(-50%) ;
					}
				}
			}
			.my-list{
				list-style:none;
				margin-left:0;
				.list-item{
					display:flex;
					width:100%;
					height:96px;
					align-items:center;
					position: relative;;
					.item-picture{
						width:46px;
						height:46px;
						margin-right:18px;
					}
					.ctx{
						font-size:30px;
					}
					&::after{
						content:'';
						width:14px;
						height:14px;
						position: absolute;
						right:60px;
						// top:50%;
						// transform:translateY(-50%);
						// // background:url(../assets/imgs/侧滑栏-退出登录.png) no-repeat center;
						// background:url(../assets/imgs/下载.png) no-repeat center;
						border:1px solid #999;
						border-top:none;
						border-left:none;
						transform:rotate(-45deg);
					}
				}
			}
		}

	.content{
		.banner{
			position:relative;
			width:100%;
			height:210px;
			margin:20px 0 auto;
			// padding-top:20px;
			opacity:1;
			border-radius: 15px;
			background:url('../assets/imgs/bg.png') no-repeat center;
			background-size:cover;
			// border:1px solid red;
		}
		.item-list{
			display:flex;
			width:100%;
			height:160px;
			margin:15px auto;
			justify-content: space-around;
			.item{
				display:flex;
				align-items: center;
			}
			.item .item-img{
				width:100px;
				height:100px;
				margin-right:10px;
			}
			.item .item-text{
				font-size:25px;
			}
		}
		.product{
			width:730px;
			.title{
				display:flex;
				justify-content: space-around;
				font-size:30px;
				color:#999;
				margin-bottom:20px;
				.show{
					font-weight:bold;
					color:#000;
				}
			}
			.goods-list-per{
				width:100%;
				display:flex;
				flex-wrap: wrap;
				.goods-item{
					width:365px;
					height:604px;
					// margin-right:17px;
					.img-box{
						.goods-img{
							width:337px;
							height:337px;
						}
					}
					.title-box{
						width:100%;
						height:80px;
						font-size:28px;
						margin:15px 0 5px;
						padding:0 15px;
						.custom-made{
							width:60px;
							height:28px;
							font-size:20px;
							background: #537FB7;
							color:#fff;
							margin:0 10px 0 0;
							padding:0 10px;
						}
					}
					.sute-machine{
						width:100%;
						height:44px;
						padding:0 15px;
						color:#787878;
						font-size:22px;
					}
					.detail-box{
						width:100%;
						height:30px;
						margin:0 0 10px;
						padding:0 13px;
						color:#999;
						font-size:22px;
						.industry{
							font-size:20px;
							background:#E0ECFD;
							margin:0 0 0 16px;
							padding:0 6px;
							color:#7598c5;
						}
					}
					.price-box{
						width:100%;
						height:64px;
						padding:10px;
						color:#fb4b42;
						font-size:34px;
						.origin-price{
							color:#828282;
							font-size:20px;
							margin: 0 0 0 5px;
							position:relative;
							.line-through{
								width:100%;
								height:2px;
								background:#999;
								position:absolute;
								top:60%;
								left:0;
							}
						}
					}
				}
			}
			.goods-list-pop{
				width:100%;
				display:flex;
				flex-wrap: wrap;
				.goods-item{
					width:365px;
					height:604px;
					// margin-right:17px;
					.img-box{
						.goods-img{
							width:337px;
							height:337px;
						}
					}
					.title-box{
						width:100%;
						height:80px;
						font-size:28px;
						margin:15px 0 5px;
						padding:0 15px;
						.custom-made{
							width:60px;
							height:28px;
							font-size:20px;
							background: #537FB7;
							color:#fff;
							margin:0 10px 0 0;
							padding:0 10px;
						}
					}
					.sute-machine{
						width:100%;
						height:44px;
						padding:0 15px;
						color:#787878;
						font-size:22px;
					}
					.detail-box{
						width:100%;
						height:30px;
						margin:0 0 10px;
						padding:0 13px;
						color:#999;
						font-size:22px;
						.industry{
							font-size:20px;
							background:#E0ECFD;
							margin:0 0 0 16px;
							padding:0 6px;
							color:#7598c5;
						}
					}
					.price-box{
						width:100%;
						height:64px;
						padding:10px;
						color:#fb4b42;
						font-size:34px;
						.origin-price{
							color:#828282;
							font-size:20px;
							margin: 0 0 0 5px;
							position:relative;
							.line-through{
								width:100%;
								height:2px;
								background:#999;
								position:absolute;
								top:60%;
								left:0;
							}
						}
					}
				}
			}
		}
	}
}
</style>
