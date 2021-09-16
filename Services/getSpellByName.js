import http from './http'

export const getSpellByName = async (spell) => {
    try {
        const response = await http.get(`/br/spells/${spell}`)
        return [response.data, null]
    } catch (error) {
        console.log(error)
        return [null, error]
    }
}