const menus = [
  {
    name: 'Threads',
    icon: 'bx:conversation',
    activeIcon: 'bxs:conversation',
    link: '/'
  },
  {
    name: 'Leaderboards',
    icon: 'bx:bar-chart-alt-2',
    activeIcon: 'bxs:bar-chart-alt-2',
    link: '/leaderboards'
  },
  {
    name: 'Account',
    icon: 'bx:user',
    activeIcon: 'bxs:user',
    link: '/account'
  }
];

const getIsActiveMenu = (currentPath, path) => {
  if (currentPath === path) return true;
  else false;
};

export { menus, getIsActiveMenu };
