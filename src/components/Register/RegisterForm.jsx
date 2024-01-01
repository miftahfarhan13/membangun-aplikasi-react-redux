import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../../states/users/action';
import useInput from '../../hooks/useInput';

function RegisterForm() {
  const navigate = useNavigate();

  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const dispatch = useDispatch();

  const onRegisterForm = () => {
    dispatch(asyncRegisterUser({ name, email, password })).then(() => {
      navigate('/account');
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRegisterForm();
        }}
      >
        <Stack direction="column" spacing="20px" color="black">
          <Text
            fontSize="20px"
            fontWeight="700"
            alignSelf="center"
            color="black"
          >
            Register
          </Text>
          <FormControl>
            <FormLabel>Nama</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={onNameChange}
              placeholder="Nama"
              required
              _placeholder="black"
            />
          </FormControl>
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
            Register
          </Button>
          <Link to="/account" style={{ alignSelf: 'center' }}>
            <Text fontSize="14px" color="teal">
              Already have an account? Login here
            </Text>
          </Link>
        </Stack>
      </form>
    </>
  );
}

export default RegisterForm;
