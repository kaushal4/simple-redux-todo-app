import { ADD_ARTICLE,DELETE_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: [],
    nextId:1,
  };
  
  function rootReducer(state = initialState, action) {
    if(action.type=== ADD_ARTICLE){
        return {...state,articles:state.articles.concat(action.payload),nextId:state.nextId+1}
    }else if(action.type === DELETE_ARTICLE){
      
      const filteredArticle = state.articles.filter((Element)=>{
        if(Element.id=== action.id) return false;
        else return true;
      });
      return {...state,articles:filteredArticle}
    }else{
      return state;
    }
  };
  
  export default rootReducer;