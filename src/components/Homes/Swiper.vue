<template>
	<div class="container-fluid">
			<div class="row">
			    <div class="col-xs-12 p0 page-swipe">
			      <!-- <div class="swiper-container">
			        <div class="swiper-wrapper">
			          <div class="swiper-slide"><a href="#"><img src="./assets/images/banner.jpg" class="pic2"/></a></div>
			          <div class="swiper-slide"><a href="#"><img src="./assets/images/banner.jpg" class="pic2" /></a></div>
			          <div class="swiper-slide"><a href="#"><img src="./assets/images/banner.jpg" class="pic2"/></a></div>
			        </div>
			        <div class="swiper-pagination"></div>
			      </div> -->
			      	<mt-swipe :auto="4000">
					  <mt-swipe-item><a href="#"><img src="https://zongcong.github.io/VueApp/src/assets/images/banner.jpg" class="pic2"/></a></mt-swipe-item>
					  <mt-swipe-item><a href="#"><img src="https://zongcong.github.io/VueApp/src/assets/images/banner.jpg" class="pic2" /></a></mt-swipe-item>
					  <mt-swipe-item><a href="#"><img src="https://zongcong.github.io/VueApp/src/assets/images/banner.jpg" class="pic2" /></a></mt-swipe-item>
					</mt-swipe>
			    </div>
			</div>
	</div>
</template>