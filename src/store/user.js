import firebase from "firebase/compat";

class User {
    constructor(id) {
        this.id = id
    }
}

export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state,payload) {
            state.user = payload
        }
    },
    actions: {
        async registerUser({commit},{email, password}) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
                commit('setUser', new User(response.user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async loginUser({commit},{email, password}){
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                commit('setUser', new User(response.user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
    },
        getters: {
        user(state) {
            return state.user
        },
            isUserLoggedIn (state) {
                return state.user !== null
            }

        }
}
