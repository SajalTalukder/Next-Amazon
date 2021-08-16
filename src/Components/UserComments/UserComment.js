import React from "react";
import cls from "./UserComment.module.scss";
import { UserIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const UserComment = ({ name, date, rating, comment }) => {
  return (
    <div className={cls["comment"]}>
      <div className={cls["comment__header"]}>
        <div className={cls["comment__user"]}>
          <div className={cls["comment__user-icon-box"]}>
            <UserIcon className={cls["comment__user-icon"]} />
          </div>
          <h2 className={cls["comment__user-name"]}>{name}</h2>
        </div>
        <div className={cls["comment__date"]}>{date}</div>
      </div>
      <div className={cls["comment__rating"]}>
        {Array(+rating)
          .fill()
          .map((_, i) => {
            return <StarIcon className={cls["comment__star"]} key={i} />;
          })}
      </div>
      <div className={cls["comment__comment"]}>{comment}</div>
    </div>
  );
};

export default UserComment;
