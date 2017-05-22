<template>
	<div id="couple">
		<div class="container-fluid">
		  <div class="row">
		  	<div class="col-xs-12 mt10 icon" @click="this.goBack">&lt;</div>
		    <div class="col-xs-12 pl10 pr10">
		      <div class="myKar">
		       <i @click="change" :class='on'></i>
		       <a href="javascript:" class="style-red coupons">
		        <div class="coupons_box"> <img src="https://zongcong.github.io/VueApp/src/assets/images/c_icon.png" class="mon_pic fl"/>
		          <div class="price fl">30</div>
		          <div class="name fl">
		            <p class="cp1">优惠券</p>
		            <p class="cp2">订单满100使用 </p>
		          </div>
		          <div class="clr"></div>
		        </div>
		        <div class="time ellipsis">使用期限：2015.01.02-2015.04.03</div>
		        </a> </div>
		      <div class="myKar"> 
		        <i @click="change" :class='on'></i>
		      <a href="javascript:" class="style-blue coupons">
		        <div class="coupons_box"> <img src="https://zongcong.github.io/VueApp/src/assets/images/c_icon.png" class="mon_pic fl"/>
		          <div class="price fl">10</div>
		          <div class="name fl">
		            <p class="cp1">优惠券</p>
		            <p class="cp2">订单满10使用 </p>
		          </div>
		          <div class="clr"></div>
		        </div>
		        <div class="time ellipsis">使用期限：2015.01.02-2015.04.03</div>
		        </a> </div>
		      <div class="myKar"> 
		        <i @click="change" :class='on'></i>
		      <a href="javascript:" class="style-yellow coupons">
		        <div class="coupons_box"> <img src="https://zongcong.github.io/VueApp/src/assets/images/c_icon.png" class="mon_pic fl"/>
		          <div class="price fl">10</div>
		          <div class="name fl">
		            <p class="cp1">优惠券</p>
		            <p class="cp2">订单满10使用 </p>
		          </div>
		          <div class="clr"></div>
		        </div>
		        <div class="time ellipsis">使用期限：2015.01.02-2015.04.03</div>
		        </a> </div>
		    </div>
		  </div>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
			var oKar=document.getElementsByClassName('myKar')[0];
			var aI=document.getElementsByTagName('i');
			var aCoupons=document.getElementsByClassName('coupons');
			var c_width=oKar.offsetWidth;
			var c_height=(c_width*3)/10;
			for(var i=0;i<aCoupons.length;i++){
				aCoupons[i].style.height=c_height+'px';
			}
		},
		data(){
			return {
				on:''
			}
		},
		methods:{
			change(event){
				//console.log(event.currentTarget);
				if(event.currentTarget.className==''){
					event.currentTarget.className='selected';
				}else{
					event.currentTarget.className='';
				}
				
			}
		}
	}
	
</script>