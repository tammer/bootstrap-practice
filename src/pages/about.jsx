import ReactMarkdown from "react-markdown";

const About = () => {
  return (
    <>
      <div className="main-container">
        <div className="right-panel">
          <div className="left-subpanel">
            <h1>About</h1>
            <p>
              The pseudocode shows the filtering that is applied to every job
              posting submitted to this platform. It follows directly from your
              spec.
            </p>
          </div>
          <div className="right-subpanel">
            <div className="attribute-section">
              <div className="two-columns">
                <div>
                  <ReactMarkdown>{`# Hello!

There are basically two tasks:

1) trial the service. (I'll drop you on the landing page with minimal info to see what happens.)
2) give me feedback (via a google form)



Please use a computer ( since there is no mobile UX yet.)

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
