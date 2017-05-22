<template>
<div id="user">
		<div class="pb70">
			<div class="container-fluid">
			  	<div class="row">
			    	<div class="col-xs-12 u-hrader p0 pr">
			      		<div class="u-photo"> <img src="https://zongcong.github.io/VueApp/src/assets/images/tw.jpg" class="pic4" /> </div>
				      		<div class="center f16 u-mes">
				        	<p>TZCong</p>
				        	<p>我的积分：100</p>
			      		</div>
			    	</div>
				    <div class="col-xs-12 bg-f uh_list">
				      	<ul class="uh_ul">
				        	<li>
				        		<a href=""> <span class="sp1"></span>
				          			<div class="h_txt">待付款</div>
				          		</a>
				          	</li>
			          		<li>
			          			<a href=""> <span class="sp2"></span>
			          			<div class="h_txt">待发货</div>
			          			</a>
			          		</li>
			           		<li>
			           			<a href=""> <span class="sp3"></span>
			          				<div class="h_txt">待收货</div>
			          			</a>
			          		</li>
			           		<li>
			           			<a href=""> <span class="sp4"></span>
			          				<div class="h_txt">待评价</div>
			          			</a>
			          		</li>
			           		<li>
			           			<router-link to="/user/collection">
			           				<span class="sp5"></span>
			          				<div class="h_txt">退换/售后</div>
			           			</router-link>
			          		</li>
				      	</ul>
				    </div>
			  	</div>
			  	<div class="row">
			  		<div class="col-xs-12 u_index mt15">
				   		<div class="link">
				   			<a href=""><i class="icon1"></i>全部订单
				    			<div class="go"><img src="https://zongcong.github.io/VueApp/src/assets/images/go.png" class="pic1" /></div>
				   			</a>
				   		</div>
				   		<div class="link">
				   			<a href=""><i class="icon2"></i>我的收藏
				    			<div class="go"><img src="https://zongcong.github.io/VueApp/src/assets/images/go.png" class="pic1" /></div>
				   			</a>
				   		</div>
				   		<div class="link1">
				   			<a href=""><i class="icon3"></i>我的试吃
				    			<div class="go"><img src="https://zongcong.github.io/VueApp/src/assets/images/go.png" class="pic1" /></div>
				   			</a>
				   		</div>
					   	<div class="link1">
					   		<router-link to="/user/order">
					   			<i class="icon4"></i>收货地址管理
					    		<div class="go"><img src="https://zongcong.github.io/VueApp/src/assets/images/go.png" class="pic1" /></div>
					   		</router-link>
					   	</div>
				   		<div class="link1">
				   			<router-link to="/user/changepass">
					   			<i class="icon4"></i>修改密码
					    		<div class="go"><img src="https://zongcong.github.io/VueApp/src/assets/images/go.png" class="pic1" /></div>
					   		</router-link>
				   		</div>
				    		<div class="link1">
				    			<a href=""><i class="icon6"></i>等级特权
				   						<div class="go"><img src="https://zongcong.github.io/VueApp/src/assets/images/go.png" class="pic1" /></div>
				   				</a>		
				   			</div>
				  		</div>
					</div>
				</div>
			</div>
		</div>
</div>
</template>