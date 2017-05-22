<template>
	<div id="List">
		<div class="pb60">
		  	<div class="container-fluid">
			    <div class="row">
			      	<div class="col-xs-12 mt10 pl10 pr10">
				        <div class="floor bg-f">
				          <div class="fl flo_fl flo_col1"><i class="floi_01"></i> 美食大本营 </div>
				          <div class="fr flo_fr"><a href="">更多></a></div>
				          <div class="clr"></div>
				        </div>
			        	<a href=""> <img src="https://zongcong.github.io/VueApp/src/assets/images/ban_03.jpg" class="pic2" /></a> 
			       	</div>
			      	<div class="col-xs-12 mt10 pl10 pr10" v-for="item in showList">
  					        <div class="floor bg-f">
  								<div class="fl flo_fl flo_col2"> <i class="floi_02"></i> {{item.title}} </div>
  								<div class="fr flo_fr"><a href="">更多></a></div>
  								<div class="clr"></div>
  					        </div>
  					        <div class="flo_main">
  					            <div class="main_fl fl">
  					            	<div class="bf_f">
										<router-link :to="'home/details/'+item.id">
											<img :src="item.srcLeft" class="pic2" />
										</router-link>
  					            	</div>
  					            </div>
  					          	<div class="main_fr fl">
  						            <div class="flo_img bd_f">
										<router-link :to="'home/details/'+item.id">
											<img :src="item.srcRightTop" class="pic4"/>
										</router-link>
  						            </div>
  						            <div class=" flo_img">
	  						            <router-link :to="'home/details/'+item.id">
											<img :src="item.srcRightBottom" class="pic4"/>
										</router-link>
									</div>
  					          	</div>
  					          	<div class="clr"></div>
  					        </div>
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
				showList: [{
					'id': 1,
					'title': '花果山',
					'srcLeft': 'https://zongcong.github.io/VueApp/src/assets/images/flo_06.jpg',
					'srcRightTop': 'https://zongcong.github.io/VueApp/src/assets/images/flo_08.jpg',
					'srcRightBottom': 'https://zongcong.github.io/VueApp/src/assets/images/flo_10.jpg'
				}, {
					'id': 2,
					'title': '水帘洞',
					'srcLeft': 'https://zongcong.github.io/VueApp/src/assets/images/flo2_03.jpg',
					'srcRightTop': 'https://zongcong.github.io/VueApp/src/assets/images/flo2_05.jpg',
					'srcRightBottom': 'https://zongcong.github.io/VueApp/src/assets/images/flo2_08.jpg'
				}, {
					'id': 3,
					'title': '有机园',
					'srcLeft': 'https://zongcong.github.io/VueApp/src/assets/images/flo3_03.jpg',
					'srcRightTop': 'https://zongcong.github.io/VueApp/src/assets/images/flo3_06.jpg',
					'srcRightBottom': 'https://zongcong.github.io/VueApp/src/assets/images/flo3_09.jpg'
				}, {
					'id': 4,
					'title': '肉禽蛋',
					'srcLeft': 'https://zongcong.github.io/VueApp/src/assets/images/flo4_03.jpg',
					'srcRightTop': 'https://zongcong.github.io/VueApp/src/assets/images/flo4_05.jpg',
					'srcRightBottom': 'https://zongcong.github.io/VueApp/src/assets/images/flo4_08.jpg'
				}, {
					'id': 5,
					'title': '宅人购',
					'srcLeft': 'https://zongcong.github.io/VueApp/src/assets/images/flo5_03.jpg',
					'srcRightTop': 'https://zongcong.github.io/VueApp/src/assets/images/flo5_05.jpg',
					'srcRightBottom': 'https://zongcong.github.io/VueApp/src/assets/images/flo5_08.jpg'
				}]
			}
		}
	}
</script>