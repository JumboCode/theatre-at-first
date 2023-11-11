import Image from "next/image";

export default function ResizeableIMG(
  props: React.ComponentProps<typeof Image>
) {
  return (
    <div>
      <Image
        {...props}
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          overflow: "hidden",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
