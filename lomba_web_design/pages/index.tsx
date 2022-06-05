import { NextPage } from "next";

const handleOnClick = (e: any) => {
  const { target } = e;
  const utterance = new SpeechSynthesisUtterance(`${target.innerText}`);
  speechSynthesis.speak(utterance);
};

const Home: NextPage = () => {
  return <div onClick={handleOnClick.bind(this)}>hello</div>;
};

export default Home;
