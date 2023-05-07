import {
  chakra,
  Container,
  Stack,
  Flex,
  Link,
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import NavBar from '../../Navbar';
import event1 from '../../../image/event1.svg'
import manrun from '../../../image/manrun.svg'

export default function About() {
  return (
    <>
      {/* <NavBar /> */}
      <Box id='about'
         top={'100px'}
         height={'755px'}
         backgroundColor={'#F3FFF1'}
         paddingBottom={'8px'}
      >
        <Container maxW={'1440px'}>
          <Box
           
          >
            <Text
                position={'absolute'}
                fontSize={'34px'}
               
                paddingTop={'97px'}
                paddingBottom={'37px'}
                left={'165px'}
                width={'1110px'}
                fontStyle={'normal'}
                fontWeight={'700'}
                fontFamily={'Karla'}
                textAlign={'center'}
                lineHeight={'101.9%'}
                color={'#272727'}

            >MEET OUR TEEM</Text>
            <Image
                h={'774px'}
                w={'1156px'}
                src={event1}
                top={'67px'}
                paddingLeft={'155px'}

            />
          </Box>
        </Container>
      </Box>
      <Box
         position={'absolute'}
        left={'0px'}
        top={'855px'}
        height={'1077px'}
        backgroundColor={'#FFFFFF'}
        
      >
        <Container maxW={'1440px'}>
            
            <Box>
                <Image
                    h={'441px'}
                    w={'619px'}
                    src={manrun}
                    left={'101px'}
                    top={'158px'}
                    paddingLeft={'101px'}
                />
            </Box>
            <Box>
                <Text
                     position={'absolute'}
                     top={'288px'}
                     left={'770px'}
                     width={'177px'}
                     height={'30px'}
                     fontSize={'20px'}
                     lineHeight={'150.9%'}
                     fontWeight={'700'}
                     fontFamily={'Karla'}
                     color={'#989898'}
                     letterSpacing={'0.28em'}
                >OUR HISTORY</Text>
                <Text
                    position={'absolute'}
                    top={'288px'}
                    left={'770px'}
                    width={'505px'}
                    height={'39px'}
                    fontSize={'32px'}
                    lineHeight={'123.4%'}
                    fontWeight={'700'}
                    fontFamily={'Karla'}
                    color={'#272727'}
                >Who we are</Text>
                <Text
                    position={'absolute'}
                    top={'341px'}
                    left={'770px'}
                    textAlign={'justify'}
                    width={'572px'}
                    height={'622px'}
                    fontSize={'24px'}
                    lineHeight={'150.9%'}
                    fontWeight={'300'}
                    fontFamily={'Karla'}
                >ZL Global Alliance Limited (ZLGA) is Nigeria's Leading provider of integrated environment solutions. The ZLGA brand is at the forefront of today's emerging technology, offering a diverse range of professional expertise supported by economically and environmentally sound principles. ZLGA is immersed in technical partnerships with Zoomlion (Ghana) group of companies, Ayudate Holdings (Budapest, Hungary) and several other world class international and local brand names. ZLGA isаsolution-oriented company committed to providing comprehensive solutions to fulfilling zero waste in the environment. We collect, transport, treat, recycle, recover and dispose of residential, commercial, medical and industrial waste. Our services are tailored to meet various waste management strategies and we are passionate about a safe and healthy environment. </Text>
            </Box>

        </Container>

      </Box>
    </>
  );
}
