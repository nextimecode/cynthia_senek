import { Button, ButtonProps, Flex, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'

function randomColor() {
  return Math.floor(Math.random() * 11)
}

const colorList: string[] = [
  '#db3340',
  '#f815bd',
  '#a33da3',
  '#7842a3',
  '#2657ab',
  '#2cad59',
  '#a2cf4a',
  '#fee300',
  '#faa413',
  '#f87826',
  '#f55542'
]

export function NextClickMe(props: ButtonProps) {
  const [colorCode, setColorCode] = useState(colorList[randomColor()])

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center" bgColor={`${colorCode}`}>
      <Button
        {...props}
        px={8}
        bg={useColorModeValue('#151f21', 'gray.900')}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg'
        }}
        onClick={() => setColorCode(colorList[randomColor()])}
      >
        CYNTHONIZAR
      </Button>
    </Flex>
  )
}
