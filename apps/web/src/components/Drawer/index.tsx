import styles from "./styles.module.css";

export const Drawer = () => {
  const menuList = [
    { name: "Daily Note", href: "#" },
    { name: "Register Exercise", href: "#" },
    { name: "Logout", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className={styles.root}>
      <ul>
        {menuList.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="tap">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <hr className={styles.divider} />
      <ul>
        <li>
          <a href="#" className="tap">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
