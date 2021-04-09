import React from "react";
import Link from "next/link";
import classes from "./nav.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <center>
              <Link href="/events">Browse All Events</Link>
            </center>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
