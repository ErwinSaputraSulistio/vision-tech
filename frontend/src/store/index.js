import { createStore } from "vuex"
import router from "@/router"
import axios from "axios"
import Swal from "sweetalert2"
import createPersistedState from "vuex-persistedstate"

export default createStore({
	plugins: [createPersistedState()],
	state: {
		user: null
	},
	getters: {
	},
	mutations: {
		SET_USERDATA(state, data) {
			state.user = data
		},
		ERASE_USERDATA(state) {
			state.user = null
		}
	},
	actions: {
		async login({ dispatch }, credentials) {
			try {
				const result = await axios.post("http://localhost:8000/api/login", credentials)
				const { status, message, data } = result.data
				dispatch('store', data)
				Swal.fire(status, message, "success")
				router.push({ name: "Private" })
			}
			catch(err) {
				const { status, error } = err.response.data
				Swal.fire(status, error, "error")
				router.push({ name: "Error" })
			}
		},
		async logout({ commit }) {
			commit('ERASE_USERDATA')
			Swal.fire("Logout Success!", "To access private route, you must login again!", "success")
			router.push({ name: "Auth" })
		},
		async register({ commit }, credentials) {
			console.log(credentials)
			try {
				const result = await axios.post("http://localhost:8000/api/register", credentials)
				const { status, message } = result.data
				Swal.fire(status, message, "success")
			}
			catch(err) {
				const { status, error } = err.response.data
				Swal.fire(status, error, "error")
				router.push({ name: "Error" })
			}
		},
		async store({ commit }, data) {
			commit('SET_USERDATA', data)
		}
		
	},
	modules: {
	}
})
