export default {
    state: {
        ads:[
            {
                title:"Полезные продукты для вашего питомца",
                desc:"10 полезных продуктов для вашего бельченка",
                promo: true,
                src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                id:"1"
            },
            {
                title:"Как фотографировать ночью",
                desc:"Фотографии звездного неба",
                promo: true,
                src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
                id:"2"
            },
            {
                title:"Факты об орлах",
                desc:"35 интересных фактов из жизни орлов",
                promo: true,
                src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
                id:"3"
            },
            {
                title:"Тайны космоса",
                desc:"Ужасные и необъяснимые явления",
                promo: true,
                src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                id:"4"
            }

        ]
    },
    mutations: {
        createAd(state, payload){
            state.ads.push(payload)
        }
    },
    actions: {
        createAd({commit}, payload) {
            payload.id = Math.random()
            commit('createAd', payload)
        }
        },
        getters: {
            ads(state) {
                return state.ads
            },
            promoAds(state) {
                return state.ads.filter(ad => {
                    return ad.promo
                })
            },
            myAds(state) {
                return state.ads
            },
            adById(state) {
                return id => {
                    return state.ads.find(ad => ad.id == id)
                }
            }
        }
    }