import { Link, useLocation } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

const Navbar = () => {
  let location = useLocation();
  let { pathname } = location;
  return (
    <Flex zIndex={1} pos='sticky' bg='tan' w='auto' p='4'>
      <Flex align='center' justify='flex-end' w='90%' fontSize={'2xl'} mt={5}>
        <Box mr={10} color={pathname === '/' ? 'gray.700' : 'white'}>
          <Link to='/'>About Me</Link>
        </Box>
        <Box mr={10} color={pathname === '/skills' ? 'gray.700' : 'white'}>
          <Link to='/skills'>Skills</Link>
        </Box>
        <Box mr={10} color={pathname === '/work' ? 'gray.700' : 'white'}>
          <Link to='/work'>Work</Link>
        </Box>
        <Box color={pathname === '/connect' ? 'gray.700' : 'white'}>
          <Link to='/connect'>Connect</Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
