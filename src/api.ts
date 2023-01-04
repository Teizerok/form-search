interface IGeoSearch {
    getCountry(query: string | number): void
}

export const geoSearch: IGeoSearch = {
    //поиск любого места по указаной строке
    async getCountry(query) {
        const responce = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=10`
        )
        //фильтрация только названия
        return responce.json().then((data) => {
            return data.map((e) => {
                return e.display_name
            })
        })
    },
}
