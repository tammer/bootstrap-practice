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
2) give me feedback (via a survey monkey form)

This exercise will take between 10 an 15 minutes.

Please use a computer ( since there is no mobile UX yet.)

Thank you!!!!
        
        
        `}</ReactMarkdown>

        <a href="/" target={"none"}>
          <button>I'm ready to trial it >></button>
        </a>
        <br />
        <br />
        <a href="#" target={"none"}>
          <button>I'm ready to give feedback >></button>
        </a>
      </div>
    </>
  );
};

export default Concept;
