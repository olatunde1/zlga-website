import * as React from 'react';
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link
} from '@chakra-ui/react';
import slide3 from '../../../image/slide3.svg'


const ProductIntro = () => {
  return (
    <Box bg={'#F3FFF1'} position={'relative'}>
         <Text
            paddingTop={'74px'}
            textAlign={'center'}
            fontFamily={'Karla'}
            fontWeight={'800'}
            fontSize={'36px'}
            lineHeight={'150.9%'}
            fontStyle={'normal'}
           
        >Reinforcing a Safer Ecosystem</Text>
        {/* <Box pl={{base:'none', md:'104px'}} pr={{base:'none', md:'95px'}}> */}
        <Container maxW="1440px" >
       
       <Stack direction={{ base: 'column', md: 'row' }} position={'relative'}>
         
         <Box>
           <Image
             // marginTop={'17px'}
            //  position={'absolute'}
             left= '104.72px'
             top= '97px'
             w="100%"
             h="100%"
             minW={{ base: '100%', md: '878.28px' }}
             objectFit="contain"
             src={slide3}
             paddingLeft={{base:'none', md:'104px'}}
           />
         </Box>
         <Stack direction="column" >
           <Heading
             position={'absolute'}
             top={{ base: 'none', md: 'none' }}
            left={{ base: 'none', md: '873px' }}
            paddingTop={{ base: 'none', md: '137px' }}
            fontFamily={'Karla'}
            fontWeight={'700'}
            fontSize={'32px'}
            lineHeight={'150.9%'}
            fontStyle={'normal'}
            textAlign="left"
            
             // maxW={{ base: '100%', md: '271px' }}
           >
            Residential Solutions
           </Heading>
           <Text
             position={'absolute'}
             left={{ base: 'none', md: '873px' }}
             top={{ base: 'none', md: '172px' }}
             fontFamily={'Karla'}
             color={useColorModeValue('#989898')}
             fontSize="24px"
             textAlign='justify'
             lineHeight="150.9%"
             fontWeight="300"
             height={'234px'}
             width={{ base: '325px', md: '472px' }}
           >
           We provide environmentally responsible and
            affordable non-hazardous solid municipal waste solutions.
           </Text>
           <HStack spacing={3}>
             <Button 
                position='absolute'
                width= '234px'
                height= '60px'
                left='calc(50% - 234px/2 + 385px)'
                top= 'calc(50% - 60px/2 + 146px)'
                background='#106804'
                borderRadius={'5px'}
                colorScheme="teal" variant="solid" size="md" rounded="md" boxShadow="md">
              Learn more
             </Button>
             
           </HStack>
          
         </Stack>
         
       </Stack>
         </Container>
        </Box>
       
    // </Box>
    
  );
};

export default ProductIntro;