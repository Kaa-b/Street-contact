import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

import NavItem from './NavItem';

import styles from './navbar.module.css';

const MENU_LIST = [
  { text: 'Entreprises', href: '/entreprise' },
  { text: 'Particuliers', href: '/particulier' },
  { text: 'Cadre Juridique', href: '/juridiction' },
  { text: 'Formateur', href: '/formateur' },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/logo.svg"
              alt="Logo"
              width="48"
              height="56"
            />
          </div>
        </Link>
        <div className={styles.center}>
          {MENU_LIST.map((menu, idx) => (
            <div
              key={menu.text}
              className={styles.item}
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactWrapper}>
            <p>amar31@hotmail.fr</p>
            <p>+33 6 84 41 73 28</p>
          </div>
          <div className={styles.verticalLine}></div>
          <Link href={'/contact'} className={styles.item}>
            Contact
          </Link>
        </div>
        <div className={styles.menuWrapper}>
          <Image
            src="/static/menu.svg"
            alt="menu icon"
            width="30"
            height="30"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;