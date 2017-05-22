<template>
	<div id="details">
				<div class="container-fluid">
		  <div class="row pr">
		    <div class="col-xs-12 p0 bd-e page">
		    	<mt-swipe :auto="4000">
					 <mt-swipe-item><a href="#"><img src="https://zongcong.github.io/VueApp//src/assets/images/try_02.jpg" class="pic2"/></a></mt-swipe-item>
					 <mt-swipe-item><a href="#"><img src="https://zongcong.github.io/VueApp//src/assets/images/try_02.jpg" class="pic2" /></a></mt-swipe-item>
					 <mt-swipe-item><a href="#"><img src="https://zongcong.github.io/VueApp//src/assets/images/try_02.jpg" class="pic2"/></a></mt-swipe-item>
				</mt-swipe>
		    </div>
		    <div class="back" @click="this.goBack"><img src="https://zongcong.github.io/VueApp//src/assets/images/back.png" class="pic1" /></div>
		  </div>
		</div>
		<div class="pb60">
		  <div class="container-fluid">
		    <div class="row">
		      <div class="col-xs-12 try_title mt10">
		        <div class=" d_txt">三号柜oceanfamily 鲜虾仁41/50 200g</div>
		        <div class="try_price mt5">
		          <div class="fl"> <span class="gray-9">价格：</span> </div>
		          <div class="fl pr">
		            <p><span class="f16 green">￥299.00</span></p>
		            <p><span class="old">￥199.00</span></p>
		          </div>
		            <div v-show="details" class="c_down fl">剩余01小时23分24秒</div>
		          <div class="clr"></div>
		        </div>
		        <div class="try_num mt5"><span class="gray-9">品牌：</span>三号柜</div>
		        <div class="try_num mt5"><span class="gray-9">产地：</span>美国</div>
		        <div class="try_num mt5"><span class="gray-9">储藏方式：</span>冷冻</div>
		      </div>
		      <div class="col-xs-12 bg-f p10 mt10 mb10">
		        <div class="fl mt10">
		          <div class="fl fl_txt">数量：</div>
		          <div class="udbt">
		            <div class="downbt" @click="decrement"> -</div>
		            <input type="text" :value="count" class="notex" @input="check" />
		            <div class="upbt" @click="increment"> +</div>
		            <div class="clr"></div>
		          </div>
		        </div>
		        <div class="fr share_btn gray-9"> <img src="https://zongcong.github.io/VueApp//src/assets/images/share.png" class="pic1" />
		          <div class="share_txt">分享</div>
		        </div>
		        <div class="clr"></div>
		      </div>
		    </div>
		    <div class="row">
		      <div class="col-xs-12 bg-f bt-e mt10">
		        <ul class="try_ul">
		          <li @click="tabShowLeft"><a href="javascript:" :class="{ on : showShop }">商品详情</a>
		            <div class="link2"></div>
		          </li>
		          <li @click="tabShowRight"><a href="javascript:" :class="{ on : showCom }">商品评论</a></li>
		        </ul>
		        <div class="clr"></div>
		      </div>
		      <div class="col-xs-12 p0" >
		        <div v-show="showShop" id="case1"><img src="https://zongcong.github.io/VueApp//src/assets/images/trydetail_02.jpg" /></div>
		      </div>
		      <div class="col-xs-12 p0" >
		        <div v-show="showCom" id="case2" >
		          <div class=" bg-f p10 bd-e">
		            <div class="fl gray-9">综合评分：</div>
		            <div class="start1 fr" > <span class="on"></span> <span class="on"></span> <span class="on"></span> <span class="on"></span> </div>
		            <div class="clr"></div>
		          </div>
		          <div class="mt10 bt-e">
		            <div class="p10 bg-f bd-e ">
		              <div class="fl repot_fl"><img src="https://zongcong.github.io/VueApp//src/assets/images/tw.jpg" class="pic4" /></div>
		              <div class="repot_fr">
		                <div class="report_name">
		                  <div class="fl gray-9">乡村F4</div>
		                  <div class="start1 fr" > <span class="on"></span> <span class="on"></span> <span class="on"></span> </div>
		                  <div class="clr"></div>
		                </div>
		                <div class="report_txt"> 水果很新鲜，很好吃，下次还会再，卖家服务非常好，水果很新鲜，很好吃，下次还会再来，卖家服务非常好… </div>
		              </div>
		              <div class="clr"></div>
		            </div>
		            <div class="p10 bg-f bd-e ">
		              <div class="fl repot_fl"><img src="https://zongcong.github.io/VueApp//src/assets/images/tw.jpg" class="pic4" /></div>
		              <div class="repot_fr">
		                <div class="report_name">
		                  <div class="fl gray-9">乡村F4</div>
		                  <div class="start1 fr" > <span class="on"></span> <span class="on"></span> <span class="on"></span><span class="on"></span> </div>
		                  <div class="clr"></div>
		                </div>
		                <div class="report_txt"> 水果很新鲜，很好吃，下次还会再，卖家服务非常好… </div>
		              </div>
		              <div class="clr"></div>
		            </div>
		            <div class=" p10 bg-f bd-e ">
		              <div class="fl repot_fl"><img src="https://zongcong.github.io/VueApp//src/assets/images/tw.jpg" class="pic4" /></div>
		              <div class="repot_fr">
		                <div class="report_name">
		                  <div class="fl gray-9">乡村F4</div>
		                  <div class="start1 fr" > <span class="on"></span> <span class="on"></span> <span class="on"></span><span class="on"></span> </div>
		                  <div class="clr"></div>
		                </div>
		                <div class="report_txt"> 水果很新鲜，很好吃，下次还会再，卖家服务非常好… </div>
		                <div class="report_img">
		                  <div class="fl reimg_li"><img src="https://zongcong.github.io/VueApp//src/assets/images/good_06.jpg"/></div>
		                  <div class="fl reimg_li"><img src="/src/assets/images/good_06.jpg" /></div>
		                  <div class="fl reimg_li"><img src="https://zongcong.github.io/VueApp//src/assets/images/good_06.jpg" /></div>
		                  <div class="fl reimg_li"><img src="https://zongcong.github.io/VueApp//src/assets/images/good_06.jpg" /></div>
		                </div>
		              </div>
		              <div class="clr"></div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		<div class="container-fluid">
		  <div class="row">
		    <div class="col-xs-12 p0 g-foot">
		      	<div class="f-fl2 fl" @click="collection"> 
	      			<i></i>
	        		<div class="f-txt gray-9">收藏</div>	
		        </div>
		      	<div class="f-fl2 fl"> 
		      	 	<img src="/src/assets/images/cart1.png" class="pic1"/>
		        	<div class="f-txt gray-9">购物车</div>
		        	
		        </div>
		      <div class="f-fl3 fl"> <a href="">加入购物车</a></div>
		      <div class="f-fl4 fl"><a href="">立即购买</a></div>
		      <div class="clr"></div>
		    </div>
		  </div>
		</div>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
		computed:mapGetters([
			'count',
			'showShop',
			'showCom',
			'details'
			]),
		methods:{
			collection(event){
				if(event.currentTarget.firstChild.className==''){
					event.currentTarget.firstChild.className='on';
				}else{
					event.currentTarget.firstChild.className='';
				}
			},
			increment(){
				this.$store.dispatch('increment');//购买数量增加
			},
			decrement(){
				this.$store.dispatch('decrement');//购买数量减少
			},
			check(){
				this.$store.dispatch('check');//购买数量不能小于0
			},
			tabShowLeft(){
				this.$store.dispatch('tabShowLeft');//商品详情
			},
			tabShowRight(){
				this.$store.dispatch('tabShowRight');//用户评价
			}
		}
	}
</script>
<style scoped>
	#case1 img{
		width: 100%;
	}
	.f-fl2 i{
		display: block;
		width: 24px;
		height: 25px;
		margin: 0 auto;
		background: url(/src/assets/images/col-icon.png);
		background-size: 100%;
	}
	.f-fl2 .on{
		background-position: 0px -38px;
	}
	.page{
		height: 4rem;
	}
	.back{
		position: fixed;
	}
</style>