import { Endorsement } from "../components/Endorsement";

const Sandbox = () => {
  const skills = [
    ["python", "e"],
    ["django", "p"],
    ["c++", "p"],
  ];
  return (
    <div>
      {/* <Endorsement who="Sam Power" skills={skills} /> */}
      <Endorsement who="Ross Barclay" skills={skills} />
      <Endorsement who="Paul Keating" skills={skills.slice(2, 3)} />
      <Endorsement who="Sam Power" skills={skills.slice(1, 3)} />
    </div>
  );
};

export default Sandbox;
