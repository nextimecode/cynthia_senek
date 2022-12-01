import Image from 'next/image'
import { NextLayout } from '../NextLayout'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import { NextThreeTierPricingHorizontal } from '../../organisms/NextThreeTierPricingHorizontal'

export const NextTemplateLandingPage = ({ items }: any) => {
  return (
    <NextLayout isLogged={false} title={items.layout.title}>
      <Container bg={'#FDFF9E'} maxW="container.lg" pb={6} my={4} rounded={'3xl'}>
        <Box textAlign={'center'}>
          <Heading size="lg">A ARTE</Heading>
          <Heading size="lg">AS EMOÇÕES</Heading>
          <Heading size="lg">O AUTOCONHECIMENTO </Heading>
          <Heading size="lg">A ESPIRITUALIDADE</Heading>
          <Heading size="lg">A SEXUALIDADE</Heading>
          <Heading size="lg">E A CRIATIVIDADE SÃO</Heading>
          <Heading size="lg" color={'next-purple.400'}>
            CANAIS DE COMUNICAÇÃO{' '}
          </Heading>
          <Heading size="lg">ENTRE CÉU E TERRA.</Heading>
          <Heading size="lg">
            QUAL{' '}
            <Text color={'next-blue.400'} as={'span'}>
              FREQUÊNCIA
            </Text>{' '}
            VOCÊ ESTÁ SINTONIZADO EM SUA VIDA?
          </Heading>
          <Heading size="lg">
            NÃO TEMOS TODOS O DOM DA{' '}
            <Text color={'next-yellow.400'} as={'span'}>
              CRIATIVIDADE
            </Text>
            ?
          </Heading>
          <Heading size="lg">
            PORQUE ALGUMAS PESSOAS NÃO CONSEGUEM{' '}
            <Text color={'next-green.400'} as={'span'}>
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
          <Heading size="lg">
            ABRIMOS CONEXÃO COM A{' '}
            <Text color={'next-red.200'} as={'span'}>
              FONTE SUPERIOR
            </Text>
            .
          </Heading>
          <Heading size="lg" color={'next-blue.400'}>
            ARTISTAS SÃO
          </Heading>
          <Heading size="lg" color={'next-purple.400'}>
            ANTENAS
          </Heading>
          <Heading size="lg" color={'next-blue.400'}>
            DEUS É A
          </Heading>
          <Heading size="lg" color={'next-yellow.400'}>
            FREQUÊNCIA
          </Heading>
        </Box>
        <Center flexDirection={'column'} py={4}>
          <Image src="/images/logos/cy_logo_degrade.png" alt="Cynthia" width={200} height={200} />
        </Center>
        <NextThreeTierPricingHorizontal />
      </Container>
    </NextLayout>
  )
}
