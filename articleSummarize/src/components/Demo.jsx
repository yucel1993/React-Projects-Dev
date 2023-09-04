import { useState } from "react";
import useData from "../hooks/useData";
import { useSelector } from "react-redux";
import Card from "./Card";

const Demo = () => {
  const { getAll } = useData();
  const { data } = useSelector((state) => state.data);
  const [url, setUrl] = useState("");
  console.log("Demo", data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    getAll(url);
    
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
            type="text"
            placeholder="Enter the query"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="url_input peer"
          />
          <button type="submit" className="submit_btn">
            ↵
          </button>
        </form>
      </div>
      <div className="w-full mt-10">
        <div className="grid grid-cols-2 gap-10">
          {data?.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demo;
