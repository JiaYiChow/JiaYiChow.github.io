const Projects = () => {
  return (
    <div className="container">
      <h2>My Projects</h2>
      <h4>DoveJobs (Build For Good 2023)</h4>
      <ul>
        <li>
          Developed a chatbot using TypeScript, OpenAI, and Supabase that
          assists the elderly in generating resumes, which are then forwarded to
          employers via email.
        </li>
      </ul>
      <h4>kePa</h4>
      <ul>
        <li>
          Wrote a web app in React and Node.js that allows users to play the
          Chinese pipa online using the keyboard
        </li>
        <li>
          Set up a Jenkins instance running on GCP that automatically builds and
          deploys the application when a pull request is created
        </li>
      </ul>
      <h4>Book Review Web Application</h4>
      <ul>
        <li>
          Worked in a team of 4 to create a full-stack web application that
          provides book reviews
        </li>
        <li>
          Designed and developed REST APIs with Python Flask framework, which
          interacts with the React frontend
        </li>
        <li>
          Automated the building and deployment of the application into EC2
          instances using AWS CloudFormation
        </li>
      </ul>
    </div>
  );
};

export default Projects;
