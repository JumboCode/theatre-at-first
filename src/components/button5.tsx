interface prop {
    label: string;
}

export default function Button5(props: prop) {
    return (
        <button>{props.label}</button>
    );
}
