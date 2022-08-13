export const Modal = ({ title, body, visible = false, onClose = null }) => {
  return (
    <>
      {visible ? (
        <div className="bp-modal">
          <div>
            {onClose ? (
              <div className="bp-modal-close-button">
                <a
                  onClick={(e) => {
                    onClose();
                  }}
                >
                  X
                </a>
              </div>
            ) : (
              ""
            )}

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
