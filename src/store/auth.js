import { defineStore } from "pinia";

const useAuth = defineStore('auth', {
    state: () => {
        return {
            baseUrl: 'http://tournament.test/api',
            token: null,
        }
    },

    actions: {
        async login(email, password) {
            const uri = `${this.baseUrl}/login`
            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json'
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            })

            const response = await rawResponse.json()
            if (response.user) {
                this.token = response.token
                return true
            }
            if (response.message) {
                this.token = null
                return false
            }

        },

        logout() {
            this.token = null
        }
    },
    persist: {
        key: 'auth-store',
        storage: localStorage,
        paths: ['token']
    },
})

export default useAuth