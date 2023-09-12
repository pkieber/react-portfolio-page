import React, { useState } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
    const { submit } = useSubmit();
    const { onOpen } = useAlertContext();
    const [isLoading, setIsLoading] = useState(false);


    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            type: '',
            comment: '',
        },

        onSubmit: async (values) => {
            setIsLoading(true);

            const response = await submit(values);

            if (response && response.type === "success") {
                const message = `Thanks for your submission ${values.firstName}, we will get back to you`;
                onOpen(response.type, message);
                formik.resetForm();
            } else {
                const errorMessage =
                    response && response.message ? response.message : "Something went wrong, please try again later!";
                onOpen("error", errorMessage);
            }

            setIsLoading(false);
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            comment: Yup.string().required('Message is required'),
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="contactme-section">
                    Contact me
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                <Select
                                    id="type"
                                    name="type"
                                    value={formik.values.type}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="hireMe">Freelance project proposal</option>
                                    <option value="openSource">
                                        Open source consultancy session
                                    </option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                                <FormLabel htmlFor="comment">Your message</FormLabel>
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    height={250}
                                    value={formik.values.comment}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                            </FormControl>
                            <Button
                                type="submit"
                                colorScheme="purple"
                                width="full"
                                isLoading={isLoading}
                            >
                                {isLoading ? "Submitting..." : "Submit"}
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default ContactMeSection;
