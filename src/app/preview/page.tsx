import Item from "../../components/item";
    
export default function Preview() {
  return (
    <main className="h-screen flex items-center justify-center space-x-4">
        <Item title="Title" status="Status"/>
        <Item title="Title" status="Status"/>
        <Item title="Title" status="Status"/>
        <Item title="Title" status="Status"/>
    </main>
  )
}
