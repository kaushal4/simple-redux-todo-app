import React,{useState} from "react"
import { addArticle } from "../js/actions/index";
import {connect} from "react-redux"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const mapStateToProps = (state)=>{
    return(
        {
            nextId:state.nextId,
        }
    )
}

const mapDispatchToProps = (dispatch)=>{
    return (
        {
            addArticle: article =>{dispatch(addArticle(article))},
        }
    )
}

const ConnectedForm = (props)=>{
    const [title,setTitle] = useState("");
    const handleChange = (e)=>{
        setTitle(e.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(title=== "") return;
        props.addArticle({title,"id":props.nextId});
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit} className="form">
        <div>
            <input
            type="text"
            id="title"
            value={title}
            onChange={handleChange}
            />
            <button type="submit" style={{"height":"90%"}}><FontAwesomeIcon icon={faPlus} style={{"transform":"scale(2)"}}></FontAwesomeIcon></button>
        </div>
        </form>
        
    );
}

const Form = connect(mapStateToProps,mapDispatchToProps)(ConnectedForm)

export default Form;