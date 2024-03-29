import Image from "next/image";

export default function ResizeableIMG(
    props: React.ComponentProps<typeof Image>
) {
    return (
        <div>
            <Image
                className={`overflow-hidden object-cover rounded-lg ${props.className}`}
                {...props}
                style={{
                    width: `${props.width}px`,
                    height: `${props.height}px`,
                }}
                alt={props.alt || ""}
            />
        </div>
    );
}
