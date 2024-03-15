import { create } from "apisauce"

const api = create({
    baseURL: 'https://newsapi.org/v2',
})

const apiKey =  '?country=us&apiKey=8807afa4b6af4c6ea094b47b7e919c71'

const getTopHeadline = api.get("/top-headlines"+apiKey)
//top-headlines?country=us&apiKey=8807afa4b6af4c6ea094b47b7e919c71

export default{
    getTopHeadline
}