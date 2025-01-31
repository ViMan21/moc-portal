import { useState } from 'react';
import {
  IconChevronDown,
  IconShoppingCart
} from '@tabler/icons-react';
import {
  Burger,
  Center,
  Container,
  Group,
  Menu,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MocLogo from '../../assets/MP_logo1.png'
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { HeaderProfile } from './HeaderProfile';

const navigation = [
  { link: '/parts', label: 'PARTS'}, //, icon: IconCar },
  { links: [
    {link: 'https://g2stobeq.ca/digital-catalogue/', label: 'G2S'},
    {link: 'https://www.toolweb.ca/categories', label: 'Toolweb'},
    {link: undefined, label: 'Tool Request'}
  ], label: 'TOOLS'}, //, icon: IconTool},
  { link: '/detailers', label: 'DETAILER\'S DEPOT'}, //, icon: IconSpray},
  { link: '/cleaning', label: 'CLEANING SUPPLIES'}, //, icon: IconWashHand},
  { link: '/f_and_i', label: 'F & I DEPT.'}, //, icon: IconBrandCashapp},
  { link: '/about', label: 'ABOUT US'}, //, icon: IconContract},
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();

  const items = navigation.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <a 
        href={item.link}
        target="_blank"
        className={classes.link}
        onClick={() => {
          console.log('Opened a new tab.')
        }}>
          {item.label}
        </a>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Center>
              <span className={classes.link}>{link.label}</span>
              <IconChevronDown size={14} stroke={1.5} />
            </Center>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={() => navigate(link.link ?? '/')}
      >
        {link.label}
      </a>
    );
  });

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">

          <a href="/">
            <img src={MocLogo} />
          </a>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Group gap={5}>
            <HeaderProfile />
            <IconShoppingCart />
          </Group>
        </Group>
      </Container>
      <Container>
        <Group gap='md' className={classes.links} visibleFrom="sm">
          {items}
        </Group>
      </Container>
    </div>
  );
}