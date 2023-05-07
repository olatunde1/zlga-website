import { useState } from 'react';
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
import meetteam from '../../../image/meetteam.svg'
import manrun from '../../../image/manrun.svg'
import drbash from '../../../image/drbashorun.svg'
import ourlogo from '../../../image/ourlogo.svg'
import drbashicon from '../../../image/drbashicon.svg'
import empower from '../../../image/empower.svg'
import empowericon from '../../../image/empowericon.svg'
import Footer from '../../Footer'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      
      <p>
        {isReadMore ? text.slice(0, 248) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
      
    );
  };


export default function About() {
  return (
    <>
      {/* <NavBar /> */}
      <Box id='about'
         top={'120px'}
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
                position={'absolute'}
                h={'505px'}
                w={'1129px'}
                src={meetteam}
                top={'100px'}
                left={'185px'}
                borderRadius={'20px'}

            />
          </Box>
        </Container>
      </Box>
      <Box
         position={'absolute'}
        left={'0px'}
        top={'855px'}
        height={'1077px'}
        width={'100%'}
        
      >
        <Container maxW={'1440px'}>
            
            <Box>
                <Image
                    height={'441px'}
                    width={'619px'}
                    src={manrun}
                    left={'101px'}
                    top={'158px'}
                    paddingLeft={'101px'}
                />
            </Box>
            <Box>
                <Image
                    position={'absolute'}
                        h={'65px'}
                        w={'65px'}
                        src={ourlogo}
                        left={'770px'}
                        top={'32px'}
        
                    />
                <Text
                     position={'absolute'}
                     width={'200px'}
                     height={'30px'}
                     left={'770px'}
                     top={'100px'}
                     fontSize={'20px'}
                     fontStyle={'normal'}
                     lineHeight={'150.9%'}
                     fontWeight={'400'}
                     fontFamily={'Karla'}
                     color={'#989898'}
                     letterSpacing={'0.28em'}
                >OUR HISTORY</Text>
                <Text
                    position={'absolute'}
                    top={'144px'}
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
                    top={'200px'}
                    left={'770px'}
                    textAlign={'justify'}
                    width={'572px'}
                    height={'622px'}
                    fontSize={'24px'}
                    lineHeight={'150.9%'}
                    fontWeight={'300'}
                    fontFamily={'Karla'}
                >
                <ReadMore>
                ZL Global Alliance Limited (ZLGA) is Nigeria's Leading provider 
                of integrated environment solutions. The ZLGA brand is at the forefront 
                of today's emerging technology, offering a diverse range of professional 
                expertise supported by economically and environmentally sound principles. 
                ZLGA is immersed in technical partnerships with Zoomlion (Ghana) group of 
                companies, Ayudate Holdings (Budapest, Hungary) and several other world class 
                international and local brand names. ZLGA isаsolution-oriented company committed
                 to providing comprehensive solutions to fulfilling zero waste in the environment. 
                 We collect, transport, treat, recycle, recover and dispose of residential, commercial, 
                 medical and industrial waste. Our services are tailored to meet various waste management 
                 strategies and we are passionate about a safe and healthy environment.    
                </ReadMore></Text>
            </Box>

        </Container>

      </Box>
      
      <Box
         position={'absolute'}
        left={'0px'}
        top={'1632px'}
        height={'1173px'}
        width={'100%'}
        
      >
        <Container maxW={'1440px'}>
        <Box >
                <Image
                    position={'absolute'}
                        h={'65px'}
                        w={'65px'}
                        src={drbashicon}
                        left={'101px'}
                        top={'210px'}
        
                    />
                <Text
                     position={'absolute'}
                     width={'200px'}
                     height={'30px'}
                     left={'101px'}
                     top={'286px'}
                     fontSize={'20px'}
                     fontStyle={'normal'}
                     lineHeight={'150.9%'}
                     fontWeight={'400'}
                     fontFamily={'Karla'}
                     color={'#989898'}
                     letterSpacing={'0.28em'}
                >OUR CEO</Text>
                <Text
                    position={'absolute'}
                    top={'340px'}
                    left={'101px'}
                    width={'505px'}
                    height={'39px'}
                    fontSize={'32px'}
                    lineHeight={'123.4%'}
                    fontWeight={'700'}
                    fontFamily={'Karla'}
                    color={'#272727'}
                >Dr. Mrs Abiola Bashorun FCIN</Text>
                <Text
                    position={'absolute'}
                    top={'390px'}
                    left={'101px'}
                    textAlign={'justify'}
                    width={'765px'}
                    height={'802px'}
                    fontSize={'24px'}
                    lineHeight={'150.9%'}
                    fontWeight={'300'}
                    fontFamily={'Karla'}
                >
                <ReadMore>
                She holds a first Degree (1992) from Nigeria and an MBA in International Business Development from the United Kingdom (2006). She has extensive work experience that spans over twenty four (24, years at Barclays Bank of the United Kingdom, Citibank of Nigeria, Stanbic IBTC Bank, UBA, Ecobank, ETB, Access Bank and MasterCard Worldwide. She won the 2005 Eagle Award at Barclays Bank UK in Nigeria, she anchored the Retail Banking Business of UBA and Ecobank in Northern Nigeria. She also established and grew the Premier Banking Model, targeted at High Networth Individuals at Equitorial Trust Bank. She then proceeded to Access Bank PLC as the National Group Head of Retail Sales & Electronic Banking. From Access Bank, she was subsequently head-hunted by MasterCard Worldwide to assume the position of Vice President (Prepaid Products Management) for Sub Saharan Africa in line with World Bank reports on Africa as a major focus on Retail & Electronic Business for Emerging Markets. She has functioned for fourteen consecutive years at Senior Management and leadership levels, rising to the position of Assistant General Manager in the Banking Industry. She is a fellow of the Chartered Institute of Commerce of Nigeria (CICN).
                As a business development consultant, she has worked with several international institution to drive business growth and restructuring initiatives.    
                </ReadMore></Text>
            </Box>
            <Box>
                <Image
                    position={'absolute'}
                    height={'449.29px'}
                    width={'438.35px'}
                    src={drbash}
                    left={'892.82px'}
                    top={'219.38px'}
                    // paddingLeft={'886px'}
                />
            </Box>

        </Container>

      </Box>

      <Box
         position={'absolute'}
        left={'0px'}
        top={'2900px'}
        height={'1077px'}
        width={'100%'}
        
      >
        <Container maxW={'1440px'}>
            
            <Box>
                <Image
                    height={'441px'}
                    width={'619px'}
                    src={empower}
                    left={'101px'}
                    top={'158px'}
                    paddingLeft={'101px'}
                />
            </Box>
            <Box>
                <Image
                    position={'absolute'}
                        h={'65px'}
                        w={'65px'}
                        src={empowericon}
                        left={'770px'}
                        top={'32px'}
        
                    />
                <Text
                     position={'absolute'}
                     width={'298px'}
                     height={'30px'}
                     left={'770px'}
                     top={'110px'}
                     fontSize={'20px'}
                     fontStyle={'normal'}
                     lineHeight={'150.9%'}
                     fontWeight={'400'}
                     fontFamily={'Karla'}
                     color={'#989898'}
                     letterSpacing={'0.28em'}
                >OUR BENEFICIARIES</Text>
                <Text
                    position={'absolute'}
                    top={'144px'}
                    left={'770px'}
                    width={'505px'}
                    height={'78px'}
                    fontSize={'32px'}
                    lineHeight={'123.4%'}
                    fontWeight={'700'}
                    fontFamily={'Karla'}
                    color={'#272727'}
                >Empowering Community Development</Text>
                <Text
                    position={'absolute'}
                    top={'230px'}
                    left={'770px'}
                    textAlign={'justify'}
                    width={'572px'}
                    height={'305px'}
                    fontSize={'24px'}
                    lineHeight={'150.9%'}
                    fontWeight={'300'}
                    fontFamily={'Karla'}
                    color={'#989898'}
                >
                <ReadMore>
                Since the inception of the Company till this very day, 
                its people have always been its main driver of growth, 
                without whom it would have been impossible to guarantee 
                quality of service to its customers. Relying on the strongest 
                team of certified finance specialist and technical administrators, 
                we are right there for you, ready to provide you with solutions to the 
                most specialized integrated waste management issues.
                </ReadMore></Text>
            </Box>

        </Container>

      </Box>
      <Box
        position={'absolute'}
        top={'3500px'}
        width={'100%'} bg={useColorModeValue('#F3FFF1', '#F3FFF1')} 
      >
        <Footer />
      </Box>
     
    </>
  );
}
