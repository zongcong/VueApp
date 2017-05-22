<template>
	<div id="limit">
		<div class="container-fluid">
			<div class="row bg-f">
				<div class="icon1 col-xs-12" @click="this.goBack">&lt;</div>
			    <div class="col-xs-12 bg-f bd-e p10"> 
			      	<div class="fl rush_btn">抢购中</div>
			      	<div class="fr pr rush_fr">  <i></i> <span class="pr10"> 距离开始还有</span><span class="bg_sp">00</span>:<span class="bg_sp">50</span>:<span class="bg_sp">30</span></div>
			    </div>
			</div>
		 	<div class="row">
			  	<div class="col-xs-12 p0 bg-f">
			      	<router-link to="/home/limit/details" tag="div" class="sh_all_list">
			      		<a href="#">
				        	<div class="fl sh_photo pr"> <img src="https://zongcong.github.io/VueApp/src/assets/images/detail_03.jpg" class="pic4" /> </div>
				        	<div class="sh_content">
					          	<p>三号柜oceanfamily 鲜虾仁41/50 200g</p>
					          	<div class="mt8">
					            	<div class="fl " ><span class="f16 green">￥299.00</span><span class="old">￥199.00</span></div>
					            	<div class="fr rush_sold" >立即抢购</div>
					            	<div class="clr"></div>
					          	</div>
				        	</div>
			        	</a>
			      	</router-link> 
			    </div>
		    	<div class="col-xs-12 p0 bg-f">
			      	<div class="sh_all_list">
			      		<a href="#">
				        	<div class="fl sh_photo pr"> <img src="https://zongcong.github.io/VueApp/src/assets/images/detail_03.jpg" class="pic4" /></div>
				        	<div class="sh_content">
					          	<p>三号柜oceanfamily 鲜虾仁41/50 200g</p>
					          	<div class="mt8">
					            	<div class="fl " ><span class="f16 green">￥299.00</span><span class="old">￥199.00</span></div>
					            	<div class="fr rush_sold1" ><img src="https://zongcong.github.io/VueApp/src/assets/images/aply.png
" /></div>
					            	<div class="clr"></div>
					          	</div>
				        	</div>
			        	</a> 
			        </div>
		    	</div>
	 		</div>
		</div>
	</div>
</template>
