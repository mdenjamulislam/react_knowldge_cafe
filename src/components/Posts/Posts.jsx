import { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('posts.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])


    return (
        <div className="flex flex-col gap-8">
            {
                posts.map(post => <Post 
                    key={post.id} 
                    post={post}
                    handleAddToBookmark = {handleAddToBookmark}
                    handleMarkAsRead = {handleMarkAsRead}
                    ></Post>)
            }
        </div>
    );
};

export default Posts;