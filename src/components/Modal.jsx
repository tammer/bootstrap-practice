export const Modal = ({ title, body, visible = false }) => {
  return (
    <>
      {visible ? (
        <div className="bp-modal">
          <div>
            <div className="align-center">{<h1>{title}</h1>}</div>
            {body}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
