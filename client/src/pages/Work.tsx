import { Box, Flex } from '@chakra-ui/react';

const Work = () => {
  return (
    <>
      <Flex flexDirection='row' alignItems='center' justify='center' mt={20}>
        <Box flex={1} h='1px' bg='white' maxW={20} mr={4} />
        <Box
          fontSize='5xl'
          textAlign='center'
          fontFamily={'Catamaran'}
          fontWeight={800}
        >
          My journey
        </Box>
        <Box flex={1} h='1px' bg='white' maxW={20} ml={4} />
      </Flex>
    </>
  );
};

export default Work;
