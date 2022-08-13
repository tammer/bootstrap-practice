import { useState } from "react";

const More = ({ body, teaser }) => {
  const [showAll, setShowAll] = useState(false);
  return showAll ? (
    <div>
      {body}{" "}
      <a href="#" onClick={(e) => setShowAll(false)}>
        less
      </a>
    </div>
  ) : (
    <div>
      {teaser}{" "}
      <a href="#" onClick={(e) => setShowAll(true)}>
        more
      </a>
    </div>
  );
};

const Sandbox = () => {
  const text =
    "hello here is a lot of texxt.  I mean a great dal.  with rifa.  I cant really know what this is saysing.";
  const teaser = text.substring(0, 40);
  return (
    <>
      <More body={text} teaser={teaser} />
    </>
  );
};

export default Sandbox;
