import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Stack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { userShape } from '../../utils/shape';
import { asyncUnsetAuthUser } from '../../states/authUser/action';

function AccountDetail({ authUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/');
  };

  return (
    <>
      <Stack
        spacing="20px"
        direction="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="column" alignItems="center" spacing="10px">
          <Avatar src={authUser.avatar} size="lg" mt="4px" />
          <Text fontSize="20px" fontWeight="500">
            {authUser.name}
          </Text>
        </Stack>
        <Button
          onClick={onSignOut}
          colorScheme="red"
          variant="outline"
          size="sm"
        >
          Logout
        </Button>
      </Stack>
    </>
  );
}

AccountDetail.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
};

export default AccountDetail;
