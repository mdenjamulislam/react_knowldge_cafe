import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="flex flex-col gap-4 rounded">
            <div className="p-3 bg-slate-200">
                <h3 className="text-2xl">Total Reading Time: {readingTime}</h3>
            </div>
            <div className="bg-slate-200 p-3 rounded">
                <h2 className="text-2xl text-center">Bookmarks Blogs: {bookmarks.length}</h2>
                <div className="flex flex-col gap-3 pt-5">
                    {
                        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;