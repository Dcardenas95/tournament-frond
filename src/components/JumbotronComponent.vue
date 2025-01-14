<template>
    <section class="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply"
        :style="{ backgroundImage: `url(${img})` }">
        <div class="max-w-screen-xl text-center py-24 lg:py-56 flex-col justify-end items-end">

            <div>
                <a href="#"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    {{ buttonOne }}
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
                <a href="#"
                    class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    {{ buttonTwo }}
                </a>

            </div>

        </div>
    </section>
</template>

<script lang="js" setup>
import { defineProps } from 'vue';

defineProps({
    img: {
        type: String,
        required: true
    },
    buttonOne: {
        type: String,
        required: true
    },
    buttonTwo: {
        type: String,
        required: true
    }
});
</script>