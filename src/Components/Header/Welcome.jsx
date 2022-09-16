import { Box, Button, Heading, HStack, VStack, Text, Image, Divider, Center } from '@chakra-ui/react'
import React from 'react'
import FoodBG from "../../Components/Images/foodbg.png"


const TwoBTN = () => {
    return (
        <HStack spacing='2em'>
            <Button bgColor='#FA4A0C' bgRepeat='no-repeat' objectFit='cover'>Playstore</Button>
            <Button>App Store</Button>
        </HStack>
    )
}


export default function Introsec() {
    return (
        <Box bgImage={FoodBG} height='auto' minH={'30em'}>
            <VStack p='3em' spacing='1em'>
                <Text color='white' fontFamily='Montserrat' fontSize='1.5em' fontWeight={700} align='center'>Food App</Text>
                <Heading textAlign='center' color='white'>
                    Why stay hungry when <br />
                    you can order form Bella Onojie
                </Heading>
                <Text color='white' fontFamily='Montserrat' fontSize='1.5em' fontWeight={500} align='center'>Download the bella onoje’s food app now on</Text>
<TwoBTN />
            </VStack>
        </Box>
    )
}