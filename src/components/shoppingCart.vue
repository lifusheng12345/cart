<template>
  <div class="container">
    <div class="header">
		<div class="back"></div>
		<div class="car">购物车</div>
		<div class="edit">编辑</div>
	</div>
	<div class="coupon">
		<div class="left">
			<div class="coupon-item">优惠券</div>
			<div class="coupon-detail">满59减10元，满199减25元</div>
		</div>
		<div class="pickup"><span class="txt">领券</span></div>
	</div>
	<div class="blank"></div>
    <div class="main">
		<p class="title">耗材/硬件&nbsp;&nbsp;&nbsp;&nbsp;共2件商品</p>
		<ul class="goods-list">
			<li class="list-item">
				<div class="top">
					<div class="check">
						<input type="checkbox" v-model="value1" @click="changeValue1">
					</div>
					<div class="pic">
						<img class="img" src="@/assets/imgs/耗材@2x.png" alt="">
					</div>
					<div class="content">
						<p class="headline">标题只显示一行的标题长度，超过省...</p>
						<p class="size">云彩虹; 25*30mm</p>
						<p class="discount">九五折</p>
						<p class="price"><span>￥18.00</span><span class="origin">￥25</span></p>
					</div>
				</div>
				<div class="count">
					<div class="similar">找相似</div>
					<div class="number">
						<button class="minus" @click="minus1">-</button><input class="figure" v-model="number1" type="text"><button class="plus" @click="plus1">+</button>
					</div>
				</div>
			</li>
			<li class="list-item">
				<div class="top">
					<div class="check">
						<input type="checkbox" id="input"  v-model="value2" @click="changeValue2"/>
						<label  for="input"></label >
					</div>
					<div class="pic">
						<img class="img" src="@/assets/imgs/硬件b21@2x.png" alt="">
					</div>
					<div class="content">
						<p class="headline">标题只显示一行的标题长度，超过省...</p>
						<p class="size">云彩虹; 25*30mm</p>
						<p class="discount">九五折</p>
						<p class="price"><span>￥18.00</span><span>￥25</span></p>
					</div>
				</div>
				<div class="count">
					<div class="similar">找相似</div>
					<div class="number">
						<button class="minus" @click="minus2">-</button><input class="figure" v-model="number2" type="text"><button class="plus" @click="plus2">+</button>
					</div>
				</div>
			</li>
			<li class="list-item">
				<div class="top">
					<div class="check">
						<input type="checkbox" id="input"  v-model="value2" @click="changeValue2"/>
						<label  for="input"></label >
					</div>
					<div class="pic">
						<img class="img" src="@/assets/imgs/硬件b21@2x.png" alt="">
					</div>
					<div class="content">
						<p class="headline">标题只显示一行的标题长度，超过省...</p>
						<p class="size">云彩虹; 25*30mm</p>
						<p class="discount">九五折</p>
						<p class="price"><span>￥18.00</span><span>￥25</span></p>
					</div>
				</div>
				<div class="count">
					<div class="similar">找相似</div>
					<div class="number">
						<button class="minus" @click="minus2">-</button><input class="figure" v-model="number2" type="text"><button class="plus" @click="plus2">+</button>
					</div>
				</div>
			</li>
			<li class="list-item">
				<div class="top">
					<div class="check">
						<input class="input" type="checkbox"  v-model="value3" @click="changeValue3">
					</div>
					<div class="pic">
						<img class="img" src="@/assets/imgs/软件@2x.png" alt="">
					</div>
					<div class="content">
						<p class="headline">标题只显示一行的标题长度，超过省...</p>
						<p class="size">云彩虹; 25*30mm</p>
						<p class="discount">九五折</p>
						<p class="price"><span>￥18.00</span><span>￥25</span></p>
					</div>
				</div>
				<div class="count">
					<div class="similar">找相似</div>
					<div class="number">
						<button class="minus" @click="minus3">-</button><input class="figure" v-model="number3" type="text"><button class="plus"  @click="plus3">+</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
	<!-- <input type="checkbox" value="fha" style="{'border':1px solid red;}"> -->
	<!-- <div class="bought"></div> -->
    <div class="footer">
		<div class="check-all">
			<input class="ipt" type="checkbox" @click="chooseAll" v-model="value">
			<span class="chooseAll">全选</span>
		</div>
		<div class="total">
			<div class="total-price">优惠后合计￥{{ this.price }}</div>
			<div class="middle">
				<div class="totaled">共优惠减免￥5565.54</div>
				<div class="total-detail">优惠明细<span class="more"></span></div>
			</div>
		</div>
		<div class="pay" @click="goPay">去结算</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      number1:0,
      number2:0,
	  number3:0,
	  value1:false,
	  value2:false,
	  value3:false,
	  value:false,
	  count:0,
	  price:0,
    }
  },
  methods:{
	  minus1(){
		  if(this.number1 == 0){
			  return;
		  }else{
			  this.number1--;
		  }
		  this.count = this.number1 + this.number2 + this.number3;
		  if(this.value1){
			  this.price = this.count * 18;
		  }
	  },
	  plus1(){
		  this.number1++;
		  this.count = this.number1 + this.number2 + this.number3;
		  if(this.value1){
			  this.price = this.count * 18;
		  }
	  },
	  minus2(){
		  if(this.number2 == 0){
			  return;
		  }else{
			  this.number2--;
		  }
		  this.count = this.number1 + this.number2 + this.number3;
		  if(this.value2){
			  this.price = this.count * 18;
		  }
	  },
	  plus2(){
		  this.number2++;
		  this.count = this.number1 + this.number2 + this.number3;
		  if(this.value2){
			  this.price = this.count * 18;
		  }
	  },
	  minus3(){
		  if(this.number3 == 0){
			  return;
		  }else{
			  this.number3--;
		  }
		  this.count = this.number1 + this.number2 + this.number3;
		  if(this.value3){
			  this.price = this.count * 18;
		  }
	  },
	  plus3(){
		  this.number3++;
		  this.count = this.number1 + this.number2 + this.number3;
		  if(this.value3){
			  this.price = this.count * 18;
		  }
	  },
	  changeValue1(){
		  if(this.value1 == false){
			  this.value1 = true;
			  this.price += this.number1 * 18;
		  }else{
			  this.value1 = false;
			  this.price -= this.number1 * 18;
		  }
		  this.changeEvery();
	  },
	  changeValue2(){
		  if(this.value2 == false){
			  this.value2 = true;
			  this.price += this.number2 * 18;
		  }else{
			  this.value2 = false;
			  this.price -= this.number2 * 18;
		  }
		  this.changeEvery();
	  },
	  changeValue3(){
		  if(this.value3 == false){
			  this.value3 = true;
			  this.price += this.number3 * 18;
		  }else{
			  this.value3 = false;
			  this.price -= this.number3 * 18;
		  }
		  this.changeEvery();
	  },
	  chooseAll(){
		  if(this.value == false){
			  this.value = true;
			  this.price = this.count * 18;
		  }else{
			  this.value = false;
			  this.price = 0;
		  }
		  this.value1 = this.value;
		  this.value2 = this.value;
		  this.value3 = this.value;
	  },
	changeEvery(){
		if(this.value1 && this.value2 && this.value3){
			this.value =true;
		}else{
			this.value = false;
		}
	},
	goPay(){
		// console.log(this.count)
		this.price = this.count * 18;
		// console.log(this.price)
	}
  },
}
</script>

