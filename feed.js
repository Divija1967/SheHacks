import React from "react";
import "./Feed.css";
// import CreateIcon from 

function feed(){
    return(
        <div className='feed'>
            <div className="feed_inputContainer">
                <div classname="feed_input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        
                    </form>
                 </div>
            </div>
        
        </div>

    )
}