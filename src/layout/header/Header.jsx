import React, { useEffect, useState } from 'react';
import HeaderOverlay from './HeaderOverlay';
import {
  Grid,
  HStack,
  Image,
  Spacer,
  Span,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiMenuLine } from '@remixicon/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, useGSAP);
  const menuTimeline = gsap.timeline({ paused: true });
  const gsapAnimation = (typee) => {
    if (typee) {
      menuTimeline.play();
    } else {
      menuTimeline.reverse();
      setTimeout(() => {
        menuTimeline.seek(0);
      }, 500);
    }
  };
  useGSAP(() => {
    const pub_gr = gsap.timeline({
      scrollTrigger: {
        trigger: '#nav_menu',
        scroller: 'body',
        markers: false,
        start: 'top 20px',
        end: 'top 20px', // adjust how long it takes to complete
        scrub: 3,
      },
    });

    pub_gr
      .to('#pub_gr_banner', {
        y: -40, // moves it upward (optional)
      })
      .to(
        '#nav_menu',
        {
          y: -40, // moves it upward (optional)
        },
        '<'
      );
  });
  const [winWidth, setWinWidth] = useState(true);
  const [schWidth, setSchWidth] = useState(true);
  const setWidth = () => {
    const iwidth = window.innerWidth;
    if (iwidth < 992) {
      setWinWidth(false);
    } else {
      setWinWidth(true);
    }
    if (iwidth < 768) {
      setSchWidth(false);
    } else {
      setSchWidth(true);
    }
  };
  useEffect(() => {
    menuTimeline.to(
      '#nav_menu',
      {
        display: 'none',
        marginTop: '-64px',
        duration: 0.5,
        ease: 'power3.out',
      },
      0
    );
    menuTimeline.to(
      '#menu_overlay',
      {
        display: 'flex',
        top: '0vh',
        duration: 0.5,
        ease: 'power3.out',
      },
      0
    );
    menuTimeline.to(
      'body',
      {
        overflowY: 'hidden',
      },
      0
    );

    setWidth();
    window.addEventListener('resize', setWidth);
    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, [menuTimeline]);
  return (
    <>
      <HeaderOverlay gsapFun={gsapAnimation} />
      <VStack
        zIndex={999}
        id='pub_gr_banner'
        position={'fixed'}
        top={0}
        bgColor={'black'}
        left={0}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        h={'40px'}
        w={'100vw'}
        px={['32px', '32px', '48px', '48px', '64px', '64px']}>
        <HStack
          w={'100%'}
          h={'40px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Image src='./assets/publicis_groupe.svg' h={'30px'} />
          <Text className='comfortaa' fontSize={['10px', '14px']}>
            Part of the{' '}
            <Span
              cursor={'pointer'}
              className='gothic'
              transition={'0.4s'}
              _hover={{ color: '#9d833e' }}>
              Publicis Groupe
            </Span>{' '}
            network
          </Text>
        </HStack>
      </VStack>
      <HStack
        color={'black'}
        zIndex={999}
        px={['32px', '32px', '48px', '48px', '64px', '64px']}
        w={'100vw'}
        h={('56px', '56px', '56px', '56px', '64px', '64px')}
        borderBottom={'0.1px solid #808080b0'}
        backdropFilter={'blur(10px)'}
        position={'fixed'}
        top={'40px'}
        left={0}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        id='nav_menu'>
        <Image
          cursor={'pointer'}
          src='./assets/msl-25-logo-black.png'
          h={'35px'}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth', duration: 0.2 });
            setTimeout(() => {
              navigate('/');
            }, 200); // wait for smooth scroll (adjust timing if needed)
          }}
        />
        <Spacer />
        {winWidth ? (
          <HStack gap={4} className='inter' fontWeight={'500'} h={'64px'}>
            <Text
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth', duration: 1 });
                setTimeout(() => {
                  navigate('nhome');
                }, 500); // wait for smooth scroll (adjust timing if needed)
              }}
              fontSize={['18px']}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'63px'}
              cursor={'pointer'}
              _hover={{
                borderBottom: '1px solid white',
                transition: '0.5s',
              }}
              transition={'0.2s'}>
              WORK
            </Text>
            <Text
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth', duration: 1 });
                setTimeout(() => {
                  navigate('/nhome');
                }, 500); // wait for smooth scroll (adjust timing if needed)
              }}
              fontSize={['18px']}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'63px'}
              cursor={'pointer'}
              _hover={{
                borderBottom: '1px solid white',
                transition: '0.5s',
              }}
              transition={'0.2s'}>
              SERVICES
            </Text>
          </HStack>
        ) : (
          <></>
        )}
        <VStack w={'50px'} id='menu_div'>
          <Image
            onClick={() => {
              console.log('clicked');
              gsapAnimation(true);
            }}
            id='menu_ico'
            cursor={'pointer'}
            filter={'invert(100%)'}
            src='./assets/dots.png'
            h={'15px'}
            transition={'0.1s'}
          />
        </VStack>
        {schWidth ? (
          <VStack className='inter' fontWeight={'500'}>
            <Text
              color={'black'}
              fontSize={['18px']}
              cursor={'pointer'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'63px'}
              _hover={{
                borderBottom: '1px solid white',
                transition: '0.5s',
              }}
              transition={'0.2s'}>
              Schedule a Call
            </Text>
          </VStack>
        ) : (
          <></>
        )}
      </HStack>
    </>
  );
};

export default Header;
