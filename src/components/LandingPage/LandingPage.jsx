import {
  chakra,
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
// import NavBar from '../Navbar';
import Map from '../../image/map.svg';
import image1 from '../../image/partner/image1.svg';
import image2 from '../../image/partner/image2.svg';
import image3 from '../../image/partner/image3.svg';
import image4 from '../../image/partner/image4.svg';
import image5 from '../../image/partner/image5.svg';
import image6 from '../../image/partner/image6.svg';
import Marquee from 'react-fast-marquee';
import Slider from './Slider';

export default function CallToActionWithVideo() {
  return (
    <>
      {/* <NavBar /> */}
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
            <Box
            //   ml={{ base: 0, md: 5 }}
            >
              <Image
                position={{ base: 'none', md: 'absolute' }}
                height="100%"
                // width="100%"
                objectFit="contain"
                maxWidth={{ base: '100%', md: '792px' }}
                left={'623px'}
                top={'20px'}
                src={Map}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box>
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
            // marginRight={'87px'}
            marginTop={'30px'}
            marginBottom={'30.03px'}
            src={image6}
          />
        </Marquee>
      </Box>
      <Slider />
      <Box position={'relative'}>
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
              borderWidth="1px"
              _hover={{ shadow: 'lg' }}
              rounded="md"
              overflow="hidden"
              bg={useColorModeValue('white', 'gray.800')}
            >
              <Image
                src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80"
                objectFit="cover"
                w="100%"
              />
              <Box p={{ base: 3, sm: 5 }}>
                <Box mb={6}>
                  <chakra.h3
                    fontSize={{ base: 'lg', sm: '2xl' }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    mb={2}
                  >
                    How to customize your Github Profile
                  </chakra.h3>
                  <Text fontSize={{ base: 'md', sm: 'lg' }} noOfLines={2}>
                    How to customize your Github Profile Neque porro quisquam
                    est qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit...
                  </Text>
                </Box>
                <Stack
                  justify="space-between"
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={{ base: 2, sm: 0 }}
                ></Stack>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
