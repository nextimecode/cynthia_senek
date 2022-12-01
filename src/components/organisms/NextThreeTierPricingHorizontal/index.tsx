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
    desc: 'Processo seletivo aberto JAN/FEV/MAR 2023\nMentoria em grupo e individual.'
  }
]

interface PackageTierProps {
  title: string
  options: Array<{ id: number; desc: string }>
  typePlan?: string
  checked?: boolean
  url: string
}
const PackageTier = ({ options, typePlan, url }: PackageTierProps) => {
  return (
    <Stack p={3} py={3} alignItems={{ md: 'center' }}>
      <List spacing={3}>
        {options.map((desc, id) => (
          <ListItem key={id} whiteSpace={'pre-wrap'} textAlign={'center'}>
            <ListIcon as={FaCheckCircle} color="next-red.200" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
        <Link href={url}>
          <Button
            mt={6}
            color="white"
            bg={'next-purple.400'}
            _hover={{
              bg: 'next-green.400',
              color: 'white'
            }}
          >
            REALIZAR INSCRIÇÃO
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}
export const NextThreeTierPricingHorizontal = () => {
  return (
    <Box pt={[16, 20]} pb={8} px={5}>
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
            <Heading size={'lg'} color={'white'}>
              Quer sintonizar seu artista em 2023?
            </Heading>
          </Stack>
        </Stack>
        <Divider />
        {/* <PackageTier
          url={'https://calendly.com/senekcynthia/2'}
          title={'Start'}
          checked={true}
          options={optionsStarter}
        /> */}
        <PackageTier
          url={'https://my.forms.app/form/6387bdbab200f15a82d2388d'}
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
