import { Modal } from "../components/Modal";

const Sandbox = () => {
  return (
    <>
      Hello world
      <Modal
        visible={true}
        title={"Title"}
        body="You are doing great.  Hello there."
      />
    </>
  );
};

export default Sandbox;
