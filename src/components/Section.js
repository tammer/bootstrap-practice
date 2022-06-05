const Section = ({ title, children }) => {
  return (
    <div>
      <div className="section-title">{title}</div>
      <div className="section-inner">{children}</div>
    </div>
  );
};

export default Section;
