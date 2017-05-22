<template>
	<div id="cart">
		<div v-show="cart">
			<div class=" pb120">
				<div class="container-fluid">
				  	<div class="row">
				  		<div v-for="item in cartData" class="col-xs-12 cart_detail" >
				  			<div class="cart_list">
				  				<router-link :to="'/cart/details/'+item.id">
				  					<div class="cart_list_fl fl">
				  						<img :src="item.img" class="pic4" />
				  					</div>
					        		<p class="cart_p pl10">{{item.title}}</p>
				  				</router-link>
					        	
					        	<div class="cart_list_fr">
						          	<div class="cart_price"> 
						          		<span class="f16 green">￥{{item.priceNew}}</span>
						          		<span class="old">￥{{item.priceOlder}}</span>
						          	</div>
						          	<div class="mt5">
						            	<div class="fl">
							              	<div class="udbt">
							                	<div class="downbt" @click="redu"> -</div>
							                	<input type="text" :value="item.num" class="notex" />
							                	<div class="upbt" @click="add"> +</div>
							              	</div>
						            	</div>
						            	<div class="fr del-cart"> <img :src="item.delicon" class="pic1" /> </div>
						          	</div>
					        	</div>
					        	<div class="clr"></div>
					      	</div>
				      		<i></i>
				  		</div>
				   	</div>
				 	<div class="row">
				   		<div class="col-xs-12 p10 bg-f bd-e">
					    	<div class="fl mt5">满300包邮</div>
					    	<div class="fr single"><a href="">去凑单</a></div>
				    		<div class="clr"></div>
				   		</div>
				  	</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="row">
				    <div class="col-xs-12 float_sum">
				      	<div class="col-xs-9 sum_fl">
					        <p class="f16">合计： <span class="f16 green">￥299.00</span><span class="old">￥199.00</span> </p>
					        <p class="gray-9">(共2件,不含运费)</p>
				      	</div>
				      	<div class="col-xs-3 sun_fr"><a href="#">结算(2)</a></div>
				    </div>
				</div>
			</div>
			<div class="del_cover">
			  	<div class="cbg"></div>
				  	<div class="c_txt">
				    	<div class="ptip">确认删除</div>
				    	<p>是否删除选中的商品？</p>
					    <div class="btn_ban">
						    <div class="cancel_ban fl">取消</div>
						    <div class="csure_btn fr">确定</div>
						    <div class="clr"></div>
					    </div>
				 	</div>
			</div>
		</div>
		<div v-show="cartNone">
			<div class="container-fluid">
		 		<div class="row">
		  			<div class="col-xs-12 center mt60">
			    		<img src="https://zongcong.github.io/VueApp/src/assets/images/cart_empty_03.png" class="pic_empty" />
			    		<div class="empty_txt gray-6">您的购物车空空如也，<a href="">去逛逛</a></div>
		  			</div>
		 		</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
		data(){
			return{
				cartData:{},
			}
		},
		mounted(){
			this.fetchData();
		},
		computed:mapGetters([
			'cart',
			'cartNone',
			'count'
		]),
		methods:{
			fetchData(){
				const _this=this;
				this.$http.get('G:/vueproject/shop-app/src/data/data.json').then(function(res){
					_this.cartData=res.data;
					//console.log(_this.cartData);
					if(res.data==''){
						_this.$store.dispatch('hideCart');
					}else{
						_this.$store.dispatch('showCart');
					}
				},function(err){
					console.log(err);
				});
			},
			add(event){
				event.currentTarget.previousSibling.previousSibling.value++;//购买数量增加
			},
			redu(){
				var val=event.target.nextSibling.nextSibling.value;
				if(val>1){
					event.target.nextSibling.nextSibling.value--;//购买数量减少
				}	
			},
		}
	}
	
</script>
<style>
	@import '../assets/css/user.css'
</style>