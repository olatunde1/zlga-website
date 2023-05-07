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
    <Box width={'100%'} bg={useColorModeValue('#F3FFF1', '#F3FFF1')} position={'absolute'} >
    <Box
        paddingTop={"118px"}
        paddingBottom={"208px"}
     >
      <Container as={Stack} maxW={'1440px'} >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack paddingRight={'115px'} spacing={6}>
            <Image src={Logo} />
             
           
            <Text
              width={'438px'}
              fontSize={'18px'}
              left={'100px'}
              fontFamily={'Karla'}
              fontWeight={'300'}
              color={'#989898'}
            
            >
            ZL Global Alliance has the responsibility of ensuring that all relevant procedures and policies are complied with.
            </Text>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader  >Our Services</ListHeader>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>School</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Medical Services</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>ZL Store</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Environmental Management</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Resources</ListHeader>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Contact Ust</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Careers</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>FAQs</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Events</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Connect with us</ListHeader>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>LinkedIn</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Twitter</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Instagram</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Facebook</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Privacy Policy</Link>
            <Link color={'#989898'} fontSize={'18px'} fontFamily={'Karla'} href={'#'}>Terms and Conditions</Link>
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