import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconHome, IconMail, IconPhone } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Image, Stack, Text, Title } from '@mantine/core';
import MocLogo from '../../assets/MP_mini_logo.png'
import classes from './Footer.module.css';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Stack pt={10} gap={2}>
            <Group>
                <IconPhone />
                <Text>1-800-513-4774</Text>
            </Group>
            <Group>
                <IconHome />
                <Text>110 Denison St. Markham, ON L3R 1B6</Text>
            </Group>
            <Group>
                <IconMail />
                <Text>order@mocproducts.ca</Text>
            </Group>
        </Stack>
        <div className={classes.logo}>
          <Image src={MocLogo} />
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
            Copyright © 2023 Distributors of MOC Products, Inc.
        </Text>
      </Container>
    </footer>
  );
}