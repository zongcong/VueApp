<template>
	<div id="order">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-12 bg-f  p10 f16"><i class="icon-lt" @click="this.goBack">&lt;</i> 收货地址 </div>
			</div>
			<div class="row">
				<div class="col-xs-12 add_item bg-f mb10">
				  	<div class="item_tip">
					    <div class="fl"><span class="pr20">张先生</span>13360029846</div>
					    <div class="fr default_txt">默认地址</div>
					    <div class="clr"></div>
				  	</div>
				  	<div class="mt5 mb5 gray-6">广东省广州市天河区兴业大道华南碧桂园翠云山C座202</div>
				  	<div class="edit bt18 bt-e">
					    <div class="fr handle">
					     	<div class="fl pr pl30 mr10"><a href=""><i class="edit_i1"></i>修改</a></div>
					     	<div class="fl pr pl30"><a href=""><i class="edit_i2"></i>删除</a></div>
					    </div>
				    	<div class="clr"></div>
				  	</div>
				</div>
				<div class="col-xs-12 add_item bg-f mb10">
				  	<div class="item_tip">
					    <div class="fl"><span class="pr20">张先生</span>13360029846</div>
					    <div class="fr default_txt"></div>
					    <div class="clr"></div>
				  	</div>
				  	<div class="mt5 mb5 gray-6">广东省广州市天河区兴业大道华南碧桂园翠云山C座202</div>
				  	<div class="edit bt-e">
					    <div class="fr handle">
					     	<div class="fl pr pl30 mr10"><a href=""><i class="edit_i1"></i>修改</a></div>
					     	<div class="fl pr pl30"><a href=""><i class="edit_i2"></i>删除</a></div>
					    </div>
				    	<div class="clr"></div>
				  	</div>
				</div>
			</div>
  			<div class="row">
			   	<div class="col-xs-12 mt40">
			     	<div class="all_btn">
			        	<div class="pay">
							<router-link to="/user/order/add" class=" bg-g">+新增收货地址</router-link>
						</div>
			      	</div>
			    </div>
  			</div>
		</div>
	</div>
</template>