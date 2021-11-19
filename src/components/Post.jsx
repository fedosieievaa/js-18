import React from "react";
import Author from "./Author";
import Statistics from "./Statistics";
import Anakin from "./assets/img/Anakin_Skywalker.jpeg"


const ANAKIN_IMAGE = Anakin;

const author = {
        name: "Anakin Skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
    };

const statistics = {
        comments: 482,
        shares: 146,
        likes: 887
}

const Post = ({content, image, date}) => {
    return(
            <div className="container">
                <div className="container_info">
                         <Author name={author.name} photo={author.photo} nickname={author.nickname}/>
                        <div className="post_date">{date}</div>
                        <div className="post_content">{content}</div>
                </div>
                <img className="post_image" src={image} alt="Post's image" width="85%"/> 
                <Statistics comments={statistics.comments} shares={statistics.shares} likes={statistics.likes}/>
            </div>
    );
 }

export default Post;