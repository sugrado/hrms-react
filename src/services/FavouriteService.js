import axios from "axios";
export default class FavouriteService {
    add(favourite) {
        return axios.post("http://localhost:8080/api/favourites/add", favourite)
    }

    getByCandidateId(candidateId) {
        return axios.get(`http://localhost:8080/api/favourites/get-by-candidate-id?candidateId=${candidateId}`)
    }

    check(candidateId, jobAdvertisementId) {
        return axios.get(`http://localhost:8080/api/favourites/get-by-candidate-id?candidateId=${candidateId}&jobAdvertisementId=${jobAdvertisementId}`)
    }

    discard(fav) {
        console.log(fav);
        return axios.post(`http://localhost:8080/api/favourites/delete`, fav)
    }
}