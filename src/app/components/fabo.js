
"use client";  // ファイルの最初にこの行を追加します
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
function FavoIcon() {
    const [favo, setFavo] = useState(false);
  
 //アイコンをクリックしたらfavoのtrueとfalseが切り替わる関数を作成
    const handleClick = () => {
        if (favo === false) {
            setFavo(true);
        } else {
            setFavo(false);
        }
    };  
  
    return (
        <div>
            <button onClick={handleClick}>
                {favo ? <FaHeart />: <CiHeart />}
            </button>
        </div>
    );
  }

  export default FavoIcon;