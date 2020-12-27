<template>
  <div class="container">
    <div class="header">
      <div class="search">
        <input type="text" placeholder="商品名称 条码 规格 行业" />
          <img src="@/assets/imgs/搜索.png" alt="">
        <div class="saoyisao">
          <div class="corner1"></div>
          <div class="corner2"></div>
          <div class="corner3"></div>
          <div class="corner4"></div>
          <div class="line"></div>
        </div>
		  </div>
      <div class="cancel"><span>取消</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="less">
.container{
  padding:20.55px 20px 0 20px;
  .header{
    width:100%;
		height:64px;
		position:relative;
		display:flex;
		justify-content: space-between;
    align-items:center;
    .search{
			width:600px;
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
        border:none;
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
    .cancel{
      position:absolute;
      font-size:30px;
      left:635px;
    }
  }
}
</style>
