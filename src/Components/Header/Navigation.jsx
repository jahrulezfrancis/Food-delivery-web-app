import {
    Box, Stack, ListItem, UnorderedList, Image, HStack, Spacer,
    Menu, MenuButton, MenuList, MenuItem, IconButton, MenuDivider
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLogo from "../../Components/Images/header-logo.png"
import FoodBG from "../../Components/Images/foodbg.png"
import { GiHamburgerMenu } from "react-icons/gi"
import MobileLogo from "../../Components/Images/mobile-header-logo.png"

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
        <Box w='100%' display={{ sm: 'block', md: 'block', lg: 'none' }}>
            <HStack w='100%'>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<GiHamburgerMenu />}
                        variant='none' fontSize='1.5em'
                    />
                    <MenuList>
                        <MenuItem>
                            <NavLink>
                                Home
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink>
                                Products
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink>
                                FAQs
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink>
                                Contact
                            </NavLink>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Stack align='end' justify='center' w='100%' p='.5em'>
                    <NavLink>
                        <Image src={MobileLogo} alt='header logo' />
                    </NavLink>
                </Stack>
            </HStack>
        </Box>
    )
}