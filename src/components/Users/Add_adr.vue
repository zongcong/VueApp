<template>
	<div id="add">
		<div class="container-fluid">
		  	<div class="row">
		  		<div class="col-xs-12 mt5 icon" @click="this.goBack">&lt;</div>
			    <div class="col-xs-12 fill pr mt15">
			      	<div class="fiil_txt">收货人：</div>
			      	<input type="text" placeholder="请输入您的姓名" class="add_input pl_01"/>
			    </div>
		    <div class="col-xs-12 fill pr mt15">
		      	<div class="fiil_txt">电话：</div>
		      		<input type="text" placeholder="请输入您的手机号码" class="add_input pl_02"/>
		    </div>
		    <div class="col-xs-12 fill pr mt15">
		      	<p class="mb5">请选择您所属的区域、小区名称</p>
		      	<div class="fl fill_fl">
		        	<input type="text" value="深圳市" class="add_input pl_03" readonly="true"/>
		      	</div>
		     
		      	<div class="fr fill_fr">
			        <select class="fill_sel">
			          	<option>南山区</option>
			          	<option>罗湖区</option>
			        </select>
		        	<div class="sel_down1"><img src="https://zongcong.github.io/VueApp/src/assets/images/down_03.jpg"></div>
		    	</div>
		    	<div class="clr"></div>
		    </div>
		    <div class="col-xs-12 fill  mt15">
			    <div class="pr">
			        <select class="fill_sel">
			          	<option>深圳市城镇花园</option>
			          	<option>罗湖老街</option>
			        </select>
			        <div class="sel_down1"><img src="https://zongcong.github.io/VueApp/src/assets/images/down_03.jpg"></div>
			    </div>
		    </div>
		    <div class="col-xs-12 fill pr mt15">
		      	<div class="fiil_txt">详细地址：</div>
		      	<input type="text" placeholder="详细地详细地址" class="add_input pl_04"/>
		    </div>
		    	<div class="col-xs-12 agreement mt15"><i ></i>设为默认地址</div>
		  	</div>
		 	<div class="col-xs-12 mt40">
		     	<div class="all_btn">
		        	<div class="pay">
		        		<a href="" @click="this.goBack" class="bg-g">完成</a>
		        	</div>
		      	</div>
		    </div>
		</div>
	</div>
</template>

<style scoped>
	select{
		outline: none;
	}
</style>