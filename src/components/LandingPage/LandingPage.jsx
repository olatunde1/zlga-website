import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import NavBar from '../Navbar';
import Map from '../../image/map.svg';

export default function CallToActionWithVideo() {
  return (
    <>
      <NavBar />
      <Box
        backgroundColor={'#F3FFF1'}
        paddingTop={'5rem'}
        paddingBottom={'162px'}
      >
        <Container maxW={'1440px'}>
        <Stack
          direction={{ base: 'column-reverse', md: 'row' }}>
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
              width={{ base: '100%', md: '679px' }}>
              <Text
                as={'span'}
                color={'#000000'}
               >
               The Environmental Management
              </Text>
              <br />
              <Text 
               as={'span'}
               color={'#106804'}
               fontFamily={'karla'}
               >
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
              direction={{ base: 'column', sm: 'row' }}>
              <Text>7000+
                Employees</Text>
                <Text>95%
                Customers Satisfaction</Text>
                <Text>90,000+
                Tonnes of Trash Recycled</Text>
            </Stack>
          </Stack>
            <Box
            //   ml={{ base: 0, md: 5 }}
              >
              <Image 
                position={{base:'none', md:'absolute'}}
                height="100%"
                // width="100%"
                objectFit="cover"
                maxWidth={{ base: '100%', md: '792px'}}
                left={'623px'}
                top={'100px'}
                src={Map}
              />
            </Box>
        </Stack>
        </Container>
      </Box>
    </>
  );
}
