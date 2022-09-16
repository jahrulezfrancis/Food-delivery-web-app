import { Box, Flex, Heading, VStack, HStack, Text, Center, Divider, Image } from '@chakra-ui/react';
import React from 'react';
import MobileMockRed from "../../Components/Images/mobile-mockup-red.png"
import MobileMockWhite from "../../Components/Images/mobile-mockup-white.png"


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
                <Flex direction={{ sm: 'column', md: 'column', lg: 'row' }}>
            
                </Flex>
            </VStack>
        </Box>
    )
}