import React from "react";
import CheckedIcon from "./assets/img/checked.png"

const checked = CheckedIcon;

const Author = ({name, photo, nickname}) => {
return(
<>
    <img className="user_photo" src={photo}  alt="User's photo" width="100px" />
    <div className="user_name">
        {name}
        <img src={checked} alt="Checked icon"/>
    </div>
    <a className="user_nickname" href="#">{nickname}</a>
</>
);
}

export default Author;