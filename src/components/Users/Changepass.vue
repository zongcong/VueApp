<template>
	<div id="changepass">
		<div class="container-fluid">
			<div class="row">
				<div class="icon col-xs-12 mt5" @click="this.goBack">&lt;</div>
			  	<div class="col-xs-12 mt10">
			    	<input type="text" placeholder="原密码" class="reg_inp"/>
			  	</div>
			  
			  	<div class="col-xs-12 mt10">
			    	<input type="text" placeholder="请输入新密码" class="reg_inp"/>
			    	<div class="tip gray-6 mt5 "><span class="red pr5">*</span>6-20位字母、数字组合的</div>
			  	</div>
			  	<div class="col-xs-12 mt15">
			    	<input type="text" placeholder="请输入新密码" class="reg_inp"/>
			    	<div class="tip gray-6 mt5 "><span class="red pr5">*</span>6-20位字母、数字组合的</div>
			  	</div>
			  	<div class="col-xs-12 mt40">
			     	<div class="all_btn">
			        	<div class="pay"><a href="" class="bg-g">完成</a></div>
			      	</div>
			    </div>
			</div>
		</div>
	</div>
</template>