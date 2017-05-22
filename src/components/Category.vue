<template>
	<div id="Category">
		<CateHeader></CateHeader>
		<CateList></CateList>
	</div>
</template>
<script>
	import CateHeader from './Categorys/CateHeader.vue'
	import CateList from './Categorys/CateList.vue'
	
	export default{
		components:{
			CateHeader,
			CateList
		}
	}
</script>
<style>
	@import'../assets/css/good.css'

</style>