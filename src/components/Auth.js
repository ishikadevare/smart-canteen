import { Text, Link, Flex, Heading, Stack, Image } from '@chakra-ui/react';
import GoogleAuthBtn from './buttons/GoogleAuth';

export default function Auth() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'} align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Use your{' '}
            <Text as="span" color="blue.600">
              <a
                href="https://vesit.ves.ac.in"
                target="_blank"
                rel="noreferrer"
              >
                VESIT
              </a>{' '}
            </Text>
            google account to login here!
          </Text>
          <GoogleAuthBtn />
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
