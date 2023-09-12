import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: kieberp@yahoo.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/pkieber",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/pkieber",
    },
    {
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];


const SocialIcon = ({ icon, url }) => (
    <a href={url} style={{ marginRight: '16px'}}>
        <FontAwesomeIcon icon={icon} size="2x" />
    </a>
);


const Header = () => {
    const [scrollingUp, setScrollingUp] = useState(true);
    const prevScrollY = useRef(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollingUp(currentScrollY < prevScrollY.current);
        prevScrollY.current = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const translateY = scrollingUp ? "0" : "-200px";

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const socialLinks = socials.map((social, index) => (
        <SocialIcon key={index} {...social} />
    ));

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            transform={`translateY(${translateY})`}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        {socialLinks}
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <Link to="/#projects-section" onClick={handleClick("projects")}>
                                Projects
                            </Link>
                            <Link to="/#contactme-section" onClick={handleClick("contactme")}>
                                Contact Me
                            </Link>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
