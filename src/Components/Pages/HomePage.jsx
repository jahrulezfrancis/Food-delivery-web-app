import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import Navigation from '../Header/Navigation';
import Introsec from '../Header/Welcome';

export default function HomePage() {
    return (
        <Stack>
            <Navigation />
            <Introsec />
        </Stack>
    )
}