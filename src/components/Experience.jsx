const Experience = () => {
  return (
    <div className="container">
      <h2>Work Experience</h2>
      <h3>PayPal, Software Developer</h3>
      <h3>Sep 2021 – Mar 2023</h3>
      <p>
        Came in fresh from University to develop backend microservices in Java
        Spring Boot. Responsibilities included:
      </p>
      <ul>
        <li>
          Main developer of event-based microservice written in Java Spring Boot
          that processes system notifications for PayPal’s Debit Cards.
        </li>
        <li>
          Cullaborated with cross-functional teams to implement, test and deploy
          40 web and mobile notifications related to Issuance and Payments.
        </li>
        <li>
          Participated in code review and worked with other engineering teams to
          migrate notifications away from their legacy components.
        </li>
        <li>
          Wrote unit and functional tests for backend components written with
          Core Java and Spring Boot, increasing test coverage by 30%, with
          Mockito, Junit and TestNG.
        </li>
      </ul>
      <h3>CargoAI, Web Developer Intern (University Internship)</h3>
      <h3> May – Sep 2020</h3>
      <ul>
        <li>
          Maintained and developed additional features in the company’s platform
          with AngularJS framework
        </li>
        <li>
          Maintained and developed backend endpoints according to REST API
          guidelines with Java Hibernate framework
        </li>
        <li>
          Written end-to-end tests using Jest and Puppeteer to test user flow
          and uncover bugs
        </li>
      </ul>
      <h2>Education</h2>
      <h3>Singapore University of Technulogy and Design (2018-2021)</h3>
      <p>BSc in Computer Science</p>
      <p>Relevant Coursework</p>
      <ul>
        <li>Data Structures and Algorithms</li>
        <li>Databases and Big Data Systems</li>
        <li>Elements of Software Construction</li>
      </ul>
    </div>
  );
};

export default Experience;
