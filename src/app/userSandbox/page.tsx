import UserDetail from "@/components/userDetail";
import CuteDog1 from "../../../public/images/cute_dog1.jpg";
import CuteDog2 from "../../../public/images/cute_dog2.jpg";
import CuteDog3 from "../../../public/images/cute_dog3.jpg";

const userDetail1 = {
    firstname: "Nehir",
    lastname: "Ozden",
    access: "admin",
    email: "nehirlaraozden@gmail.com",
};

const userDetail2 = {
    firstname: "Peter",
    lastname: "Morganelli",
    access: "user",
    email: "petercarlmorganelli@gmail.com",
};

const userDetail3 = {
    firstname: "Liam",
    lastname: "Strand",
    access: "admin",
    email: "liam.strand@tufts.edu",
};

export default function Page() {
    return (
        <main className="bg-white h-screen flex content-center place-content-evenly pt-20">
            <img className="w-20 h-20" src={CuteDog1.src} alt="CuteDog1" />
            <UserDetail
                firstname={userDetail1.firstname}
                lastname={userDetail1.lastname}
                access={userDetail1.access}
                email={userDetail1.email}
            ></UserDetail>
            <img className="w-20 h-20" src={CuteDog2.src} alt="CuteDog2" />
            <UserDetail
                firstname={userDetail2.firstname}
                lastname={userDetail2.lastname}
                access={userDetail2.access}
                email={userDetail2.email}
            ></UserDetail>
            <img className="w-20 h-20" src={CuteDog3.src} alt="CuteDog3" />
            <UserDetail
                firstname={userDetail3.firstname}
                lastname={userDetail3.lastname}
                access={userDetail3.access}
                email={userDetail3.email}
            ></UserDetail>
        </main>
    );
}
