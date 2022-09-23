import axios from "../../../axios/axios-instance";

const state = {
    errors: null,
    invalidCredentials: '',
}

const actions = {
    loginUser(ctx, user) {
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
                    console.log(error.response)
                    if (error.response.status === 422) {
                        ctx.commit('setErrors', error.response.data.errors)
                    }
                })

            });
        });
    },

    registerUser({commit}, user) {
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
                    if (error.response.status === 422) {
                        commit('setErrors', error.response.data.errors)
                    }
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

    forgotPassword(ctx, user) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/forgot-password', {
                    email: user.email
                })
                .then(response => {
                    if (response.data) {
                        window.location.replace("/login")
                        resolve(response)
                    } else  {
                        reject(response)
                    }
                })
                .catch((error) => {
                    console.log(error.response)
                    if (error.response.status === 422) {
                        ctx.commit('setErrors', error.response.data.errors)
                    } else if (error.response.status === 500)
                        ctx.commit('setInvalidCredentials', error.response.data.error)
                })
        })
    },

    resetPassword(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/reset-password', payload)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    console.log(error.response)
                    if (error.response.status === 422) {
                        ctx.commit('setErrors', error.response.data.errors)
                    } else if (error.response.status === 500)
                        ctx.commit('setInvalidCredentials', error.response.data.error)
                })
        })
    },
}

const mutations = {
    setErrors(state, invalidCredentials) {
        state.errors = invalidCredentials
    },
    setInvalidCredentials(state, invalidCredentials) {
        state.invalidCredentials = invalidCredentials
    },
}

const getters = {
    errors(state) {
        return state.errors
    },
    invalidCredentials(state) {
        return state.invalidCredentials
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
