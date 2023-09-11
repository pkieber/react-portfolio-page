import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

    return (
        <VStack
            bg="white"
            color="black"
            p={4}
            borderRadius="md"
            boxShadow="md"
            alignItems="flex-start"
            spacing={2}
        >
            <Image src={imageSrc} alt={title} maxW="100%" />
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <HStack>
                <Text>Read More</Text>
                <FontAwesomeIcon icon={faArrowRight} />
            </HStack>
        </VStack>
    )
};

export default Card;