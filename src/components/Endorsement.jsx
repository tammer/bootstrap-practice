const BPBadge = ({ name, level }) => {
  return (
    <div className="technology-badge">
      <div className="technology-badge-left">{name}</div>
      <div className={`technology-badge-right-${level.substring(0, 1)}`}>
        {level}
      </div>
    </div>
  );
};

export const Endorsement = ({ who, skills }) => {
  return (
    <>
      <div className="badge-box">
        <div></div>
        <div>endorement from:</div>
        <div>{who}</div>
        <div>March 12, 2022</div>
        <div>
          {skills.map((skill, index) => (
            <BPBadge
              key={`end-${who}-${index}`}
              name={skill[0]}
              level={skill[1]}
            />
          ))}
        </div>
      </div>
    </>
  );
};
