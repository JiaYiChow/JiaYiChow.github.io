import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Sidebar } from "semantic-ui-react";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Sidebar as={Menu} inverted vertical visible>
      <Menu.Item>Chow Jia Yi</Menu.Item>
      <Menu.Item as={Link} to="/" name="home" active={activeItem === "home"} />
      <Menu.Item
        as={Link}
        to="/skills"
        name="Skills"
        active={activeItem === "skills"}
        onClick={handleItemClick}
      />
      <Menu.Item
        as={Link}
        to="/experience"
        name="Experience"
        active={activeItem === "experience"}
        onClick={handleItemClick}
      />
      <Menu.Item
        as={Link}
        to="/projects"
        name="Projects"
        active={activeItem === "projects"}
        onClick={handleItemClick}
      />
      <Menu.Item
        as={Link}
        to="/contact"
        name="Contact"
        active={activeItem === "contact"}
        onClick={handleItemClick}
      />
    </Sidebar>
  );
};

export default MenuBar;
