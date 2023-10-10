import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { API_KEY } from '../key.js'
import { API_URL } from '../constants.js'

export const useCounterStore = defineStore('counter', () => {
    const options = ref([{
            label: 'Сделка',
            value: 'deal'
        },
        {
            label: 'Контакт',
            value: 'contact'
        },
        {
            label: 'Компания',
            value: 'company'
        }
    ])
    const optionValue = ref('')
    const preloader = ref(false)


    const stopPreloader = () => {
        preloader.value = false
    }

    /* -------------------------------------------------------------- */

    axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`

    const send = (value) => {
        const data = {
            title: value,
            id: Math.floor(Math.random() * 1000)
        }

        if (value === 'deal') {
            axios
                .post(`${API_URL}/v4/leads`, data)
                .then((res) => {
                    stopPreloader()
                    console.log('Создано: ', res.data)
                })
                .catch((err) => {
                    stopPreloader()
                    console.log('Ошибка, не удалось создать: ', err)
                })
        } else if (value === 'contact') {
            axios
                .post(`${API_URL}/v4/contacts`, data)
                .then((res) => {
                    stopPreloader()
                    console.log('Создано: ', res.data)
                })
                .catch((err) => {
                    stopPreloader()
                    console.log('Ошибка, не удалось создать: ', err)
                })
        } else if (value === 'company') {
            axios
                .post(`${API_URL}/v4/companies`, data)
                .then((res) => {
                    stopPreloader()
                    console.log('Создано: ', res.data)
                })
                .catch((err) => {
                    stopPreloader()
                    console.log('Ошибка, не удалось создать: ', err)
                })
        } else {
            console.warn('Неверное значение типа сущности')
        }
    }

    return { options, optionValue, send, preloader }
})