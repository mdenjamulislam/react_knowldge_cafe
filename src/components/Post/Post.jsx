
const Post = ({ post, handleAddToBookmark, handleMarkAsRead }) => {
    const {post_title, post_date, post_thumb, reading_time, author, author_img, hash_tag} = post;
    return (
        <div className="flex flex-col gap-3">
            <img className="w-full h-auto rounded" src={post_thumb} alt={post_title} />
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p className="text-sm text-gray-400">{post_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p>{reading_time} mins</p>
                    <button onClick={() => handleAddToBookmark(post)} className="p-2 bg-slate-500 text-white rounded">Bookmark</button>
                </div>
            </div>
            <div>
                <h2 className="text-xl md:text-4xl">{post_title}</h2>
                <p className="py-3">
                    {
                        hash_tag.map((tag, idx) => <span key={idx} className="pr-2"><a href="#">#{tag}</a></span>)
                    } 
                </p>
                <button onClick={() => handleMarkAsRead(reading_time)} className="p-2 text-red-700 border border-red-700 text-sm rounded">Mark as Read</button>
                
            </div>
        </div>
    );
};

export default Post;