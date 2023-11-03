
const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {post_title} = bookmark;
    return (
        <div className="p-3 rounded bg-slate-100">
            <h3 className="text-2xl">{post_title}</h3>
        </div>
    );
};

export default Bookmark;