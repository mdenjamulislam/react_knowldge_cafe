import { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('posts.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])


    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;