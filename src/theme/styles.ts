import { mode } from '@chakra-ui/theme-tools'
const styles = {
  global: (props: any) => ({
    body: {
      fontFamily: 'body',
      color: mode('black', 'white')(props),
      bg: mode('gray.300', 'next-dark.100')(props),
      lineHeight: 'base'
    }
  })
}

export default styles
