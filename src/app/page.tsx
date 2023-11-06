import Button1 from "../components/button1";
import Button2 from "../components/button2";
import Button3 from "../components/button3";
import Button4 from "../components/button4";
import Button5 from "../components/button5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button1 />
        <Button2 label="Click here xx"/>
        <Button3 name = "PUSH THE BUTTON."/>
        <Button4 />
        <Button5 label="please, god... don't let it be rain :("/>
    </main>
  )
}
