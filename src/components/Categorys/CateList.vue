<template>
	<div class="pb60">
		<div class="container-fluid">
			<div class="row">
		  		<div class=" col-xs-12 nav-cate p0">
				    <ul class="fl-nav">
				      <li v-for="item in itemList"><a @click="cateClick" href="javascript:;">{{item}}</a></li>
				    </ul>
		  		</div>
				<div class="col-xs-12 cate-list">
				    <div class="cate_main">
				      	<div class="cate_title">蟹类</div>
				      	<ul class="fr-ul">
					        <li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/flo2.jpg" class="pic2 li-img1" />
					          	<div class="frul-txt ellipsis">哈密瓜</div>
					          	</a></li>
					        <li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/detail_03.jpg" class="pic2 li-img1" />
					          	<div class="frul-txt ellipsis">哈密瓜</div>
					          	</a></li>
					        <li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/good_03.jpg" class="pic2 li-img1" />
					          	<div class="frul-txt ellipsis">哈密瓜</div>
					          	</a></li>
					        <li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/detail_03.jpg" class="pic2 li-img1" />
					          	<div class="frul-txt ellipsis">哈密瓜</div>
					         	 </a></li>
					        <li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/good_03.jpg" class="pic2 li-img1" />
					          	<div class="frul-txt ellipsis">哈密瓜</div>
					          	</a></li>
				      	</ul>
				      	<div class="clr"></div>
				    </div>
				    <div class="cate_main">
				      	<div class="cate_title">蟹类</div>
				      	<ul class="fr-ul">
				        	<li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/flo2.jpg" class="pic2 li-img1" />
				          	<div class="frul-txt ellipsis">哈密瓜</div>
				          	</a></li>
				        	<li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/detail_03.jpg" class="pic2 li-img1" />
				          	<div class="frul-txt ellipsis">哈密瓜</div>
				          	</a></li>
				        	<li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/good_03.jpg" class="pic2 li-img1" />
				          	<div class="frul-txt ellipsis">哈密瓜</div>
				          	</a></li>
				      	</ul>
				      	<div class="clr"></div>
				    </div>
				    <div class="cate_main">
				      	<div class="cate_title">蟹类</div>
				      	<ul class="fr-ul">
				        	<li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/flo2.jpg" class="pic2 li-img1" />
				          		<div class="frul-txt ellipsis">哈密瓜</div>
				          	</a></li>
				        	<li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/detail_03.jpg" class="pic2 li-img1" />
				          		<div class="frul-txt ellipsis">哈密瓜</div>
				          	</a></li>
				        	<li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/good_03.jpg" class="pic2 li-img1" />
				          		<div class="frul-txt ellipsis">哈密瓜</div>
				          	</a></li>
				      	</ul>
				      	<div class="clr"></div>
				    </div>
				    <div class="cate_main">
				      	<div class="cate_title">蟹类</div>
					      	<ul class="fr-ul">
					        	<li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/flo2.jpg" class="pic2 li-img1" />
					          		<div class="frul-txt ellipsis">哈密瓜</div>
					          	</a></li>
					        	<li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/detail_03.jpg" class="pic2 li-img1" />
					          		<div class="frul-txt ellipsis">哈密瓜</div>
					          	</a></li>
					        	<li><a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/good_03.jpg" class="pic2 li-img1" />
					          		<div class="frul-txt ellipsis">哈密瓜</div>
					          	</a></li>
					      	</ul>
				      	<div class="clr"></div>
				    </div>
		  		</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				itemList: [
					'热门类生鲜',
					'国产鲜果',
					'进口鲜果',
					'精选水产',
					'粮油副食'
					],
			}
		},
		mounted(){
				var oUl=document.getElementsByClassName('fl-nav')[0];
				var aA=oUl.getElementsByTagName('a');
				aA[0].className='nav-on';//默认选中的样式
		},
		methods:{
			cateClick(event){//点击切换样式
				var oUl=document.getElementsByClassName('fl-nav')[0];
				var aA=oUl.getElementsByTagName('a');
				var length=aA.length;
				for(var i=0;i<length;i++){
					aA[i].className='';					
				}
				//console.log(event.currentTarget.innerHTML)	
				event.currentTarget.className='nav-on';
			},
		}
	}
</script>
<style>
	.cate-list{
		background-color: #fff;
	}
	.nav-cate{
		z-index: 1;
	}
</style>