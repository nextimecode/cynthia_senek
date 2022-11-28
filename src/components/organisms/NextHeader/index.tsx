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

const NextHeader = ({
  logoSrc = '/images/logos/logo_nextime.svg',
  logoWidth = 146,
  logoHeight = 45,
  logoAlt = 'NeXTIME Logo',
  logoSubtitle,
  logoSubtitleColor = 'next-primary'
}: Props) => {
  return (
    <Box>
      <Container maxW="container.lg">
        <Center color={'gray.600'} minH={'70px'} alignItems={'center'}>
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

export default NextHeader
