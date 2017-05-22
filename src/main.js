import Vue from 'vue'
import {
	Swipe,
	SwipeItem,
	Radio
} from 'mint-ui';
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import './assets/js/font.js'
import store from './stores/'
import routerConfig from './router.config.js'

require('./assets/css/base.css');
require('./assets/css/common.css');
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Radio.name, Radio);
Vue.use(VueRouter);

axios.interceptors.request.use(function(config){//发送请求
	return config;
},function (error){
	return Promise.reject(error);
});
axios.interceptors.response.use(function(response){//请求回来
	return response;
},function(error){
	return Promise.reject(error);
});

Vue.prototype.$http=axios;//把axios对象挂到vue的原型上
Vue.prototype.goBack=function(){
	window.history.go(-1);
}//返回上一层
const router = new VueRouter({
	mode: 'history',
	routes: routerConfig,
	scrollBehavior: (to, from, savedPosition) => {//此模式要在html5 history模式才生效
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				y: 0
			}
		}
	},
});
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})