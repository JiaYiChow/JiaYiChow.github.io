import { Icon } from "semantic-ui-react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h2>Get in Touch</h2>
      <div>
        <Icon name="mail outline" size="huge" />
        <p>jcjiayichow@gmail.com</p>
      </div>
      <div>
        <Icon name="github" size="huge" />
        <p>https://github.com/JiaYiChow</p>
      </div>
      <div>
        <Icon name="linkedin" size="huge" />
        <p>https://www.linkedin.com/in/jia-yi-chow/</p>
      </div>
    </div>
  );
};

export default Contact;
