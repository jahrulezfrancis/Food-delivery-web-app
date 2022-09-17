import { Box, Flex, Heading, VStack, HStack, Text, Center, Divider, Image, useMediaQuery, Stack } from '@chakra-ui/react';
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
    const [isLargerThan1280] = useMediaQuery('(max-width: 500px)')

    return (
        <Flex direction={isLargerThan1280 ? 'column' : 'row'}
            justify={isLargerThan1280 ? 'center' : 'start'} align='center'>
            <Stack p='0em' bg='green' justifyContent='center'>
                <Image src={props.image} alt='' justifyContent='center' />
            </Stack>
            <VStack justify={isLargerThan1280 ? 'start' : 'center'} align={isLargerThan1280 ? 'center' : 'start'} spacing='1em'>
                <Text color='#FA4A0C' textAlign={isLargerThan1280 ? 'center' : 'start'}>{props.heading}</Text>
                <Heading fontFamily='Montserrat' color='#252B42' textAlign={isLargerThan1280 ? 'center' : 'start'}>
                    {props.lineone} <br />
                    {props.linetwo}
                </Heading>
                <Text textAlign={isLargerThan1280 ? 'center' : 'start'} fontFamily='Montserrat' color='#737373'>
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
                <HStack spacing='2em' color='#FA4A0C' p='2em'>
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
    const [isLargerThan1280] = useMediaQuery('(max-width: 500px)')

    return (
        <Box bgColor={ isLargerThan1280 ? '#252B42' : 'linear-gradient(0deg, rgba(37, 43, 66, 0.4), rgba(37, 43, 66, 0.4)), url(.jpg)'} bgImage={ isLargerThan1280 ? undefined : BottomSecBG}
            bgRepeat='no-repeat' w='100%' height='auto' minH={'25em'}>
            <VStack p={ isLargerThan1280 ? '1em' : '10em' } spacing='1.5em' align='center' justify='center'>
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
    const [isLargerThan1280] = useMediaQuery('(max-width: 500px)')

    return (
        <Box>
            <VStack align='center' w='100%'>
                <HStack ml='0em' mt={isLargerThan1280 ? '1em' : '-15em'} justify='center' w='100%'
                    align='center' spacing={isLargerThan1280 ? '-10em' : '-18em'}>
                    <Image src={MobileMockRed} alt='' ml='-1em' p='-10em'/>
                    <Image src={MobileMockWhite} alt='' boxSize={ isLargerThan1280 ? '20em' : 'auto' } />
                </HStack>
                <Center w='60%'>
                    <Divider orientation='horizontal' size='80%' />
                </Center>
                <Heading>How The App Works</Heading>
                <MockupTemp image={MockSec1} heading='Create an account' lineone='Create/Login to an existing'
                    linetwo='account to get started' line2one='An account is created with your email' line2two='and a desired password' />

                <Flex direction={{ sm: 'column', md: 'column', lg: 'row' }} p='2em' flexWrap='wrap'>
                    <VStack justify='center' align={isLargerThan1280 ? 'center' : 'start'} spacing='1em'>
                        <Text color='#FA4A0C' textAlign={isLargerThan1280 ? 'center' : 'start'} >Explore Varieties</Text>
                        <Heading textAlign={isLargerThan1280 ? 'center' : 'start'} fontFamily='Montserrat' color='#252B42'>
                            Shop for your favorites <br />
                            meal as e dey hot.
                        </Heading>
                        <Text textAlign={isLargerThan1280 ? 'center' : 'start'} fontFamily='Montserrat' color='#737373'>
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