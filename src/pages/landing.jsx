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
      Organizations continually submit requirements for roles they need to fill.
      Every one is checked against your spec.
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
      There are noo job postings here. When an opportunity matches your spec,
      you will get a link to the original posting.
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
    <Content
      title={<h1>Welcome to Background Process</h1>}
      subtitle=""
      body={
        <div style={{ paddingTop: "100px", paddingBottom: "200px" }}>
          <h2>
            Background Process monitors the job market for opportunities which
            match criteria you specify.
          </h2>
        </div>
      }
    />,

    <Content
      title={<h1>Key Aspects of Background Process</h1>}
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
