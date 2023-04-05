// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        typeCheck: true,
        strict: true
    },
    app: {
        head: {
            title: 'AlexisCode',
            meta: [
                {
                    name: 'Sitio web personal.',
                    content: 'Mi sitio personal.'
                }
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@pinia/nuxt'
    ],
    css: [
        '@/assets/css/main.css'
    ],
    devServerHandlers: [],
})
