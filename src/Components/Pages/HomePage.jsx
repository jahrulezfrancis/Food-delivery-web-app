import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import AppMockUp from '../Header/AppMockUp';
import Navigation, { MobileMenu } from '../Header/Navigation';
import Introsec from '../Header/Welcome';

export default function HomePage() {
    return (
        <Stack>
            <Navigation />
            <MobileMenu />
            <Introsec />
            <AppMockUp />
        </Stack>
    )
}