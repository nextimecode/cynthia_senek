import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Box, Container, Heading, HStack, Icon, SimpleGrid, Text } from '@chakra-ui/react'

import { FaInstagram, FaWhatsapp, FaMailBulk } from 'react-icons/fa'
import NextimeSvg from '../../atoms/NextimeSvg'

export type NextFooterProps = {
  bg?: 'next-primary' | undefined
}

export const NextFooter = ({ bg = 'next-primary' }: NextFooterProps) => {
  return (
    <footer>
      <Box bg={bg} pt={12} pb={12}>
        <Container maxW="container.md">
          <SimpleGrid columns={[1, 2]} spacing={10}>
            <Box>
              <Heading fontWeight={600} color="next-dark.400">
                Fale com a gente:
              </Heading>
              <HStack spacing={6} pt={4} pb={10}>
                <Link
                  href={
                    'mailto:cynthonizar@cynthonizar.com?subject=Mensagem via site do Cynthonizar&body=Olá,%20CY Senek'
                  }
                  target={'_blank'}
                >
                  <Icon
                    color="next-dark.400"
                    _hover={{ color: 'white' }}
                    as={FaMailBulk}
                    w={16}
                    h={16}
                  />
                </Link>
                <Link
                  href={
                    'https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20Pedro!%0AGostaria%20de%20participar%20da%20mentoria.'
                  }
                  target={'_blank'}
                >
                  <Icon
                    color="next-dark.400"
                    _hover={{ color: 'white' }}
                    as={FaWhatsapp}
                    w={16}
                    h={16}
                  />
                </Link>
                <Link href={'https://www.instagram.com/cynthiasenek/'}>
                  <Icon
                    color="next-dark.400"
                    _hover={{ color: 'white' }}
                    as={FaInstagram}
                    w={16}
                    h={16}
                  />
                </Link>
              </HStack>
              <HStack spacing={6} pb={12}>
                <Link href={'https://www.nextime.com.br/'}>
                  <Box pe={6} pt={2}>
                    <Text fontSize="sm" color={'next-dark.400'}>
                      from
                    </Text>
                    <NextimeSvg size={2} />
                  </Box>
                </Link>
              </HStack>
            </Box>
            <Box>
              <Image
                src="/images/logos/logo_footer.png"
                alt="NeXTIME Logo"
                width={300}
                height={300}
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </footer>
  )
}
