import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'

export type NextHeroProps = {
  id?: string
  words?: string
  title?: string
  text?: string
  image?: string
  textButton?: string
  bg?: string
  url?: string
  width?: number
  height?: number
  alt?: string
}

export const NextHero = ({
  id,
  words,
  title,
  text,
  textButton,
  bg,
  url = '#',
  image = '/images/home/code_hero.png',
  width = 447,
  height = 559,
  alt = 'Imagem Hero'
}: NextHeroProps) => {
  return (
    <Container id={id} bg={bg} maxW="container.lg">
      <Stack align={'center'} direction={{ base: 'column', md: 'row-reverse' }}>
        <Flex flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            {words && (
              <Text pt={4} color={'next-gray'} textAlign={{ base: 'center', md: 'left' }}>
                {words}
              </Text>
            )}
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'white'} as={'span'}>
                {title}
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'} whiteSpace={'pre-wrap'}>
              {text}
            </Text>
            <Stack
              display={{ base: 'none', md: 'block' }}
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
            >
              <Link href={url}>
                <Button
                  color="white"
                  bg={'next-primary'}
                  _hover={{
                    bg: 'next-blue.400',
                    color: 'white'
                  }}
                >
                  {textButton}
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={alt} src={image} width={width} height={height} />
        </Flex>
        <Box display={{ base: 'block', md: 'none' }} pt={6} pb={12}>
          <Link href={url}>
            <Button
              color="white"
              bg={'next-primary'}
              _hover={{
                bg: 'next-blue.400',
                color: 'white'
              }}
            >
              {textButton}
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  )
}
