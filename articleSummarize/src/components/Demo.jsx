import { useState } from "react";
import useData from "../hooks/useData";
import { useSelector } from "react-redux";

const Demo = () => {
  const {getAll} =useData()
  const {data} =useSelector((state)=>state.data)
 const [url , setUrl ] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
     getAll(url)
    alert("Success");
  };
  return (
    <section className="mt-16 w-full max-w-xl ">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src="./assets/link.svg"
            alt="link"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="url_input peer"
          />
          <button type="submit" className="submit_btn">
            ↵
          </button>
        </form>
        <div>
          {data ? <p> {data}</p> : ""}
        </div>
      </div>
    </section>
  );
};

export default Demo;
