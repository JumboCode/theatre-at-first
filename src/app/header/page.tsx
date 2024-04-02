import Header from "@/components/header";
import UserSummary from "@/components/user-summary";
import CuteDog1 from "../../../public/images/cute_dog4.jpg";

export default function testPage() {
    const status = "Most Recent Status";
    const id = 1;
    const access = "Drip King";
    const firstname = "My";
    const lastname = "Dawg";
    const image = CuteDog1;

    return (
        <main>
            <Header
                id={id}
                status={status}
                access={access}
                firstname={firstname}
                lastname={lastname}
                image={image}
            ></Header>
        </main>
    );
}