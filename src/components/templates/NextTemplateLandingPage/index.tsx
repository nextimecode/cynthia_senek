import Image from 'next/image'
import { NextLayout } from '../NextLayout'
import { Center, Container } from '@chakra-ui/react'
import { NextThreeTierPricingHorizontal } from '../../organisms/NextThreeTierPricingHorizontal'

export const NextTemplateLandingPage = ({ items }: any) => {
  return (
    <NextLayout isLogged={false} title={items.layout.title}>
      <Container maxW="container.lg" pb={6} bg={'white'} my={4}>
        <Center py={4}>
          <Image src="/images/logos/cy_logo_degrade.png" alt="Cynthia" width={200} height={200} />
        </Center>
        <NextThreeTierPricingHorizontal />
      </Container>
    </NextLayout>
  )
}
