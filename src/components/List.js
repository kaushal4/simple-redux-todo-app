import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteArtilce } from "../js/actions/index";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteArtilce: (id) => {
      dispatch(deleteArtilce(id));
    },
  };
};

const ConnectedList = (props) => {
  const [markedItems, setMarkedItems] = useState([]);
  const [fadeOutIndex, setFadeOutIndex] = useState(0);
  const removeIdFromMarked = (id) => {
    const tempArr = [...markedItems];
    tempArr.splice(tempArr.indexOf(id), 1);
    setMarkedItems(tempArr);
  };
  const markedElementHandler = (e) => {
    const id = parseInt(e.target.id.slice(e.target.id.indexOf(":") + 1));
    if (markedItems.includes(id)) removeIdFromMarked(id);
    else setMarkedItems([...markedItems, id]);
  };

  const dustbinClickHandler = (e) => {
    let idString = "";
    if (e.target.nearestViewportElement)
      idString = e.target.nearestViewportElement.id;
    else idString = e.target.id;
    const id = parseInt(idString.slice(idString.indexOf(":") + 1));
    setFadeOutIndex(id);
    setTimeout(() => {
      props.deleteArtilce(parseInt(id));
    }, 500);
  };
  return (
    <ul>
      {props.articles.map((el) => {
        return (
          <li
            key={el.id}
            className={`fadeIn ${fadeOutIndex === el.id ? "fadeOut" : ""}`}
          >
            <input
              type="checkbox"
              name={`task:${el.id}`}
              id={`task:${el.id}`}
              onClick={(event) => {
                markedElementHandler(event);
              }}
            />{" "}
            <span
              style={{
                "text-decoration": `${
                  markedItems.includes(el.id) ? "line-through" : "none"
                }`,
              }}
            >
              {el.title}
            </span>{" "}
            <FontAwesomeIcon
              icon={faTrash}
              id={`delete:${el.id}`}
              onClick={(e) => {
                dustbinClickHandler(e);
              }}
            />{" "}
          </li>
        );
      })}
    </ul>
  );
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
