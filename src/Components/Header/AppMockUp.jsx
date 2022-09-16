import { Box, Flex, Heading, VStack, HStack, Text, Center, Divider, Image } from '@chakra-ui/react';
import React from 'react';
import MobileMockRed from "../../Components/Images/mobile-mockup-red.png"
import MobileMockWhite from "../../Components/Images/mobile-mockup-white.png"
import MockSec1 from "../../Components/Images/MockSec1.png"
import MockSec2 from "../../Components/Images/MockSec2.png"
import MockSec3 from "../../Components/Images/MockSec3.png"


function MockupTemp(props) {
    return (
        <Flex direction={{ sm: 'column', md: 'column', lg: 'row' }}>
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

export default function AppMockUp() {
    return (
        <Box>
            <VStack>
                <HStack mt='-17em' justify='center' spacing={{ sm: '-10em', md: '-10em', lg: '-15em' }}>
                    <Image src={MobileMockRed} alt='' />
                    <Image src={MobileMockWhite} alt='' />
                </HStack>
                <Center w='60%'>
                    <Divider orientation='horizontal' size='80%' />
                </Center>
                <Heading>How The App Works</Heading>
                <MockupTemp image={MockSec1} heading='Create an account' lineone='Create/Login to an existing'
                    linetwo='account to get started' line2one='An account is created with your email' line2two='and a desired password' />

                <Flex direction={{ sm: 'column', md: 'column', lg: 'row' }}>
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
                    <Image src={MockSec1} alt='' />
                </Flex>

                <MockupTemp image={MockSec1} heading='Create an account' lineone='Create/Login to an existing'
                    linetwo='account to get started' line2one='An account is created with your email' line2two='and a desired password' />
            </VStack>
        </Box>
    )
}