"use client";

interface Props {
    title: string;
    image: string;
    status: string;
    id: number;
}

export default function Item(props: Props) {
    const status_color = props.status == "In Stock" ? "[#11763D]" : "[#DF1642]";
    // const classes = ;

    // console.log(classes);

    return (
        <a href={`/item/${props.id}`}>
            <div className="h-80 w-60 rounded-xl shadow-md">
                <div className="h-full flex flex-col">
                    <img
                        src={props.image}
                        alt=""
                        className="h-60 w-60 rounded-t-xl"
                    />
                    <div className="p-3">
                        <p className="text-[#496767] font-bold text-base mb-2">
                            {props.title}
                        </p>
                        <p
                            className={`text-sm text-${status_color} border-${status_color} border-2 w-fit px-2 rounded-lg`}
                        >
                            {props.status}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
}
