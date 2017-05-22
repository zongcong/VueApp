import Home from './components/Home.vue'
import Limit from './components/Homes/Limit.vue'
import Couple from './components/Homes/Couple.vue'
import Times from './components/Homes/Time.vue'
import Categoury from './components/Category.vue'
import Cart from './components/Cart.vue'
import User from './components/User.vue'
import Details from './components/Details.vue'
import Order from './components/Users/Order.vue'
import Add from './components/Users/Add_adr.vue'
import Changepass from './components/Users/Changepass.vue'
import Collection from './components/Users/Collection.vue'
export default [{
	path: '/home',//主页
	component: Home
},{
	path:'/home/Couple',//新人有礼
	component:Couple
},
{
	path:'/home/limit',//抢购
	component:Limit
},{
	path:'/home/details/:id',
	component:Details
},
{
	path:'/home/limit/details',
	component:Details
},
{
	path:'/home/time',//早晚市
	component:Times
},
{ 
	path:'/category',//分类
	component:Categoury
},{
	path:'/cart',//购物车
	component:Cart
},{
	path:'/cart/details/:id',
	component:Details
},
{
	path:'/user',//个人中心
	component:User
},{
	path:'/user/order',//收货地址管理
	component:Order
},{
	path:'/user/changepass',//修改密码
	component:Changepass
},{
	path:'/user/collection',//退换货
	component:Collection
},
{
	path:'/user/order/add',//新增地址
	component:Add
},
{
	path:'*',
	redirect:'/home'
}]