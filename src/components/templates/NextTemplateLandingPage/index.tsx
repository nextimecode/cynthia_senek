import Image from 'next/image'
import { NextLayout } from '../NextLayout'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import { NextThreeTierPricingHorizontal } from '../../organisms/NextThreeTierPricingHorizontal'

export const NextTemplateLandingPage = ({ items }: any) => {
  return (
    <NextLayout isLogged={false} title={items.layout.title}>
      <Container maxW="container.lg" pb={6} my={4} rounded={'3xl'}>
        <Box textAlign={'center'} color={'white'}>
          <Center flexDirection={'column'} pt={4} pb={8}>
            <Image src="/images/logos/cy_logo_degrade.png" alt="Cynthia" width={450} height={450} />
          </Center>
          <Heading size="lg">A ARTE</Heading>
          <Heading size="lg">AS EMOÇÕES</Heading>
          <Heading size="lg">O AUTOCONHECIMENTO </Heading>
          <Heading size="lg">A ESPIRITUALIDADE</Heading>
          <Heading size="lg">A SEXUALIDADE</Heading>
          <Heading size="lg">E A CRIATIVIDADE SÃO</Heading>
          <Heading size="lg" color={'next-green.400'}>
            CANAIS DE COMUNICAÇÃO{' '}
          </Heading>
          <Heading size="lg" pb={12}>
            ENTRE CÉU E TERRA.
          </Heading>
          <Heading size="lg" pb={12}>
            QUAL{' '}
            <Text color={'next-orange.200'} as={'span'}>
              FREQUÊNCIA
            </Text>{' '}
            VOCÊ ESTÁ SINTONIZADO EM SUA VIDA?
          </Heading>
          <Heading size="lg" pb={12}>
            NÃO TEMOS TODOS O DOM DA{' '}
            <Text color={'next-yellow.400'} as={'span'}>
              CRIATIVIDADE
            </Text>
            ?
          </Heading>
          <Heading size="lg" pb={12}>
            PORQUE ALGUMAS PESSOAS NÃO CONSEGUEM{' '}
            <Text color={'next-purple.400'} as={'span'}>
              SINTONIZAR
            </Text>{' '}
            COM ELA?
          </Heading>
          <Heading size="lg">
            QUANDO SINTONIZADOS COM A{' '}
            <Text color={'next-red.200'} as={'span'}>
              SABEDORIA INTERIOR
            </Text>
            ,
          </Heading>
          <Heading size="lg" pb={12}>
            ABRIMOS CONEXÃO COM A{' '}
            <Text color={'next-red.200'} as={'span'}>
              FONTE SUPERIOR
            </Text>
            .
          </Heading>
          <Heading size={['2xl', '3xl']} color={'next-dark.200'}>
            ARTISTAS SÃO
          </Heading>
          <Heading size={['2xl', '3xl']} color={'next-dark.200'}>
            ANTENAS
          </Heading>
          <Heading size={['2xl', '3xl']} color={'next-yellow.400'}>
            DEUS É A
          </Heading>
          <Heading size={['2xl', '3xl']} color={'next-yellow.400'}>
            FREQUÊNCIA
          </Heading>
        </Box>
        <NextThreeTierPricingHorizontal />
      </Container>
    </NextLayout>
  )
}
