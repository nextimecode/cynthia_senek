import Image from 'next/image'
import { Box, Text, Container, Center } from '@chakra-ui/react'

import { NavItem } from '../../../types/LandingPageItems'

type Props = {
  isLogged?: boolean
  navItems?: Array<NavItem>
  logoSrc?: string
  logoWidth?: number
  logoHeight?: number
  logoAlt?: string
  logoSubtitle?: string
  logoSubtitleColor?: string
}

export const NextHeader = ({
  logoSrc = '/images/logos/logo_nextime.svg',
  logoWidth = 350,
  logoHeight = 100,
  logoAlt = 'Cynthia Senek Logo',
  logoSubtitle,
  logoSubtitleColor = 'next-primary'
}: Props) => {
  return (
    <Box
      backgroundImage={'url(/images/bg_header.png)'}
      backgroundSize={'contain'}
      backgroundPosition={'center center'}
      h={'150px'}
    >
      <Container maxW="container.lg">
        <Center color={'gray.600'} minH={'70px'} alignItems={'center'} pt={6}>
          <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} />
          {logoSubtitle && (
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={logoSubtitleColor}>
              {logoSubtitle}
            </Text>
          )}
        </Center>
      </Container>
    </Box>
  )
}
