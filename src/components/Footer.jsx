import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import Logo from '../image/logo.svg'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box width={'1440px'}  bg={useColorModeValue('#F3FFF1', '#F3FFF1')} position={'absolute'} top={'4200px'}>
    <Box
        paddingTop={"313px"}
        paddingBottom={"208px"}
     
      color={useColorModeValue('#989898', '#989898')}>
      <Container as={Stack} maxW={'1440px'} >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Image src={Logo} />
             
           
            <Text fontSize={'sm'}>
            ZL Global Alliance has the responsibility of ensuring that all relevant procedures and policies are complied with.
            </Text>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader >Our Services</ListHeader>
            <Link href={'#'}>School</Link>
            <Link href={'#'}>Medical Services</Link>
            <Link href={'#'}>ZL Store</Link>
            <Link href={'#'}>Environmental Management</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Resources</ListHeader>
            <Link href={'#'}>Contact Ust</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>FAQs</Link>
            <Link href={'#'}>Events</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Connect with us</ListHeader>
            <Link href={'#'}>LinkedIn</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>Facebook</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms and Conditions</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      
    </Box>
    <Box>
        <hr className='HR' />
        <Text
            paddingTop={"12px"}
            paddingBottom={"43px"}
            color={"#272727"}
            fontWeight={"400"}
            textAlign={"center"}
        >
            Copyright &copy; 2023 ZLGA, All Rights Reserved</Text>
    </Box>
   
    </Box>
  );
}