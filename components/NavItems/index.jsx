import "./style.css";

const NavItems = ({ navItems }) => {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.id}>
          <a href={item.href} className="nav-items">
            {item.items}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavItems;
