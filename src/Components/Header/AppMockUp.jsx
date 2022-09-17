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
        <Flex direction={{ base: 'column', md: 'column', lg: 'row' }} >
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
            <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w='100%' justify='space-evenly' align='center' pb='.5em' spacing='7em'>
                <Image src={HeaderLogo} alt='footer logo' />
                <HStack spacing='2em' color='#FA4A0C'>
                    <BsFacebook size='2em' />
                    <BsTwitter size='2em' />
                    <BsInstagram size='2em' />
                </HStack>
                <Text>Copywright 2020 Designed by 7thWeb</Text>
            </Flex>
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
                <HStack ml='0em' mt={{ base: '-5em', md: '-10em', lg: '-17em' }} justify='center' w='100%'
                    align='center' spacing={{ base: '-16em', md: '-18em', lg: '-15em' }}>
                    <Image src={MobileMockRed} alt='' />
                    <Image src={MobileMockWhite} alt='' />
                </HStack>
                <Center w='60%'>
                    <Divider orientation='horizontal' size='80%' />
                </Center>
                <Heading>How The App Works</Heading>
                <MockupTemp image={MockSec1} heading='Create an account' lineone='Create/Login to an existing'
                    linetwo='account to get started' line2one='An account is created with your email' line2two='and a desired password' />

                <Flex direction={{ sm: 'column', md: 'column', lg: 'row' }} p='2em' flexWrap='wrap'>
                    <VStack justify='center' align='center' spacing='1em'>
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