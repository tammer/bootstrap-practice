const Feature = ({ title, copy, src }) => {
  return (
    <>
      <div className="feature">
        <div>{title}</div>
        <div>
          <img src={require(`./../assets/${src}`)} />
        </div>
        <div>{copy}</div>
      </div>
    </>
  );
};

const Content = ({ title, subtitle, body }) => {
  return (
    <>
      <div className="page">
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{body}</div>
      </div>
    </>
  );
};

const Page = ({ content }) => {
  return <div className="ssection">{content}</div>;
};

const feature_page = [
  [
    "Precision",
    "precision.png",
    <p>
      You spec the job(s) you would consider using 9 attributes: role, tech
      stack, salary, work model, location, industry, org type, org size and
      experential factors.
    </p>,
  ],
  [
    "Accuracy",
    "accuracy.png",
    <p>
      You will be notified of every opportunity that matches your spec. No more.
      No less.
    </p>,
  ],
  [
    "Anonymity",
    "anonymity.png",
    <p>
      Nobody can see your spec or anything about you or even know that you are
      using Background Process. You remain anonymous until you choose to meet a
      particular organization.
    </p>,
  ],
  [
    "24/7/365",
    "247.png",
    <p>
      Every minute of every day Background Process is checking job descriptins
      against your spec.
    </p>,
  ],
  [
    "Not a Recruiter",
    "nohh.png",
    <p>
      No headhunters work here. This is matching engine that ensures you see all
      the opportunities that interest you and none that don't. That's all it
      does.
    </p>,
  ],
  [
    "Not a Jobs Board",
    "nojb.png",
    <p>
      There are no job postings here. When an opportunity matches your spec, you
      will get a link to the original posting.
    </p>,
  ],
];

const Landing = () => {
  const body = (
    <div className="feature-grid">
      {feature_page.map((e, index) => {
        return (
          <Feature key={`trala-${index}`} title={e[0]} src={e[1]} copy={e[2]} />
        );
      })}
    </div>
  );
  const contents = [
    <div>
      <Content
        title={
          <h1 style={{ color: "white", marginBottom: "0px" }}>
            Welcome to Background Process
          </h1>
        }
        subtitle="Automated, totally passive job search for software professionals"
        body={
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                margin: "0 auto",
                paddingBottom: "100px",
                width: "300px",
              }}
            >
              <img width="100%" src={require(`./../assets/coder.png`)} />
            </div>
          </div>
        }
      />
    </div>,
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 2fr",
        // paddingTop: "20%",
        paddingBottom: "0%",
      }}
    >
      <div style={{ paddingTop: "5%" }}>
        <h2>
          Background Process monitors the job market for opportunities which
          match precise criteria you specify.
        </h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <img width="50%" src={require(`./../assets/radar.png`)} />
      </div>
    </div>,
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        // paddingTop: "20%",
        // paddingBottom: "20%",
      }}
    >
      <div style={{ padding: "50px", paddingLeft: "150px" }}>
        <img width="150px" src={require(`./../assets/notification.png`)} />
      </div>
      <div style={{ paddingTop: "90px" }}>
        <h2>Anytime there is match, you are notified.</h2>
      </div>
    </div>,

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        // paddingTop: "20%",
        // paddingBottom: "20%",
      }}
    >
      <div
        style={{ marginLeft: "-180px", padding: "50px", paddingLeft: "150px" }}
      >
        <img width="400px" src={require(`./../assets/mail.png`)} />
      </div>
      <div style={{ paddingTop: "90px" }}>
        <h2>
          If you are interested, we connect you with the hiring organization
          <br />
          (and drop out of the process).
        </h2>
      </div>
    </div>,

    <Content
      title={
        <h1 style={{ color: "white" }}>Key Aspects of Background Process</h1>
      }
      subtitle={null}
      body={body}
    />,
  ];
  return (
    <>
      <div className="scontainer">
        {contents.map((content, index) => {
          return <Page key={`lp-${index}`} content={content} />;
        })}
      </div>
    </>
  );
};

export default Landing;
