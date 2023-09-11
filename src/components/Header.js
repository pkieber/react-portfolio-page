import React, { useEffect, useRef } from "react";
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

const Header = () => {
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

    return (
        <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
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
                <a href="mailto: kieberp@yahoo.com" style={{ marginRight: '16px' }}>
                <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://github.com/pkieber" style={{ marginRight: '16px' }}>
                <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/pkieber" style={{ marginRight: '16px' }}>
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.medium.com" style={{ marginRight: '16px' }}>
                <FontAwesomeIcon icon={faMedium} />
                </a>
                <a href="https://stackoverflow.com">
                <FontAwesomeIcon icon={faStackOverflow} />
                </a>
            </nav>
            <nav>
                <HStack spacing={8}>
                <Link to="/#projects-section" onClick={handleClick("projects")}>
                    Projects
                </Link>
                <Link to="/#contactme-section" onClick={handleClick("contact-me")}>
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
