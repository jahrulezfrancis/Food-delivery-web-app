import { Box, Flex, Heading, VStack, HStack, Text, Center, Divider, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import MobileMockRed from "../../Components/Images/mobile-mockup-red.png"
import MobileMockWhite from "../../Components/Images/mobile-mockup-white.png"
import MockSec1 from "../../Components/Images/MockSec1.png"
import MockSec2 from "../../Components/Images/MockSec2.png"
import MockSec3 from "../../Components/Images/MockSec3.png"
import { TwoBTN } from './Welcome';
import HeaderLogo from "../../Components/Images/header-logo.png"
import BottomSecBG from "../../Components/Images/bottom-sec-bg.png"
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs"

function MockupTemp(props) {
    return (
        <Flex direction={{ sm: 'column', md: 'column', lg: 'row' }} >
            <Image src={props.image} alt='' />
            <VStack justify='center' align='start' spacing='1em'>
                <Text color='#FA4A0C'>{props.heading}</Text>
                <Heading fontFamily='Montserrat' color='#252B42'>
                    {props.lineone} <br />
                    {props.linetwo}
                </Heading>
                <Text fontFamily='Montserrat' color='#737373'>
                    {props.line2one} <br />
                    {props.line2two}
                </Text>
            </VStack>
        </Flex>
    )
}


const Footer = () => {
    return (
        <Box>
            <HStack w='100%' justify='space-evenly' align='center' spacing='7em'>
                <Image src={HeaderLogo} alt='footer logo' />
                <HStack spacing='2em' color='#FA4A0C'>
                    <BsFacebook size='2em' />
                    <BsTwitter size='2em' />
                    <BsInstagram size='2em' />
                </HStack>
                <Text>Copywright 2020 Designed by 7thWeb</Text>
            </HStack>
        </Box>
    )
}


const BottomSec = () => {
    return (
        <Box bg='linear-gradient(0deg, rgba(37, 43, 66, 0.4), rgba(37, 43, 66, 0.4)), url(.jpg)' bgImage={BottomSecBG} 
        bgRepeat='no-repeat' w='100%' height='auto' minH={'25em'}>
            <VStack p={{ sm: '1em', md: '2em', lg: '10em' }} spacing='1.5em'>
                <Heading textAlign='center' color='white'>
                    Download the app now
                </Heading>
                <Text color='white' fontFamily='Montserrat' fontSize='1.5em' fontWeight={500} align='center'>
                    Available on your favorite store. Start your premium experience now
                </Text>
                <TwoBTN />
            </VStack>
        </Box>
    )
}

export default function AppMockUp() {
    return (
        <Box>
            <VStack>
                <HStack mt={{sm:'-15em', md: '-15em', lg:'-17em'}} justify='center' spacing={{ sm: '-13em', md: '-15em', lg: '-15em' }}>
                    <Image src={MobileMockRed} alt='' />
                    <Image src={MobileMockWhite} alt='' />
                </HStack>
                <Center w='60%'>
                    <Divider orientation='horizontal' size='80%' />
                </Center>
                <Heading>How The App Works</Heading>
                <MockupTemp image={MockSec1} heading='Create an account' lineone='Create/Login to an existing'
                    linetwo='account to get started' line2one='An account is created with your email' line2two='and a desired password' />

                <Flex direction={{ sm: 'column', md: 'column', lg: 'row' }} p='2em'>
                    <VStack justify='center' align='start' spacing='1em'>
                        <Text color='#FA4A0C'>Explore Varieties</Text>
                        <Heading fontFamily='Montserrat' color='#252B42'>
                            Shop for your favorites <br />
                            meal as e dey hot.
                        </Heading>
                        <Text fontFamily='Montserrat' color='#737373'>
                            Shop for your favorite meals or drinks <br />
                            and enjoy while doing it.
                        </Text>
                    </VStack>
                    <Image src={MockSec2} alt='' />
                </Flex>

                <MockupTemp image={MockSec3} heading='Create an account' lineone='Create/Login to an existing'
                    linetwo='account to get started' line2one='An account is created with your email' line2two='and a desired password' />
                <BottomSec />
                <Footer />
            </VStack>
        </Box>
    )
}