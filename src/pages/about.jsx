import ReactMarkdown from "react-markdown";

const About = () => {
  return (
    <>
      <div className="main-container">
        <div className="right-panel">
          <div className="left-subpanel">
            <h1>About Background Process</h1>
          </div>
          <div className="right-subpanel">
            <div className="attribute-section">
              <div className="two-columns">
                <div>
                  <ReactMarkdown>{`# About

Background Process is a platform that allows you to spec the job(s) you want. You do this using 9 attributes:
role, tech stack, salary, work model, location, industry, org type, org size and experiential factors.

Hiring organizations use those same attributes to describe the roles they are trying to fill.
When a job's attributes match your desired attributes, we email you the job description.
If you like what you see, we connect you to the hiring manager. We don't do anything more.
Background Process is a matching engine, not a recruiter or a jobs board.

# Process Control, Privacy and Anonymity

The idea of Background Process is to allow software professionals to take control of how they are recruited. The platform allows you to keep your spec completely private and remain continually anonymous while the engine surfaces jobs that you may be interested in. You only come out of anonymity to a specific company that you have decided you would like to meet.

# Jobs

This platform is new.  As we grow the number of software professionals on the platform we are also growing the number of hiring orgs using the service. We currently work with 5 large recruitment organizations to source opportunities for our users. That is growing quickly.

# Contact

tammer@tammer.com
        
        
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
