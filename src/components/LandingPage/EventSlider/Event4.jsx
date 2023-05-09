import * as React from 'react';
import { Container, Stack, Text, Image, Box } from '@chakra-ui/react';
import event4 from '../../../image/event4.png';

const ProductIntro = () => {
  return (
    <Box>
    
    <Container maxW={'1440px'}>
        <Box>
      <Text
        position={'absolute'}
        fontSize={'36px'}
        top={{ base: '123px', md: '74px' }}
        left={{ base: '160px', md: '660px' }}
        fontFamily={'Karla'}
        fontWeight={'800'}
        lineHeight={'150.9%'}
        color={'#272727'}
      >
        Events
      </Text>
      <Text
        position={'absolute'}
        width={{ base: '400px', md: '1238px' }}
        top={{ base: '200px', md: '138px' }}
        left={{ base: '0px', md: '101px' }}
        fontFamily={'Karla'}
        fontWeight={'300'}
        fontSize={{ base: '16px', md: '24px' }}
        lineHeight={'150.9%'}
        fontStyle={'normal'}
        color={'#989898'}
      >
        Check out our latest events at ZL Global Alliance
      </Text>
      {/* <Box pl={{base:'none', md:'104px'}} pr={{base:'none', md:'95px'}}> */}
        </Box>
      <Stack direction={{ base: 'column', md: 'row' }}>
      
          <Image
            position={'absolute'}
            left={{ base: '0px', md: '155px' }}
            top="216px"
            w="1129px"
            h="505px"
            // minW={{ base: '100%', md: '878.28px' }}
            objectFit="contain"
            src={event4}
            // paddingLeft={{ base: 'none', md: '104px' }}
          />
      </Stack>
   
    </Container>
    </Box>
   
  );
};

export default ProductIntro;
