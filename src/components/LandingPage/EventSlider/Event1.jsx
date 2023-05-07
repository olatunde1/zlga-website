import * as React from 'react';
import { Container, Stack, Text, Image, Box } from '@chakra-ui/react';
import event1 from '../../../image/event1.svg';

const ProductIntro = () => {
  return (
    <Box>
    
    <Container maxW={'1440px'}>
        <Box>
      <Text
        position={'absolute'}
        fontSize={'36px'}
        top={'74px'}
        left={'660px'}
        fontFamily={'Karla'}
        fontWeight={'800'}
        lineHeight={'150.9%'}
        color={'#272727'}
      >
        Events
      </Text>
      <Text
        position={'absolute'}
        width={'1238px'}
        top={'138px'}
        left={'101px'}
        fontFamily={'Karla'}
        fontWeight={'300'}
        fontSize={'24px'}
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
            left="155px"
            top="216px"
            w="1129px"
            h="505px"
            // minW={{ base: '100%', md: '878.28px' }}
            objectFit="contain"
            src={event1}
            // paddingLeft={{ base: 'none', md: '104px' }}
          />
      </Stack>
   
    </Container>
    </Box>
   
  );
};

export default ProductIntro;
