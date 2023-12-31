import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../../states/authUser/action';

function LoginForm() {
  const navigate = useNavigate();

  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(asyncSetAuthUser({ email, password })).then(() => {
      navigate('/');
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <Stack direction="column" spacing="20px" color="black">
          <Text fontSize="20px" fontWeight="700" alignSelf="center">
            Login
          </Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={onEmailChange}
              placeholder="Ex. account@mail.com"
              required
              _placeholder="black"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
              required
              _placeholder="black"
              autoComplete="on"
            />
          </FormControl>
          <Button colorScheme="teal" type="submit" alignSelf="end" width="100%">
            Login
          </Button>
          <Link to="/account/register" style={{ alignSelf: 'center' }}>
            <Text fontSize="14px" color="teal">
              Don&apos;t have an account yet? Register here
            </Text>
          </Link>
        </Stack>
      </form>
    </>
  );
}

export default LoginForm;
