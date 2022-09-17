import {
    Box, Flex, ListItem, UnorderedList, Image, HStack, Spacer,
    Menu, MenuButton, MenuList, MenuItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLogo from "../../Components/Images/header-logo.png"
import FoodBG from "../../Components/Images/foodbg.png"

export default function () {

    return (
        <Box display={{ sm: 'none', md: 'none', lg: 'block' }}>
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


export function MobileMenu() {
    return (
        <Box display={{sm: 'none', md: 'none', lg: 'block'}}>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem icon={<AddIcon />} command='⌘T'>
                        New Tab
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        New Window
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                        Open Closed Tab
                    </MenuItem>
                    <MenuItem icon={<EditIcon />} command='⌘O'>
                        Open File...
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}