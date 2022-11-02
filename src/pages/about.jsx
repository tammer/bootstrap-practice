import ReactMarkdown from "react-markdown";

const About = () => {
  return (
    <>
      <div className="main-container">
        <div className="right-panel">
          <div className="left-subpanel">
            <h1>About</h1>
            <p>At some point I will put something here.</p>
          </div>
          <div className="right-subpanel">
            <div className="attribute-section">
              <div className="two-columns">
                <div>
                  <ReactMarkdown>{`# Hello!



Thank you!!!!
        
        
        `}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
