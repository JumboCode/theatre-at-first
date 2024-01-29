import UserSummary from "../../components/user-summary";
import CuteDog1 from "../../../public/images/cute_dog4.jpg";
import { SelectUser } from "@/db/schema";

// const user = {
//     id: 1, 
//     access: "admin",
//     firstname: "First",
//     lastname: "Last",
//     image: "image",
// }

export default function UserSum() {
    const id = 1;
    const access = "Drip King";
    const firstname = "My";
    const lastname = "Dawg";
    const image = CuteDog1;

    return (
        <main className="justify-between p-24">
            <UserSummary
                id={id}
                access={access}
                firstname={firstname}
                lastname={lastname}
                image={image}
            ></UserSummary>
        </main>
    );
}

/* 
export default function testPage() {
    const name = "Item Name";
    const tags = ["tag1", "longtag2", "reallyreallylongtag3", "tag4"];
    const description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const status = "Most Recent Status";

    return (
        <main>
            <ItemDetailTest
                name={name}
                tags={tags}
                description={description}
                status={status}
            ></ItemDetailTest>
        </main>
    );
} */

// const dummyComment1 = {
//     id: 1,
//     userID: 123,
//     timestamp: "2023-11-18 at 10:00:00",
//     message: "This is a test comment",
//     itemId: 456,
// };

// const dummyComment2 = {
//     id: 2,
//     userID: 987,
//     timestamp: "2023-11-28 at 10:00:00",
//     message: "This is also a test comment",
//     itemId: 456,
// };

// export default function Home() {
//     return (
//         <main className="justify-between p-24">
//             <CommentComp itemId={456} />
//         </main>
//     );
// }
