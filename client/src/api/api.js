const BASE_URL =  "http://localhost:8080/api"


export const API_URLS = {
    GET_MOVIES: `${BASE_URL}/movies`,
    GET_MOVIES_BY_ID: (id)=> `${BASE_URL}/movies/${id}`,
    GET_MOVIES_FRONT_PAGE: `${BASE_URL}/frontPage`
}