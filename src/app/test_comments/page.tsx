import CommentComp from "../../components/comment-comp-single-view";
import { SelectComment } from "@/db/schema";

const dummyComment1 = {
    id: 1,
    userID: 123,
    timestamp: "2023-11-18 at 10:00:00",
    message: "This is a test comment",
    itemId: 456,
};

const dummyComment2 = {
    id: 2,
    userID: 987,
    timestamp: "2023-11-28 at 10:00:00",
    message: "This is also a test comment",
    itemId: 456,
};

export default function Home() {
    return (
        <main className="justify-between p-24">
            <CommentComp itemId={456} />
        </main>
    );
}

// const commentsArray = [dummyComment1, dummyComment2];

// export default function Home() {
//   return (
//     <main className="justify-between p-24">
//         <CommentComp comments={dummyComment1} />
//     </main>
//   )
// }
