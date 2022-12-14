import React from 'react'
import { Box, Button, Container, Flex, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

export interface NextCallToActionProps {
  id: string
  bg?: string
  title: string
  text: string
  textButton: string
  image: string
  url: string
  width: number
  height: number
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

export const NextCallToAction = ({
  id,
  bg,
  title,
  text,
  image,
  url,
  width,
  height,
  textButton = '< Faça um orçamento />',
  directionMd = 'row',
  directionBase = 'column'
}: NextCallToActionProps) => {
  return (
    <Container id={id} bg={bg} maxW="container.lg" pb={[12, 20]}>
      <Stack align={'center'} direction={{ base: directionBase, md: directionMd }} gap={8}>
        <Flex flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Text
              lineHeight={1.33}
              fontWeight={600}
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            >
              {title}
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} whiteSpace={'pre-wrap'}>
              {text}
            </Text>
            <Box display={{ base: 'none', md: 'block' }}>
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
        </Flex>
        <Flex py={2} maxW={'30rem'} flex={1}>
          <Image alt={title} src={image} width={width} height={height} />
        </Flex>
        <Box display={{ base: 'block', md: 'none' }}>
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
