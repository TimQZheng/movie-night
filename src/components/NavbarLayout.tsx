import {Button, Navbar} from "@nextui-org/react";
import LightDarkToggleSwitch from "@/components/LightDarkToggleSwitch";
import React, {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode;
};
export const NavbarLayout = ({children}: LayoutProps) => (
    <div>
        <Navbar isBordered={true}>
            <Navbar.Brand>
                <h1>Movie Night</h1>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight>
                <Navbar.Link href="#">Nominate</Navbar.Link>
                <Navbar.Link href="#">Vote</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <LightDarkToggleSwitch/>
                <Button>Log In with Discord</Button>
            </Navbar.Content>
        </Navbar>
        <main>{children}</main>
    </div>
);