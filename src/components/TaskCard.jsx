import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className='task__card'>
      <p className='task_text'>{title}</p>
      <div className='task__cardBottomLine'>
        <div className='task__cardTags'>
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className='task__delete' onClick={() => handleDelete(index)}>
          <img className='delete__icon' src={deleteIcon} alt='' />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
