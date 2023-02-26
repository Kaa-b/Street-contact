import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import cls from "classnames";

import NavItem from "./NavItem";

import styles from "./navbar.module.css"

const MENU_LIST = [
    { text: "Entreprise", href: "/entreprise" },
    { text: "Particuliers", href: "/particulier" },
    { text: "Cadre Juridique", href: "/juridiction" },
    { text: "Formateur", href: "/formateur" },
];

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link className={styles.logoLink} href="/">
                    <div className={styles.logoWrapper}>
                        {/* <Image
                                src="/static/netflix.svg"
                                alt="Netflix logo"
                                width="128px"
                                height="34px"
                            /> */}
                        Logo
                    </div>
                </Link>
                <div className={styles.center}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                            className={styles.item}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
                <Link href={"/contact"}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;