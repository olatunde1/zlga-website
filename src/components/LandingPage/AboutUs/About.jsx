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
import meetteam from '../../../image/eventsummary.png'
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
      <Box id='about'
        position={'absolute'}
        top={'100px'}
        height={{base:'400px', md:'755px'}}
        width={'100%'}
        backgroundColor={'#F3FFF1'}
      >
        <Container maxW={'1440px'}>
          <Box
           marginBottom={'116px'}
          >
            <Text
                height={'40px'}
                top={'77px'}
                position={'absolute'}
                fontSize={{base:'24px', md:'34px'}}
                left={{base:'100px', md:'165px'}}
                width={'1110px'}
                fontStyle={'normal'}
                fontWeight={'700'}
                fontFamily={'Karla'}
                textAlign={{base:'left', md:'center'}}
                lineHeight={'101.9%'}
                color={'#272727'}

            >MEET OUR TEAM</Text>
            <Image
                position={'absolute'}
                h={{base:'60%', md:'505px'}}
                w={{base:'800px', md:'1129px'}}
                src={meetteam}
                top={'134px'}
                left={{base:'0px', md:'155px'}}
                borderRadius={{base:'none', md:'20px'}}
            />
          </Box>
        </Container>
      </Box>
      <Box
        position={'absolute'}
        left={'0px'}
        top={{base:'600px', md:'955px'}}
        height={'1077px'}
        width={'100%'}
        
      >
        <Container maxW={'1440px'}>
            
            <Box>
                <Image
                    height={{base:'200px', md:'441px'}}
                    width={{base:'400px', md:'619px'}}
                    src={manrun}
                    left={{base:'0px', md:'101px'}}
                    top={'158px'}
                    paddingLeft={{base:'0px', md:'101px'}}
                    marginTop={{base:'100px'}}
                />
            </Box>
            <Box>
                <Image
                  display={{base:'none'}}
                    position={'absolute'}
                        h={'65px'}
                        w={'65px'}
                        src={ourlogo}
                        left={{base:'0px', md:'770px'}}
                        top={{base:'240px', md:'32px'}}
        
                    />
                <Text
                     position={'absolute'}
                     width={'200px'}
                     height={'30px'}
                     left={{base:'20px', md:'770px'}}
                     top={{base:'340px', md:'100px'}}
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
                    top={{base:'380px', md:'144px'}}
                    left={{base:'20px', md:'770px'}}
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
                    top={{base:'440px', md:'200px'}}
                    left={{base:'20px', md:'770px'}}
                    textAlign={'justify'}
                    width={{base:'380px', md:'572px'}}
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
        top={{base:'2150px', md:'1832px'}}
        height={'1173px'}
        width={'100%'}
        
      >
        <Container maxW={'1440px'}>
        <Box >
                <Image
                 display={{base:'none'}}
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
                     left={{base:'20px', md:'101px'}}
                     top={{base:'740px', md:'286px'}}
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
                    top={{base:'780px', md:'340px'}}
                    left={{base:'20px', md:'101px'}}
                    width={'505px'}
                    height={'39px'}
                    fontSize={{base:'18px', md:'32px'}}
                    lineHeight={'123.4%'}
                    fontWeight={'700'}
                    fontFamily={'Karla'}
                    color={'#272727'}
                >Dr. Mrs Abiola Bashorun FCIN</Text>
                <Text
                    position={'absolute'}
                    top={{base:'830px', md:'390px'}}
                    left={{base:'20px', md:'101px'}}
                    textAlign={'justify'}
                    width={{base:'380px', md:'765px'}}
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
                    left={{base:'0px', md:'892.82px'}}
                    top={'219.38px'}
                    // paddingLeft={'886px'}
                />
            </Box>

        </Container>

      </Box>

      <Box
         position={'absolute'}
        left={'0px'}
        top={{base:'4830px', md:'3100px'}}
        height={'1077px'}
        width={'100%'}
        
      >
        <Container maxW={'1440px'}>
            
            <Box>
                <Image
                    height={'441px'}
                    width={'619px'}
                    src={empower}
                    left={{base:'0px', md:'101px'}}
                    top={'158px'}
                    // paddingLeft={'101px'}
                />
            </Box>
            <Box>
                <Image
                  display={{base:'none'}}
                    position={'absolute'}
                        h={'65px'}
                        w={'65px'}
                        src={empowericon}
                        left={{base:'0px', md:'770px'}}
                        top={{base:'0px', md:'32px'}}
        
                    />
                <Text
                     position={'absolute'}
                     width={'298px'}
                     height={'30px'}
                     left={{base:'20px', md:'770px'}}
                     top={{base:'420px', md:'110px'}}
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
                    left={{base:'20px', md:'770px'}}
                    top={{base:'460px', md:'144px'}}
                    width={{base:'300px', md:'505px'}}
                    height={'78px'}
                    fontSize={{base:'24px', md:'32px'}}
                    lineHeight={'123.4%'}
                    fontWeight={'700'}
                    fontFamily={'Karla'}
                    color={'#272727'}
                >Empowering Community Development</Text>
                <Text
                    position={'absolute'}
                    
                    left={{base:'20px', md:'770px'}}
                    top={{base:'550px', md:'230px'}}
                    textAlign={'justify'}
                    width={{base:'380px', md:'572px'}}
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
        top={{base:'6000px', md:'3750px'}}
        width={'100%'} bg={useColorModeValue('#F3FFF1', '#F3FFF1')} 
      >
        <Footer />
      </Box>
     
    </>
  );
}
