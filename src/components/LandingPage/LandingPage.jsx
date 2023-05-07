import {
  chakra,
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Button,
  useColorModeValue,
  background,
} from '@chakra-ui/react';
import NavBar from '../Navbar';
import image1 from '../../image/partner/im1.jpg';
import image2 from '../../image/partner/im2.jpg';
import image3 from '../../image/partner/im3.jpg';
import image4 from '../../image/partner/im4.jpg';
import image5 from '../../image/partner/im5.jpg';
import image6 from '../../image/partner/im6.jpg';
import image7 from '../../image/partner/im7.jpg';
import image8 from '../../image/partner/im8.jpg';
import image9 from '../../image/partner/im9.jpg';
import image10 from '../../image/partner/im10.jpg';
import image11 from '../../image/partner/im11.jpg';
import image12 from '../../image/partner/im12.jpg';
import image13 from '../../image/partner/im13.jpg';
import image14 from '../../image/partner/im14.jpg';
import image15 from '../../image/partner/im15.jpg';
import image16 from '../../image/partner/im16.jpg';
import image17 from '../../image/partner/im17.jpg';
import Marquee from 'react-fast-marquee';
import Slider from './Slider';
import rec1 from '../../image/Rectangle1.svg';
import rec2 from '../../image/Rectangle2.svg';
import transform from '../../image/tranfromvideo.svg';
import dr from '../../image/dr.svg';
import fila from '../../image/fila.svg';
import tobi from '../../image/tobi.svg';
import Footer from '../Footer';
import EventSlider from '../../components/EventSlider';
import radioImage from '../../image/radioImage.png';
import radioPlayer from '../../image/radioPlayer.svg';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import anime from '../anime.json';

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Box
        position={'relative'}
        backgroundColor={'#F3FFF1'}
        paddingTop={'5rem'}
        paddingBottom={'162px'}
        paddingLeft={'96px'}
      >
        <Container maxW={'1440px'}>
          <Stack direction={{ base: 'column-reverse', md: 'row' }}>
            <Stack
              // direction="column"
              align={'center'}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
            >
              <Heading
                lineHeight={1.1}
                textAlign="left"
                fontSize={{ base: '3xl', sm: '4xl', lg: '72px' }}
                fontFamily={'karla'}
                fontWeight={'800'}
                width={{ base: '100%', md: '679px' }}
              >
                <Text as={'span'} color={'#000000'}>
                  The Environmental Management
                </Text>
                <br />
                <Text as={'span'} color={'#106804'} fontFamily={'karla'}>
                  Experts.
                </Text>
              </Heading>
              <Text
                textAlign="left"
                color={'#989898'}
                maxWidth={{ base: '100%', md: '657px' }}
                fontSize={'24px'}
                fontFamily={'karla'}
              >
                We are an alliance that covers a wide range of activities that
                affects the lifestyle of individuals and communities in their
                immediate environment.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Text>7000+ Employees</Text>
                <Text>95% Customers Satisfaction</Text>
                <Text>90,000+ Tonnes of Trash Recycled</Text>
              </Stack>
            </Stack>

            <Player
              autoplay
              loop
              src={anime}
              style={{ height: '300px', width: '300px' }}
            >
              <Controls
                visible={false}
                buttons={['play', 'repeat', 'frame', 'debug']}
              />
            </Player>
          </Stack>
        </Container>
      </Box>
      <Box position={'relative'}>
        <Marquee>
          <Image
            opacity="opacity(1) drop-shadow(0 0 gray)"
            // position={{base:'none', md:'absolute'}}
            height="37px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '152px' }}
            // left={'-33px'}
            // top={'42px'}
            marginTop={'42px'}
            marginBottom={'41px'}
            marginRight={'87px'}
            src={image1}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="86px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '233px' }}
            // left={'-33px'}
            // top={'42px'}
            marginTop={'17px'}
            marginBottom={'17px'}
            src={image2}
            marginRight={'87px'}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="86px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '233px' }}
            // left={'-33px'}
            // top={'42px'}
            marginTop={'17px'}
            marginBottom={'17px'}
            marginRight={'87px'}
            src={image3}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="95.79px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '140px' }}
            // left={'-33px'}
            // top={'42px'}
            marginTop={'12px'}
            marginBottom={'12.21px'}
            marginRight={'87px'}
            src={image4}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="62px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '169px' }}
            // left={'-33px'}
            // top={'42px'}
            marginTop={'29px'}
            marginBottom={'29px'}
            marginRight={'87px'}
            src={image5}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image6}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image7}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image8}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image9}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image10}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image11}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image12}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image13}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image14}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image15}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image16}
          />
          <Image
            // position={{base:'none', md:'absolute'}}
            height="59.97px"
            // width="100%"
            objectFit="contain"
            maxWidth={{ base: '100%', md: '151px' }}
            // left={'-33px'}
            // top={'42px'}
            marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image17}
          />
        </Marquee>
      </Box>
      <Slider />

      <Box
        width={'1440px'}
        height={'1014px'}
        top={'1899px'}
        position={'absolute'}
      >
        <Container maxW={'1440px'}>
          <Stack direction={{ base: 'column', md: 'row' }}>
            <Stack>
              <Heading>
                <Text
                  position="absolute"
                  width="196px"
                  height="54px"
                  marginLeft={'622px'}
                  top="74px"
                  fontSize={{ base: '3xl', sm: '4xl', lg: '36px' }}
                  fontFamily={'karla'}
                  lineHeight={'150.9%'}
                  fontStyle={'normal'}
                  fontWeight={'800'}
                  color={'#272727'}
                >
                  ZLGA TECH
                </Text>
                <Text
                  position="absolute"
                  width="1238px"
                  height="72px"
                  marginLeft={'101px'}
                  top="138px"
                  fontSize={{ base: '3xl', sm: '4xl', lg: '24px' }}
                  fontFamily={'karla'}
                  lineHeight={'150.9%'}
                  fontStyle={'normal'}
                  textAlign={'center'}
                  fontWeight={'300'}
                  color={'#989898'}
                >
                  The ZLGA School of Environmental Technology offers a wide
                  range of courses for people and all our courses are full
                  accredited and accepted worldwide.
                </Text>
              </Heading>
            </Stack>

            <Box
              className="sepp"
              width={'392px'}
              height={'556px'}
              marginLeft={'278px'}
              top={'297px'}
              position={'absolute'}
              borderWidth="1px"
              boxShadow={
                '2.02699px 4.05399px 20.2699px 3.04049px rgba(0, 0, 0, 0.1)'
              }
              borderRadius={'5.06748px'}
              //   _hover={{ shadow: 'lg' }}
              //   rounded="md"
              //   overflow="hidden"
              //   bg={useColorModeValue('white', 'gray.800')}
            >
              <Image
                position={'absolute'}
                src={rec1}
                objectFit="contain"
                w="373.98px"
                h="325.33px"
                left={'9.12px'}
                top={'10.36px'}
              />
              <Box p={{ base: 3, sm: 5 }} position={'relative'}>
                <Box mb={2}>
                  <Text
                    position={'absolute'}
                    w={'365px'}
                    h={'60px'}
                    left={'14px'}
                    top={'344px'}
                    fontSize={{ base: 'lg', sm: '20px' }}
                    fontWeight="500"
                    lineHeight="150.9%"
                    fontFamily={'karla'}
                    fontStyle={'normal'}
                    color={'#272727'}
                    // mb={2}
                  >
                    Basic Sciences and Special Entry Prepartory Programme (SEPP)
                  </Text>
                  <Text
                    position={'absolute'}
                    w={'365px'}
                    h={'44px'}
                    left={'14px'}
                    top={'409px'}
                    fontSize={{ base: 'lg', sm: '17px' }}
                    fontWeight="300"
                    lineHeight="121.9%"
                    fontFamily={'karla'}
                    fontStyle={'normal'}
                    color={'#989898'}
                  >
                    A remedy to deficiencies in one or two O/L requirements for
                    a course of study.
                  </Text>
                </Box>
                <Button
                  position={'absolute'}
                  w={'260.47px'}
                  h={'54.73px'}
                  left={'65.88px'}
                  top={'480.32px'}
                  border={'0.506748px solid #106804'}
                  background={'#ffffff'}
                  borderRadius={'5.06748px'}
                  _hover={{ bg: '#106804', color:'white' }}
              //   rounded="md"
              //   overflow="hidden"
              //   bg={useColorModeValue('white', 'gray.800')}
                >
                  Learn more
                </Button>
              </Box>
            </Box>
            <Box
              className="deptWaste"
              width={'392px'}
              height={'556px'}
              left={'770px'}
              top={'297px'}
              position={'absolute'}
              borderWidth="1px"
              boxShadow={
                '2.02699px 4.05399px 20.2699px 3.04049px rgba(0, 0, 0, 0.1)'
              }
              borderRadius={'5.06748px'}
              
              //   _hover={{ shadow: 'lg' }}
              //   rounded="md"
              //   overflow="hidden"
              //   bg={useColorModeValue('white', 'gray.800')}
            >
              <Image
                position={'absolute'}
                src={rec2}
                objectFit="contain"
                w="373.98px"
                h="325.33px"
                left={'9.12px'}
                top={'10.36px'}
              />
              <Box p={{ base: 3, sm: 5 }}>
                <Box mb={2}>
                  <Text
                    position={'absolute'}
                    w={'365px'}
                    h={'60px'}
                    left={'14px'}
                    top={'344px'}
                    fontSize={{ base: 'lg', sm: '20px' }}
                    fontWeight="500"
                    lineHeight="150.9%"
                    fontFamily={'karla'}
                    fontStyle={'normal'}
                    color={'#272727'}
                    // mb={2}
                  >
                    Department of Waste Management Technology
                  </Text>
                  <Text
                    position={'absolute'}
                    w={'365px'}
                    h={'44px'}
                    left={'14px'}
                    top={'409px'}
                    fontSize={{ base: 'lg', sm: '17px' }}
                    fontWeight="300"
                    lineHeight="121.9%"
                    fontFamily={'karla'}
                    fontStyle={'normal'}
                    color={'#989898'}
                  >
                    An holistic comprehension of solid and liquid waste
                    management.
                  </Text>
                </Box>
                <Button
                  position={'absolute'}
                  w={'260.47px'}
                  h={'54.73px'}
                  left={'65.88px'}
                  top={'480.32px'}
                  border={'0.506748px solid #106804'}
                  background={'#ffffff'}
                  borderRadius={'5.06748px'}
                  _hover={{ bg: '#106804', color:'white' }}
                >
                  Learn more
                </Button>
              </Box>
            </Box>

            <Box className="explore" top={'90px'}>
              <Button
                position={'absolute'}
                w={'334px'}
                h={'60px'}
                top={'898.24px'}
                background={'#106804'}
                borderRadius={'5px'}
                fontFamily={'Karla'}
                lineHeight={'150.9%'}
                fontSize={'20px'}
                fontStyle={'normal'}
                color={'#ffffff'}
                _hover={{ bg: 'white', color:'#106804', border:'2px solid #106804' }}
              >
                Explore More Courses
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box
        position={'absolute'}
        width={'100%'}
        height={'812px'}
        top={'2917'}
        backgroundColor={'#F3FFF1'}
      >
        <Heading>
          <Text
            position="absolute"
            width="349px"
            height="54px"
            left={'545px'}
            top={'74px'}
            fontSize={{ base: '3xl', sm: '4xl', lg: '36px' }}
            fontFamily={'karla'}
            lineHeight={'150.9%'}
            fontStyle={'normal'}
            fontWeight={'800'}
            color={'#272727'}
          >
            The Transformation
          </Text>
        </Heading>
        <Image
          className="roundGlobe"
          position={'absolute'}
          width={'100%'}
          height={'634px'}
          left={'0px'}
          top={'178px'}
        />
      </Box>

      {/*###### MEET THE TEAM SECTION ########*/}
      <Box position={'absolute'} top={'3729px'} width={'100%'} height={'667px'}>
        <Container maxW={'1440px'}>
          <Stack position={'relative'}>
            <Stack>
              <Text
                position={'absolute'}
                fontSize={'36px'}
                top={'78px'}
                left={'635px'}
                fontFamily={'Karla'}
                fontWeight={'800'}
                lineHeight={'150.9%'}
                color={'#272727'}
              >
                Our Team
              </Text>
              <Flex>
                <Box>
                  <Image
                    position={'absolute'}
                    height="438.48px"
                    width="319.28px"
                    left={'86px'}
                    top={'140px'}
                    src={dr}
                  />
                  <Box
                    paddingTop={'48.65px'}
                    position={'absolute'}
                    width={'262px'}
                    height={'72px'}
                    top={'506.48px'}
                    left={'118px'}
                    textAlign={'center'}
                  >
                    <Text
                      fontSize={'24px'}
                      fontFamily={'Karla'}
                      fontWeight={'400'}
                      lineHeight={'150.9%'}
                      color={'#272727'}
                    >
                      Dr. Mrs Abiola Bashorun
                    </Text>
                    <Text
                      fontSize={'24px'}
                      fontFamily={'Karla'}
                      fontWeight={'400'}
                      lineHeight={'150.9%'}
                      color={'#989898'}
                    >
                      CEO/MD
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Image
                    position={'absolute'}
                    height="401.42px"
                    width="281px"
                    left={'581px'}
                    top={'164px'}
                    src={fila}
                  />
                  <Box
                    paddingTop={'48.65px'}
                    position={'absolute'}
                    width={'268px'}
                    height={'72px'}
                    top={'493.42px'}
                    left={'590px'}
                    textAlign={'center'}
                  >
                    <Text
                      fontSize={'24px'}
                      fontFamily={'Karla'}
                      fontWeight={'400'}
                      lineHeight={'150.9%'}
                      color={'#272727'}
                    >
                      Mr. Abdulwahab Ibrahim
                    </Text>
                    <Text
                      fontSize={'24px'}
                      fontFamily={'Karla'}
                      fontWeight={'400'}
                      lineHeight={'150.9%'}
                      color={'#989898'}
                    >
                      Managing Director
                    </Text>
                  </Box>
                </Box>

                <Box>
                  <Image
                    position={'absolute'}
                    height="385.42px"
                    width="332px"
                    left={'1050px'}
                    top={'179px'}
                    src={tobi}
                  />

                  <Box
                    paddingTop={'48.65px'}
                    position={'absolute'}
                    width={'286px'}
                    height={'72px'}
                    top={'492.42px'}
                    left={'1075px'}
                    textAlign={'center'}
                  >
                    <Text
                      fontSize={'24px'}
                      fontFamily={'Karla'}
                      fontWeight={'400'}
                      lineHeight={'150.9%'}
                      color={'#272727'}
                    >
                      Mr. Tobi Benjamin
                    </Text>
                    <Text
                      fontSize={'24px'}
                      fontFamily={'Karla'}
                      fontWeight={'400'}
                      lineHeight={'150.9%'}
                      color={'#989898'}
                    >
                      Deputy Managing Director
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        position={'absolute'}
        height={'849px'}
        top={'4396px'}
        width={'100%'}
        bg={useColorModeValue('#F3FFF1', '#F3FFF1')}
      >
        <EventSlider />
      </Box>

      <Box
        position={'absolute'}
        width={'1248px'}
        height={'301px'}
        marginLeft={'134px'}
        top={'5395px'}
        backgroundColor={'#106804'}
        borderRadius={'20px'}
        zIndex={'1'}
      >
        <Image
          position={'absolute'}
          width={'287px'}
          height={'282px'}
          left={'11px'}
          top={'10px'}
          border={'1px solid #989898'}
          borderRadius={'10px'}
          src={radioImage}
        />
        <Text
          position="absolute"
          width="367px"
          height="38px"
          left={'345px'}
          top="44px"
          fontSize={{ base: '3xl', sm: '4xl', lg: '25px' }}
          fontFamily={'karla'}
          lineHeight={'150.9%'}
          fontStyle={'normal'}
          fontWeight={'500'}
          color={'#ffffff'}
        >
          Join and Enjoy our Online Radio
        </Text>
        <Text
          position="absolute"
          width="187px"
          height="30px"
          left={'345px'}
          top="83px"
          fontSize={{ base: '3xl', sm: '4xl', lg: '20px' }}
          fontFamily={'karla'}
          lineHeight={'150.9%'}
          fontStyle={'normal'}
          fontWeight={'300'}
          color={'#BEC8BD'}
        >
          Kunden Online Radio
        </Text>
        <Image
          position={'absolute'}
          width={'806'}
          height={'134px'}
          left={'345px'}
          top={'136px'}
          src={radioPlayer}
        />
      </Box>
      {/*###### FOOTER SECTION ######*/}
      <Box
        position={'absolute'}
        top={'5531px'}
        width={'100%'}
        paddingTop={'148.46px'}
        bg={useColorModeValue('#F3FFF1', '#F3FFF1')}
      >
        <Footer />
      </Box>
    </>
  );
}
