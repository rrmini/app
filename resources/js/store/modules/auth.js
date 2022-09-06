import axios from "../../../axios/axios-instance";

const state = {
    errors: null,
}

const actions = {
    loginUser({commit}, user) {
        return new Promise(function (resolve)  {
            axios.get('/sanctum/csrf-cookie').then( function (response) {
                axios.post('/login', {
                    email: user.email,
                    password: user.password
                })
                    .then( function (response)  {
                        if (response.data) {
                            localStorage.setItem('x-token', response.config.headers['X-XSRF-TOKEN'])
                            window.location.replace("/")
                            console.log(response)
                        }
                    }) .catch( (error) => {
                    if (error.response.status === 422) {
                        commit('setErrors', error.response.data.errors)
                    }
                })

            });
        });
    },

    registerUser({}, user) {
        return new Promise((resolve) => {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                })
                    .then(response => {
                        if (response.data) {
                            localStorage.setItem('x-token', response.config.headers['X-XSRF-TOKEN'])
                            window.location.replace("/")
                            console.log(response)
                        }
                    }) .catch((error) => {
                    console.log(error.response)
                })
            });
        });
    },

    logout() {
        axios.post('/logout')
            .then(response => {
                localStorage.removeItem('x-token')
                window.location.replace("/user/login")

        })
    },
}

const mutations = {
    setErrors(state, invalidCredentials) {
        state.errors = invalidCredentials
    },
}

const getters = {
    errors(state) {
        return state.errors
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
