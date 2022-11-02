import image from "./../assets/vortex.png";

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
        paddingTop: "20%",
        paddingBottom: "10%",
      }}
    >
      <div
        style={{
          width: "10%",
          margin: "0 auto",
        }}
      >
        <img
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          src={require(`./../assets/notification.png`)}
        />
      </div>
      <div style={{ paddingTop: "10px" }}>
        <h2>Anytime there is match, you are notified.</h2>
      </div>
    </div>,

    <div>
      <div
        style={{
          width: "40%",
          margin: "0 auto",
          paddingRight: "50px",
        }}
      >
        <img
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          src={require(`./../assets/mail.png`)}
        />
      </div>
      <div style={{ paddingTop: "10px" }}>
        <h2>
          If you are interested, we connect you with the hiring organization
        </h2>
      </div>
      <br />
    </div>,

    <Content
      title={
        <h1 style={{ color: "white" }}>Key Aspects of Background Process</h1>
      }
      subtitle={null}
      body={body}
    />,
    <div
      style={{
        height: "700px",
        backgroundImage: `url(${image})`,
        fontSize: "30px",
        lineHeight: "40px",
      }}
    >
      <div style={{ padding: "40px", paddingBottom: "0px", fontSize: "60px" }}>
        Background Process is a Black Hole
      </div>
      <div style={{ padding: "40px", paddingTop: "10px", fontSize: "40px" }}>
        No data you put here ever leaves this platform.
      </div>
      <div style={{ padding: "40px" }}>
        We use the data you share to find matches. <br /> That's all.
      </div>
      <div style={{ padding: "40px", width: "750px", fontSize: "22px" }}>
        When there is a match that you approve, we introduce you to the hiring
        organization. Even then we don't share a single byte of your data.
        (Whatever you decide to share, you'll send yourself, off platform.)
      </div>
    </div>,
    <Content
      title={
        <h1 style={{ color: "white" }}>
          Background Process is Better for Everyone
        </h1>
      }
      subtitle={null}
      body={
        <div
          style={{
            paddingBottom: "100px",
            paddingRight: "14%",
            paddingLeft: "14%",
            fontSize: "2em",
          }}
        >
          <p style={{ textAlign: "center", marginBottom: "40px" }}>
            When a job opportunity matches your spec <br /> <b>and</b> <br />{" "}
            you choose to connect with the hiring org:
          </p>
          <p>
            You meet an organization offering exactly what you are looking for.
          </p>
          <div style={{ textAlign: "center", padding: "40px" }}>
            <img width="250px" src={require("./../assets/yingyang.png")} />
          </div>
          <p>
            The organization meets someone who brings exactly what they are
            looking for.
          </p>
        </div>
      }
    />,
    <Content
      body={
        <>
          <div
            className="align-center"
            style={{ marginTop: "-100px", paddingBottom: "300px" }}
          >
            <h1>Passive, Totally Automated Job Search</h1>
            <br />
            <br />
            <br />
            <h2>Ready to spawn your background process?</h2>
            <br />
            <br />
            <br />
            <br />
            <a href="/requirements">
              <button className="bp-button">Try it&raquo;</button>
            </a>
          </div>
        </>
      }
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
