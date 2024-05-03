import {
  Container,
  Flex,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

const Login = () => {
  return (
    <Container>
      <SimpleGrid cols={{ base: 1, lg: 2 }}>
        <Flex direction={"row"} gap={{ base: 30, md: 50 }}>
          <Stack>
            <Text>Sign In</Text>
            <Text>Hi! welcome back you have been missed</Text>
          </Stack>

          <form>
            <Stack>
              <TextInput label="Email" placeholder="example@gmail.com" />
              <PasswordInput label="Password" placeholder="********" />
            </Stack>
          </form>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Login;
