//general
import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
//routes
import { mainRoutes } from "../../routes/mainRoutes";
//components
import MenuControl from "../MenuControl/MenuControl";
//styles
import styles from "./Header.module.scss";
//assets
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as SignInIcon } from "../../assets/icons/signIn.svg";
import { ReactComponent as SignUpIcon } from "../../assets/icons/signUp.svg";
// import { ReactComponent as SignOutIcon } from "../../assets/icons/signOut.svg";
// import { ReactComponent as AccountIcon } from "../../assets/icons/account.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChangeMenuState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <LogoIcon className={styles.logoImage} />
          <h1 className={styles.logoText}>NextArticle</h1>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.links}>
            {mainRoutes.map((route) => (
              <Link key={route.id} className={styles.link} to={route.path}>
                {route.name}
              </Link>
            ))}
            {/* <li>
              <a className={styles.link} href={"/#"}>
                Main
              </a>
            </li>
            <li>
              <a className={styles.link} href={"/#"}>
                Articles
              </a>
            </li>
            <li>
              <a className={styles.link} href={"/#"}>
                About
              </a>
            </li>
            <li>
              <a className={styles.link} href={"/#"}>
                Contact
              </a>
            </li> */}
          </ul>

          <ul className={cn(styles.links, { [styles.auth]: true })}>
            <li>
              <a className={styles.link} href={"/#"}>
                Sign in <SignInIcon />
              </a>
            </li>
            <li>
              <a className={styles.link} href={"/#"}>
                Sign up <SignUpIcon />
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.menuControlContainer}>
          <MenuControl
            isOpen={isOpen}
            width={30}
            height={34}
            color={"#565656"}
            strokeWidth={3}
            onClick={handleChangeMenuState}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
