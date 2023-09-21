import StickyBar from "./StickyBar";

function BookstoreBar({ children }) {
    return (
        <div>
            <StickyBar />
            {children}
        </div>
    )
}
export default BookstoreBar