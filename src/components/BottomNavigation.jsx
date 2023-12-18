import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { getIsActiveMenu, menus } from '../utils/menu';
import { Link, useLocation } from 'react-router-dom';

function BottomNavigation() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <Box
        boxShadow="2xl"
        py="10px"
        bgColor="white"
        position="fixed"
        w="100%"
        bottom="0"
        zIndex={2}
      >
        <Container maxW="container.sm">
          <Stack direction="column" spacing="20px">
            <Stack direction="row" justifyContent="space-evenly">
              {menus.map((menu, index) => {
                const isActive = getIsActiveMenu(currentPath, menu.link);
                return (
                  <Link key={index} to={menu.link}>
                    <Stack
                      direction="column"
                      spacing="4px"
                      alignItems="center"
                    >
                      <Icon
                        icon={isActive ? menu.activeIcon : menu.icon}
                        fontSize="24px"
                        color={isActive ? 'teal' : 'black'}
                      />
                      <Text
                        fontWeight={isActive ? '600' : '400'}
                        color={isActive ? 'teal' : 'black'}
                      >
                        {menu?.name}
                      </Text>
                    </Stack>
                  </Link>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default BottomNavigation;
