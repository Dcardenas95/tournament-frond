<template>
    <div class="relative py-3 sm:w-96 mx-auto text-center">
      <div id="alert-border-1" v-if="showalertSuccess"
            class="flex items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800"
            role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div class="ms-3 text-sm font-medium">
                {{ store.info }}
            </div>
            <button type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                @click="closeAlertSuccess" 
                aria-label="Close">
                <span class="sr-only">Dismiss</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
        <div id="alert-border-2" v-if="showalertWarning"
            class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
            role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div class="ms-3 text-sm font-medium">
               {{ store.info }}
            </div>
            <button type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                @click="closeAlertWarning" 
                aria-label="Close">
                <span class="sr-only">Dismiss</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
      <span class="text-2xl font-light ">Login</span>
      <div class="mt-4 bg-white shadow-xl rounded-lg text-left">
        <div class="h-2 bg-blue-700 rounded-t-md"></div>
        <div class="px-8 py-6 ">
          <label class="block font-semibold text-xl">Email </label>
          <input type="text" placeholder="Email"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            v-model="email">
          <label class="block mt-3 font-semibold text-xl">Password</label>
          <input type="password" placeholder="Password"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            v-model="password">
          <div class="flex justify-between items-baseline">
            <button type="submit"
              class="mt-4 bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-600 text-xl"
              @click="loginUser">Ingresar</button>
            <a href="#" class="text-sm hover:underline font-bold text-blue-600">Olvidaste Tu Contraseña?</a>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="js" setup>
import {ref} from 'vue'
import useAuth from '@/store/auth'
import router from '@/router'


const email = ref('')
const password = ref('')
let showalertSuccess = ref(false)
let showalertWarning = ref(false)
const store = useAuth()

const loginUser = async () => {
    const response = await store.login(email.value, password.value)
    if (response == true) {
        showalertSuccess.value = true
        router.push({name:'dashboard'})
    }

    if (response == false) {
        showalertWarning.value = true
    }
}

const closeAlertSuccess = () => {
    showalertSuccess.value = false
}

const closeAlertWarning = () => {
    showalertWarning.value = false
}
</script>