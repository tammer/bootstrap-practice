import Switch from "react-switch";

const BPSwitch = ({ checked, handleChange, label = "RELEVANT?" }) => {
  return (
    <>
      <span>{label}</span>
      <Switch
        height={18}
        width={40}
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        // handleDiameter={100}
        uncheckedIcon={<div className="bpswitch-off">NO</div>}
        checkedIcon={<div className="bpswitch-on">YES</div>}
        onColor="#61FACC"
        activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0.2)"
      />
    </>
  );
};

export default BPSwitch;