<style scoped lang="less">
.container{
	height:100%;
	display:flex;
	flex-direction: column;
	padding:0 20px 0;
	overflow: hidden;
	// position:relative;
	.header{
		width:100%;
		height:88px;
		display: flex;
		justify-content: space-between;
		align-items:center;
		// position:fixed;
		// top:0;
		// left:0;
		.back{
			width:30px;
			height:30px;
			border:1px solid black;
			border-right:none;
			border-bottom:none;
			transform:rotate(-45deg);
		}
		.car{
			font-size:32px;
		}
		.edit{
			font-size:30px;
		}
	}
	.coupon{
		display: flex;
		justify-content: space-between;
		align-items: center;
		// position:fixed;
		// height:40px;
		// top:88px;
		// left:0;
		.left{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.coupon-item{
				width:82px;
				height:34px;
				border:1px solid #595959;
				font-size:22px;
				line-height:34px;
				text-align:center;
			}
			.coupon-detail{
				margin-left:18px;
				height:37px;
				width: 324px;
				font-size: 26px;
				font-weight: 600;
				line-height: 37px;
				color: #FB4B42;
			}
		}
		.pickup{
			width:88px;
			height:42px;
			border-radius: 21px;
			background: #FB4B42;
			display: flex;
			justify-content: center;
			align-items: center;
			.txt{
				width: 55px;
				height: 37px;
				font-size: 26px;
				font-weight: 600;
				line-height: 37px;
				color: #FFFFFF;
			}
		}
	}
	// .blank{
	// 	height:128px;
	// 	width:100%;
	// }
	.main{
		flex:1;
		overflow-y: scroll;
		.title{
			font-size: 40px;
		}
		.goods-list{
			.list-item{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin:20px 0;
				.top{
					display: flex;
					justify-content: space-between;
					margin:20px 0;
					.check{
						// border-radius: 50%;
						// background: red;
						// visibility: hidden;
						display:flex;
						align-items: center;
						.input{
							background: green;
							border:1px solid red;
							border-radius: 50%;
						}

					}
					// .check+label{
					// 	background: red;
					// 	display: block;
					// 	width: 20px;
					// 	height: 20px;
					// 	cursor: pointer;
					// 	position: absolute;
					// 	top: 2px;
					// 	left: 15px;
					// }
					.pic{
						.img{
							width:200px;
							height:200px;
						}
					}
					.content{
						display:flex;
						flex-direction: column;
						justify-content: space-around;
					}
				}
				.count{
					display:flex;
					justify-content: flex-end;
					.similar{
						font-size:25px;
						margin-right:150px;
						// line-height:30px;
						display:flex;
						align-items: center;
					}
					.number{
						.minus{
							height:100%;
						}
						.figure{
							width:50px;
							height:30px;
							text-align: center;
						}
						.plus{
							height:100%;
						}
					}
				}
			}
		}
	}
	.footer{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.check-all{
			.ipt{
				border-radius: 50%;
			}
			.chooseAll{
				margin-left:20px;
			}
		}
		.total{
			display: flex;
			flex-direction: column;
			.total-price{
				font-weight:bold;
				// color:red;
			}
			.middle{
				display: flex;
				.totaled{
					color:red;
				}
				.total-detail{
					color:orange;
					position:relative;
					// .more{

					// }
					&::after{
						content:'';
						width:10px;
						height:10px;
						// background:green;
						border:1px solid red;
						border-right:none;
						border-bottom:none;
						transform: rotate(45deg);
						position:absolute;
						top:5px;
						right:-20px;
					}
				}
			}
		}
		.pay{
			background:red;
			padding:10px;
			border-radius:20px;
			color:#fff;
		}
	}
}
</style>
