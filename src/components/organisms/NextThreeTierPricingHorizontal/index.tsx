import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

const optionsStarter = [
  {
    id: 1,
    desc: 'Acesso a um grupo no WhatsApp\ncom dicas da área de TI, novidades na tecnologia,\nvagas de emprego e muito mais.'
  }
]

interface PackageTierProps {
  title: string
  options: Array<{ id: number; desc: string }>
  typePlan?: string
  checked?: boolean
  url: string
}
const PackageTier = ({ title, options, typePlan, url }: PackageTierProps) => {
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around'
      }}
      direction={{
        base: 'column',
        md: 'row'
      }}
      alignItems={{ md: 'center' }}
    >
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={id} whiteSpace={'pre-wrap'}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
        <Link href={url}>
          <Button
            color="white"
            bg={'next-primary'}
            _hover={{
              bg: 'next-purple.400',
              color: 'white'
            }}
          >
            QUERO CYNTHONIZAR
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}
export const NextThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around'
          }}
          direction={{
            base: 'column',
            md: 'row'
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%'
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>
              Escolha o momento certo <Text color="next-blue.400">Para Você</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%'
            }}
          >
            <Text textAlign={'center'}>Clique no botão e agende comigo sua mentoria.</Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier
          url={'https://calendly.com/senekcynthia/2'}
          title={'Start'}
          checked={true}
          options={optionsStarter}
        />
        {/* <Divider />
        <PackageTier
          url={`${optionsButtons}Plus`}
          title={'Plus'}
          checked={true}
          typePlan="R$77,70"
          options={optionsPlus}
        />
        <Divider />
        <PackageTier
          url={`${optionsButtons}Pro`}
          title={'Pro'}
          checked={true}
          typePlan="R$97,70"
          options={optionsPro}
        /> */}
      </Stack>
    </Box>
  )
}
