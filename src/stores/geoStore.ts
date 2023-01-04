import { defineStore } from 'pinia'
import { geoSearch } from '../api'

interface IGeo {
    listOfCountries: object[]
    isLoading: boolean
}

export const useGeoStore = defineStore('geo', {
    state: (): IGeo => ({
        listOfCountries: [],
        isLoading: false,
    }),

    actions: {
        async getCountry(search: string) {
            this.isLoading = true
            this.listOfCountries = await geoSearch.getCountry(search)
            this.isLoading = false
        },
    },
})
