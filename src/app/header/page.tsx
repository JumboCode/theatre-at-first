import Header from "@/components/header";

export default function testPage() {
    const status = "Most Recent Status";
    const id = 1;
    const access = "Drip King";
    const firstname = "My";
    const lastname = "Dawg";

    return (
        <main>
            <Header
                id={id}
                status={status}
                access={access}
                firstname={firstname}
                lastname={lastname}
            ></Header>
        </main>
    );
}
