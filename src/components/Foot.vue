<template>
	<div class="container-fluid">
			<div class="row">
				<div class="col-xs-12 footer-bg">
					<ul class="foot-ul">
						<router-link to="/home" tag="li" active-class="on">
							<a href="#"><i class="icon1"></i>
						  		<div class="foot-a">首页</div>
							</a>
						</router-link>
						<router-link to="/category" tag="li" active-class="on">
							<a href="#"><i class="icon2"></i>
						  		<div class="foot-a">分类</div>
							</a>
						</router-link>
						<router-link to="/cart" tag="li" active-class="on">
							<a href="#"><i class="icon3"></i>
						  		<div class="foot-a">购物车</div>
							</a>
						</router-link>
						<router-link to="/user" tag="li" active-class="on">
							<a href="#"><i class="icon4"></i>
						  		<div class="foot-a">我</div>
							</a>
						</router-link>
					</ul>
				</div>
			</div>
		</div>
</template>