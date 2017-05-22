<template>
	<div class="container-fluid">
		 <div class="row">
		    <div class="col-xs-12 bg-f p10">
		      <table class="sr_tb">
		        <tr>
		          <td><div class="input pr"> <a href=""><img src="https://zongcong.github.io/VueApp/src/assets/images/search.png" class="pic1 sr_btn" /></a>
		              <input type="text" placeholder="搜索您想要的商品" class="sr-input "/>
		            </div></td>
		          <td class="td_02" @click="show=!show"><div class="lacation pr"><a href="javascript:"> <i></i> <span id="adr_txt">深圳</span> </a></div></td>
		        </tr>
		      </table>
		    </div>
		    <div class="location_cover" v-show="show">
				<div class="cbg" @click="show=!show"></div>
					<mt-radio
						class="local_main bg-f"
					  	v-model="value"
					  	:options="city">
					</mt-radio>
				</div>
			</div>
		 </div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				show:false,
				city:['深圳','上海','广州'],
				value:''
			}
			
		},
		methods:{
			city1(){
				alert('a')
			}
		}
	}
</script>
<style>
	.mint-radio-input:checked + .mint-radio-core{
		background-color: #79c34b;
		border-color: #79c34b;
	}
	a:hover{
		color: #79c34b;
	}
	label{
		font-weight: normal;
	}
</style>