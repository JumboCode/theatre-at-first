import UserSummary from "../../components/user-summary";
import CuteDog1 from "../../../public/images/cute_dog4.jpg";

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

