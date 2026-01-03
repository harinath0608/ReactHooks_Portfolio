import React, { useState } from 'react'

const LikeDislike = () => {

    const [action, setAction] = useState(null);

    return (
        <>

            <button style={{ backgroundColor: action === "like" ? "blue" : "gray", color: action === "like" ? "white" : "lightgray", margin:"10px" }} 
            onClick={() => setAction("like")} disabled={action === "like" ? true : false}> Like </button>
            <button style={{ backgroundColor: action === "dislike" ? "black" : "lightgray", color: action === "dislike" ? "white" : "black" }} 
            onClick={() => setAction("dislike")} disabled={action === "dislike" ? true : false}> DisLike </button>

        </>
    )
}

export default LikeDislike
