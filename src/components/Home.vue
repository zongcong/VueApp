<template>
	<div id="home">
		<Search></Search>
		<!--轮播图 -->
		<Swiper></Swiper>
		<Options></Options>
		<List></List>
	</div>
</template>
<script>
	import Search from './Homes/Search.vue'
	import Swiper from './Homes/Swiper.vue'
	import Options from './Homes/Options.vue'
	import List from './Homes/List.vue'
	
	export default{
		components:{
			Search,
			Swiper,
			Options,
			List
		},
		methods:{
			goBack(){
				window.history.go(-1);
			}
		}
	}
</script>
<style>
	.page-swipe .mint-swipe {
		   	height: 2.5rem;
		    color: #fff;
		    font-size: 30px;
		    text-align: center;
	}
	@import '../assets/css/index.css'
</style>