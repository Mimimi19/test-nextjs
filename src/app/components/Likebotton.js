"use client";  // ファイルの最初にこの行を追加します
import { useState } from "react";
import { CiHeart } from "react-icons/ci";

function LikeButton() {
    const [likes, setLikes] = useState(0);
  
    const countlike = () => { 
      setLikes(likes => likes + 1);
    };
  
    return (
      <button onClick={countlike}>
        {likes} Likes
      </button>
    );
  }

export default LikeButton;