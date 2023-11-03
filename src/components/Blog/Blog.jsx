
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { post_title, post_thumb, author, author_img, post_date, reading_time, hash_tag} = blog;

    return (
        <div className="space-y-3">
            <img className="rounded-lg" src={post_thumb} alt={post_title} />
            <div className="flex items-center justify-between">
                <div className="flex flex-row gap-2">
                    <img className="w-12" src={author_img} alt={author} />
                    <div>
                        <h4 className="font-bold">{author}</h4>
                        <p className="text-sm italic">{post_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p>{reading_time} mins</p>
                    <button onClick={() => handleAddToBookmark(blog)} className="p-1 text-xs border rounded bg-sky-500 text-white">Bookmark</button>
                </div>
            </div>
            <div className="space-y-1">
                <a href="#"><h2 className="text-3xl font-bold">{post_title}</h2></a>
                <p>
                    {
                        hash_tag.map((tag, ind) => <a key={ind} className="pr-2 text-gray-500" href="#">#{tag}</a>)
                    }
                </p>
                <button onClick={() => handleMarkAsRead(reading_time)} className="p-1 text-xs border rounded bg-sky-500 text-white">Mark as Read</button>
            </div>
        </div>
    );
};

export default Blog;