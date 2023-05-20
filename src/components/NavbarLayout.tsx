import {Avatar, Image, Link, Navbar, Spacer, Text} from "@nextui-org/react";
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
                    <Navbar.Toggle/>
                    <Spacer/>
                    <Link href="./" style={{color: "inherit"}}>
                        <Text h1 size={"$4xl"}>
                            Movie Night
                        </Text>
                    </Link>
                </Navbar.Brand>
                <Navbar.Content hideIn="sm">
                    <Navbar.Link href="nominate" isActive={highlight === "Nominate"}>Nominate</Navbar.Link>
                    <Navbar.Link href="vote" isActive={highlight === "Vote"}>Vote</Navbar.Link>
                    <Navbar.Link href="admin" isActive={highlight === "Admin"}>Admin</Navbar.Link>
                </Navbar.Content>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Content hideIn="sm">
                    <LightDarkToggleSwitch/>
                </Navbar.Content>
                <Avatar src={avatarSrc}/>
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem><Link href="./">Home</Link></Navbar.CollapseItem>
                <Navbar.CollapseItem><Link href="./nominate">Nominate</Link></Navbar.CollapseItem>
                <Navbar.CollapseItem><Link href="./vote">Vote</Link></Navbar.CollapseItem>
                <Navbar.CollapseItem><Link href="./admin">Admin</Link></Navbar.CollapseItem>
                <Navbar.CollapseItem><LightDarkToggleSwitch/></Navbar.CollapseItem>
                <Spacer x={10}/>
                <Navbar.CollapseItem>
                    <Text>
                        This product uses the TMDB API but is not endorsed or certified by TMDB.
                    </Text>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <div>
                        <Image width={50}
                               height={50}
                               src="./tmdbLogo.svg"
                               alt="TMDB Logo"/>
                    </div>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
        <main>{children}</main>
    </div>
);
