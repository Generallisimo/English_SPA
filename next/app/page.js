
import Nav from "./ui/nav"
import Main from "./ui/main";
import BlockOne from "./ui/block_one"
import BlockTwo from "./ui/block_two";
import BlockThree from "./ui/block_three";
import BlockFour from "./ui/block_four";
import BlockFive from "./ui/block_five";
import BlockSix from "./ui/block_six";
import Answer from "./ui/answer";
import Question from "./ui/question";
import Form from "./ui/contact";

export default function Home() {
  return (
    <main className="">
      <Nav/>
      <Main/>
      <BlockOne/>
      <BlockTwo/>
      <BlockThree/>
      <BlockFour/>
      <BlockFive/>
      <BlockSix/>
      <Answer/>
      <Question/>
      <Form/>
    </main>
  );
}
