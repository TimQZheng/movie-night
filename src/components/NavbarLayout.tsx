import {Avatar, Navbar, Spacer, Link} from "@nextui-org/react";
import LightDarkToggleSwitch from "@/components/LightDarkToggleSwitch";
import React, {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode;
    highlight: string;
    avatarSrc: string
};
export const NavbarLayout = ({children, highlight, avatarSrc}: LayoutProps) => (
    <div>
        <Navbar isBordered={true} maxWidth="fluid">
            <Navbar.Content variant="underline">
                <Navbar.Brand>
                    <Link href="/" style={{color: "inherit"}}>
                        <h1>Movie Night</h1>
                    </Link>
                </Navbar.Brand>
                <Spacer/>
                <Navbar.Link href="nominate" isActive={highlight==="Nominate"}>Nominate</Navbar.Link>
                <Navbar.Link href="vote" isActive={highlight==="Vote"}>Vote</Navbar.Link>
                <Navbar.Link href="admin" isActive={highlight==="Admin"}>Admin</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <LightDarkToggleSwitch/>
                <Avatar src={avatarSrc}/>
            </Navbar.Content>
        </Navbar>
        <main>{children}</main>
    </div>
);