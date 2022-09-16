import { Box, Flex, ListItem, UnorderedList, Image, HStack, Spacer, } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLogo from "../../Components/Images/header-logo.png"
import FoodBG from "../../Components/Images/foodbg.png"
import { ClassNames } from '@emotion/react';

export default function () {

    return (
        <Box>
            <UnorderedList listStyleType='none'>
                <HStack spacing='2em' align='center' mr='2em'>
                    <NavLink to='/' >
                        <ListItem><Image src={HeaderLogo} alt='' /> </ListItem>
                    </NavLink>
                    <Spacer />
                    <NavLink>
                        <ListItem color='#FA4A0C'>Home</ListItem>
                    </NavLink>
                    <NavLink>
                        <ListItem>Products</ListItem>
                    </NavLink>
                    <NavLink>
                        <ListItem>FAQs</ListItem>
                    </NavLink>
                    <NavLink>
                        <ListItem>Contact</ListItem>
                    </NavLink>
                </HStack>
            </UnorderedList>
        </Box>
    )
}