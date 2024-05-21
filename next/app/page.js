import Image from "next/image";

import Form from "./ui/contact";
import Nav from "./ui/nav"
import Main from "./ui/main";
import BlockOne from "./ui/block_one"
import BlockTwo from "./ui/block_two";

export default function Home() {
  return (
    <main className="h-test">
      <Nav/>
      <Main/>
      <BlockOne/>
      <BlockTwo/>
      {/* <Form/> */}
    </main>
  );
}
