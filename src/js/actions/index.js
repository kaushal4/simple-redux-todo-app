import { ADD_ARTICLE, DELETE_ARTICLE} from "../constants/action-types";

export function addArticle(payload){
    return {type:ADD_ARTICLE,payload}
}

export function deleteArtilce(payload){
    return {type:DELETE_ARTICLE,id:payload}
}
// export function addNextId(payload){
//     return {type:ADD_NEXTID,payload}
// }