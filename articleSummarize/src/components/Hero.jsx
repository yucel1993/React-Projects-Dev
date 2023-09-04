const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mt-10 mb-10">
        <div>
          <img
            src="./assets/logo.svg"
            alt="sumz_logo"
            className="w-28 object-contain"
          />
        </div>
        <div>
       
          <button
            type="button"
            onClick={() => window.open("https://github.com/yucel1993")}
            className="black_btn"
          >
            GitHub
          </button>
        </div>
      </nav>
      <h1 className="head_text">Summarize Articles with <br />
      <span className="orange_gradient">OpenAI GPD-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
