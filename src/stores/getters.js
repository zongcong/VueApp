export default {
	cart: (state) => {
		return state.cart;//返回购物车有数据的状态
	},
	cartNone: (state) => {
		return state.cartNone;//返回购物车空的状态
	},
	count:(state)=>{
		return state.count;//返回商品数量
	},
	showShop:(state)=>{
		return state.showShop;//返回商品详情
	},
	showCom:(state)=>{
		return state.showCom;//返回评价
	},
	details:(state)=>{
		return state.details;//返回抢购图标显示情况
	},
	hideTab:(state)=>{//隐藏底部状态栏
		return state.hideTab;
	}

}