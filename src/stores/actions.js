export default {
	hideCart:({commit}) => {//购物车为空时
		commit('hideCart');
	},
	showCart: ({commit}) => {//购物车有商品时
		commit('showCart');
	},
	increment:({commit})=>{//购买数量增加
		commit('increment');
	},
	decrement:({commit})=>{//购买数量减少
		commit('decrement');
	},
	check:({commit})=>{//购买数量不能小于0
		commit('check');
	},
	tabShowLeft:({commit})=>{//商品详情
		commit('tabShowLeft');
	},
	tabShowRight:({commit})=>{//用户评价
		commit('tabShowRight');
	},
	showDetails:({commit})=>{//判断商品详情的抢购图标出现
		commit('showDetails');
	},
	hideTable:({commit})=>{//隐藏底部状态栏
		commit('hideTable');
	},
	showTable:({state,commit})=>{//显示底部状态栏
		//state.mutations.hideTab=true;
		commit('showTable');
	}
}