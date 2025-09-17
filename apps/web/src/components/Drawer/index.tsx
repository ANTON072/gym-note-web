import styles from "./styles.module.css";

export const Drawer = () => {
  const menuList = [
    { name: "Today's Note", href: "/today" },
    { name: "Daily Note", href: "/daily" },
    { name: "Register Exercise", href: "/exercises" },
    { name: "Logout", href: "#" },
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
          <a href="/contact" className="tap">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
