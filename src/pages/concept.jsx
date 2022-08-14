import ReactMarkdown from "react-markdown";

const Concept = () => {
  return (
    <>
      {" "}
      <div className="plain">
        <ReactMarkdown>{`# Hello!

### Thanks for agreeing to test my new recruitment-tech concept.  It's called "Background Process"

### The service is for mid career software professionals.

There are basically two tasks:

1) trial the service. (I'll drop you on the landing page with minimal info to see what happens.)
2) give me feedback (via a google form)



Please use a computer ( since there is no mobile UX yet.)

Thank you!!!!
        
        
        `}</ReactMarkdown>

        <a href="/" target={"none"}>
          <button
            onClick={() =>
              alert(
                "You are being sent to the landing page now. Please time how long it takes you to complete this trial."
              )
            }
          >
            I'm ready to trial it >>
          </button>
        </a>
        <br />
        <br />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdMdQM4BnsL4baEWQy-HHGzSPdcDInio5jsPA0YE1kIzgyisQ/viewform?usp=sf_link"
          target={"none"}
        >
          <button>I'm ready to give feedback >></button>
        </a>
      </div>
    </>
  );
};

export default Concept;
