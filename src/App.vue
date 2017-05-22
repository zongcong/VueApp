<template>
	<div id="app">
		<keep-alive>
		 	<transition name="fade">
				<router-view></router-view>
			</transition>
		</keep-alive>
		<Foot v-show="hideTab"></Foot>
	</div>
</template>
<script>
	import Foot from './components/Foot.vue'
	import {mapGetters,mapActions} from 'vuex'
		export default{
			computed:mapGetters([
				'hideTab'
				]),
			watch:{
				$route(to,from){
					if(to.path=='/home/limit/details'){//判断商品详情的抢购图标出现
						this.$store.dispatch('showDetails');
					}
					if(to.path !='/home' && to.path !='/cart' && to.path !='/category' && to.path !='/user'){
						this.$store.dispatch('hideTable');//隐藏底部tab
					}else{
						this.$store.dispatch('showTable');//显示底部tab
					}
				}
			},
			methods:{
				goBack(){
					window.history.go(-1);
				}
			},
			components:{
				Foot,
			},
	}
</script>
<style>
	.icon{
		width: 20px;
		height: 20px;
		font-size: 20px;
		font-weight: bold;
		font-family: simsun;
		color: #79c34b;
	}
	.icon1{
		width: 20px;
		padding-left: 10px;
		padding-top: 10px;
		line-height: 20px;
		font-family: simsun;
		font-style: normal;
		font-size: 18px;
		font-weight: bold;
		color: #79c34b;
	}
	.icon-lt{
		display: inline-block;
		width: 18px;
		font-family:simsun;
		font-style: normal;
		text-align: center;
		font-weight: bold;
	}
	.fade-enter-active{
	  	transition: opacity .5s
	}
	.fade-enter{
	  	opacity: 0
	}
</style>