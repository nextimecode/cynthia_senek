import Link from 'next/link'

import { Text, Flex } from '@chakra-ui/react'

import NextimeSvg from '../../atoms/NextimeSvg'

export type NextFooterProps = {
  bg?: 'next-primary' | undefined
}

const NextFooter = () => {
  return (
    <footer>
      <Flex justifyContent={'center'} mb={4}>
        <Link href={'https://www.nextime.com.br/'}>
          <Text textAlign={'center'} fontSize="sm" color={'black'}>
            from
          </Text>
          <NextimeSvg size={2} />
        </Link>
      </Flex>
    </footer>
  )
}

export default NextFooter
