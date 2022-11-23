import Image from 'next/image'
import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Container,
  Button,
  useColorModeValue,
  HStack,
  useColorMode,
  Collapse,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'
import {
  ChevronRightIcon,
  SunIcon,
  MoonIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon
} from '@chakra-ui/icons'
import { FaInstagram } from 'react-icons/fa'
import { NavItem } from '../../../types/LandingPageItems'

import { useRouter } from 'next/router'

import Link from 'next/link'

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: 'gray.900' }}>
      <Link href={href}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </Box>
  )
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Blog',
    href: '/blog'
  }
]

const DesktopNav = ({ navItems = NAV_ITEMS }: Props) => {
  const router = useRouter()
  const linkColor = useColorModeValue('black', 'white')
  const linkHoverColor = 'next-primary'
  const popoverContentBgColor = 'gray.800'

  return (
    <Stack direction={'row'} spacing={4}>
      {navItems.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link href={navItem.href ?? '#'}>
                <Button
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={router.pathname === navItem.href ? linkHoverColor : linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor
                  }}
                >
                  {navItem.label}
                </Button>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text fontWeight={600} color={'white'} _hover={{ color: 'next-primary' }}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.700'}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const MobileNav = ({ navItems = NAV_ITEMS }: Props) => {
  return (
    <Stack bg={'gray.800'} p={4} display={{ md: 'none' }}>
      {navItems.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

type Props = {
  isLogged?: boolean
  navItems?: Array<NavItem>
  logoSrc?: string
  logoWidth?: number
  logoHeight?: number
  logoAlt?: string
  logoSubtitle?: string
  logoSubtitleColor?: string
}

const NextHeader = ({
  navItems = NAV_ITEMS,
  logoSrc = '/images/logos/logo_nextime.svg',
  logoWidth = 146,
  logoHeight = 45,
  logoAlt = 'NeXTIME Logo',
  logoSubtitle,
  logoSubtitleColor = 'next-primary'
}: Props) => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box borderBottom={1} borderStyle={'solid'} borderColor={'gray.700'}>
      <Container maxW="container.lg">
        <Flex color={'gray.600'} minH={'70px'} align={'center'}>
          <Flex flex={{ base: 1 }} display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center' }} alignItems={'center'}>
            <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} />
            {logoSubtitle && (
              <Text fontSize={{ base: 'lg', lg: 'xl' }} color={logoSubtitleColor}>
                {logoSubtitle}
              </Text>
            )}
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav navItems={navItems} />
          </Flex>

          <Stack flex={{ base: 1 }} justify={'flex-end'} direction={'row'} spacing={6}>
            <HStack spacing={{ base: 3, md: 6 }}>
              <Link href={'https://www.instagram.com/nextimetec/'} target={'_blank'}>
                <Icon
                  color="next-gray"
                  _hover={{ color: 'next-primary' }}
                  as={FaInstagram}
                  w={6}
                  h={6}
                />
              </Link>
              <Button aria-label="Definir tema" onClick={toggleColorMode}>
                {colorMode === 'light' ? (
                  <Flex gap={2}>
                    <MoonIcon color={'black'} />
                  </Flex>
                ) : (
                  <Flex gap={2}>
                    <SunIcon color={'white'} />
                  </Flex>
                )}
              </Button>
            </HStack>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav navItems={navItems} />
        </Collapse>
      </Container>
    </Box>
  )
}

export default NextHeader
