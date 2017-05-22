<template>
	<div class="container-fluid">
			<div class="row">
			    <div class="col-xs-12 listUl_box bg-f">
			      	<ul class="list_ul">
				        <li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/indexUl_03.png"  class="pic3"/>
				          <div class="li-txt">热销排行</div>
				          </a></li>
				        <li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/indexUl_05.png"  class="pic3"/>
				          <div class="li-txt">免费试吃</div>
				          </a></li>
				        <li>
							<router-link to="/home/couple">
								<img src="https://zongcong.github.io/VueApp/src/assets/images/indexUl_07.png"  class="pic3"/>
				          		<div class="li-txt">新人有礼</div>
							</router-link>
				        </li>
				        <li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/indexUl_09.png"  class="pic3"/>
				          <div class="li-txt">物流查询</div>
				          </a></li>
			      	</ul>
			    </div>
			    <Active></Active>
			</div>
	</div>
</template>
<script>
	import Active from './Active.vue'
	export default{
		components:{
			Active
		},
		
	}
</script>