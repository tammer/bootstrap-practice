const Modal = ({ title, body, visible = false }) => {
  return (
    <>
      {visible ? (
        <div className="bp-modal">
          <div>
            {<h1>{title}</h1>}
            {body}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

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
