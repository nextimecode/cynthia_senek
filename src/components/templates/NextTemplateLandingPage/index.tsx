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
      <Heading display={['none', 'block']} size={'lg'} textAlign={'center'}>
        Quem é Cynthia Senek?
      </Heading>
      <Box
        backgroundImage={'url(/images/bg_folder.png)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        px={4}
        py={[4, 0]}
        display={['block', 'flex']}
      >
        <Box bg={'black'} color={'white'} rounded={'3xl'} p={4} my={[0, 12]}>
          <Text fontSize={'xs'}>
            Ao longo dos seus 20 anos de carreira, após ter feito inúmeros cursos e técnicas de
            atuação, workshops, novelas, filmes e séries, percebeu que o processo de criatividade
            está diretamente conectado ao processo emocional. A mentoria artística de
            autoconhecimento que Cynthia desenvolve vem na contra-mão da grande parte do mercado
            artístico que incentiva artistas à buscarem técnica. Aumentar a capacidade de ouvir sua
            intuição artística na frequência da sua sabedoria interior é o objetivo principal do seu
            trabalho como mentora.
          </Text>
        </Box>
        <Box display={'flex'} alignItems={['center', 'end']} ps={[8]} minW={{ md: '300px' }}>
          <Heading display={['block', 'none']} size={'md'} alignContent={'center'}>
            Quem é Cynthia Senek?
          </Heading>
          <Image src="/images/cy_fundo-removebg.png" alt="Cynthia" width={200} height={200} />
        </Box>
        <Box bg={'black'} color={'white'} rounded={'3xl'} p={4} my={[0, 12]}>
          <Text fontSize={'xs'}>
            Cynthia Senek atriz e mentora artística, nascida em cima dos palcos na cidade do teatro:
            Curitiba, Paraná. Fez sua estreia na televisão ainda criança em 2002. Integrou o elenco
            de novelas na Rede Globo como Sete vidas, MALHAÇÃO e a Dona do pedaço. Atuou na primeira
            série brasileira produzida pela NETFLIX no Brasil &quot;3%&quot; e logo depois em
            &quot;Temporada de Verão&quot;, ambas no elenco principal. No cinema, seu trabalho mais
            recente é o longa-metragem &quot;Deserto Particular&quot;, de Aly Muritiba que foi o
            representante do Brasil no Oscar em 2022. Seu futuro em 2023 promete bons lançamentos
            com a série “Ta tudo certo” a ser lançada pela Disney e a série “Musa Música” a ser
            lançada na Globoplay. Ambas também atuando no elenco principal.
          </Text>
        </Box>
      </Box>
    </NextLayout>
  )
}
