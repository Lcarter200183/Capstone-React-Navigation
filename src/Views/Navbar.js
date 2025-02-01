import React from "react";
import { Link } from "react-router";

export function Navbar() {
    return (
        <>
        <nav>
            <Link>HOME</Link>
            <Link>GALLERY</Link>
            <Link>CONTACT</Link>
            <Link>ABOUT</Link>
        </nav>
        </>
    );
}