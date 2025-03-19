import React, {useState} from "react";
import '../components/style/EventCard.css';

function CommentsList() {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);

    const removeComent = (id) => {
        setComments(comments.filter(comment => comment.id !== id))
    }

    return (
        <>
        {comments.map( (comment) => (
            <div className="comment" key={comment.id}>
                <p>{comment.text}</p>
                <button onClick={() => removeComent(comment.id)}>Удалить</button>
            </div>
        ))}
        </>
    )
    
}

export default CommentsList;