import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import actions from './actions'
import mutations from './mutaions'

export default new Vuex.Store({
	modules:{
		mutations
	},
	actions,
});