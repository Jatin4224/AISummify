import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => Window.open("https://github.com/jatin4224")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI</span>
      </h1>
      <h2 className="desc">
        Unlock effortless comprehension with Summify, the open-source article
        summarizer that converts verbose texts into succinct and understandable
        summaries, making complex information easily digestible
      </h2>
    </header>
  );
};

export default Hero;
