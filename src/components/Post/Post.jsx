
const Post = ({post}) => {
    console.log(post);
    const {post_title, post_thumb} = post;
    return (
        <div>
            <h3>{post_title}</h3>
            <img src={post_thumb} alt="" />
        </div>
    );
};

export default Post;