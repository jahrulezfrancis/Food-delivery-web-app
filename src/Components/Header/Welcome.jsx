import { Box, Button, Heading, HStack, VStack, Text, Image, useMediaQuery, Flex, } from '@chakra-ui/react'
import React from 'react'
import FoodBG from "../../Components/Images/foodbg.png"


export const TwoBTN = () => {
    const [isLargerThan1280] = useMediaQuery('(max-width: 500px)')
    return (
        <Flex direction={isLargerThan1280 ? 'column' : 'row'} m='1em' spacing='2em'>
            <Button m='1em' bgColor='#FA4A0C' bgRepeat='no-repeat' objectFit='cover'>Playstore</Button>
            <Button m='1em'>App Store</Button>
        </Flex>
    )
}


export default function Introsec() {
    const [isLargerThan1280] = useMediaQuery('(max-width: 500px)')
    return (
        <Box bgImage={ isLargerThan1280 ? null : FoodBG} height='auto' minH={'30em'}>
            <VStack p='3em' spacing='1em'>
                <Text color={isLargerThan1280 ? '#737373' : 'white'} fontFamily='Montserrat' fontSize='1.5em' fontWeight={700} align='center'>Food App</Text>
                <Heading color={isLargerThan1280 ? '#252B42' : 'white'} textAlign='center'>
                    Why stay hungry when <br />
                    you can order form Bella Onojie
                </Heading>
                <Text color={isLargerThan1280 ? '#737373' : 'white'} fontFamily='Montserrat' fontSize='1.5em' fontWeight={500} align='center'>
                    Download the bella onoje’s food app now on</Text>
                <TwoBTN />
            </VStack>
        </Box>
    )
}