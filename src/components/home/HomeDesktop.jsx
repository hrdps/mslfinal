import {
  Button,
  Container,
  Field,
  Fieldset,
  For,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  NativeSelect,
  Spacer,
  Span,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  RiArrowRightSLine,
  RiArrowRightUpLine,
  RiPlayLine,
} from '@remixicon/react';
import MarqueeHomeDesktop from './award_section/MarqueeHomeDesktop';
import MarqueeClients from './client_section/MarqueeClients';
import MarqueeClientsTwo from './client_section/MarqueeClientsTwo';
import { motion, AnimatePresence } from 'motion/react';

const sent = [
  { text: 'build corporate reputation?', src: './assets/banner3.gif' },
  {
    text: 'localize your global communications strategy?',
    src: './assets/banner3.gif',
  },
  { text: 'rebuild trust post crisis?', src: './assets/banner3.gif' },
  {
    text: 'understand what people think about you amplify executive visibility?',
    src: './assets/banner3.gif',
  },
  {
    text: 'digital campaigns that make people click?',
    src: './assets/banner3.gif',
  },
  { text: 'build corporate reputation?', src: './assets/banner3.gif' },
  {
    text: 'localize your global communications strategy?',
    src: './assets/banner3.gif',
  },
  { text: 'rebuild trust post-crisis?', src: './assets/banner3.gif' },
  {
    text: 'understand what people think about you amplify executive visibility?',
    src: './assets/banner3.gif',
  },
  {
    text: 'digital campaigns that make people click?',
    src: './assets/banner3.gif',
  },
];

const HomeDesktop = () => {
  const textRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP, ScrambleTextPlugin);
  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1333,
      title: '#ShushTheHush- Bleed Shamelessly',
      date: '2024-11-27T11:59:09',
      acf: {
        entity: 'MSL',
        type: ['Digital & Social Media'],
        sector: 'Sector1',
        featured: 'https://picsum.photos/seed/3/1920/1080',
        post_icon: 'https://img.icons8.com/color/600/zigbee.png',
        video: 'https://www.youtube.com/embed/nKN-VK0B-18?si=idEvGMhA_fol4hoT',
        impressions: '48M+',
        reach: '22M+',
        video_views: '6.4M+',
        engagement: '9.1M+',
        background:
          'On Menstrual Hygiene Day 2023, this campaign aimed to break this stigma and establish a more inclusive, supportive, and empathetic work environment that normalized and accommodates the needs of individuals who menstruate. It is a step towards achieving gender equality, improving employee well-being, and ensuring equal opportunities for everyone.',
        objectives:
          'To highlight the issue of period stigma in workplaces and execute a digital campaign on the need for normalizing period stigma.',
        approach:
          'The campaign targeted individuals within workplaces, including employees, employers, and management. It aimed to address the societal norms and challenges surrounding the stigma of periods in workplaces. By engaging this audience, the campaign sought to raise awareness, challenge the silence and shame associated with menstruation, and promote open dialogue and education about menstrual health and hygiene. It encouraged the target audience to actively participate in breaking the stigma, supporting menstruators, and fostering gender equality within their workplaces.',
        impact:
          '<ul>\r\n \t<li>Highlighting the need for breaking the stigma associated with periods</li>\r\n \t<li>Developing informative content to raise awareness and urging menstruators to speak openly about periods especially in workplaces</li>\r\n \t<li>Creating an inclusive campaign and providing the platform to the audience to show their support</li>\r\n \t<li>Activating key influencers, external collaborators, to participate in the campaign and amplify the message across audience ecosystems</li>\r\n</ul>',
        intro: '',
        quantifiable_metrics: '',
        social_links:
          'https://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg\r\nhttps://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg',
        '': '',
      },
    },
    {
      id: 1358,
      title: 'Ministry of Health and Family Welfare',
      date: '2024-11-27T11:58:53',
      acf: {
        entity: 'MSL',
        type: [
          'Strategy & Insights',
          'Digital & Social Media',
          'Media & Crisis',
        ],
        sector: 'Sector1',
        featured: 'https://picsum.photos/seed/4/1920/1080',
        post_icon: 'https://img.icons8.com/color/600/zigbee.png',
        video: 'https://www.youtube.com/embed/cVg5Z9mYqXw?si=5-MMA_oHzmZkRe9e',
        impressions: '',
        reach: '',
        video_views: '',
        engagement: '',
        background: '',
        objectives:
          '<ul>\r\n \t<li>Monitor all conversations around COVID in India and abroad (with an India context) and help the government keep track of concerns and sentiments</li>\r\n \t<li>Set up a live tracking war room for the ministry to display in real time, key trends around Covid and Covid vaccinations Identify COVID</li>\r\n \t<li>Hotspots based on media and citizens conversations and Identify myths and misinformation</li>\r\n \t<li>Identity emerging issues and new diseases/shortages and key drivers of hesitancy, especially for Vaccines</li>\r\n</ul>',
        approach: '',
        impact:
          '<ul>\r\n \t<li>In the on going project, wear eable to pickup and highlight emergingissuesaroundandmythsaroundvaccinationforthegovernmentto put out correct information in a timely manner</li>\r\n \t<li>Hotspotinformationforfocusedmonitoringfromthecenterandquickeron-groundengagement</li>\r\n</ul>',
        intro:
          'Organic by MSL, tasked with managing digital communication for MOHFW (Ministry of Health and Family Welfare) around COVID vaccines deployed a team of 11 embedded and 5 backend colleagues working 7 days a week, 5AM – midnight for 6 months. The largest Vaccine drive needed a matching communication program, aimed at reaching all 1.3 billion Indians to manage both, vaccine eagerness and hesitancy at the same time.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\nThe team needed to ensure that the vaccine roll-out was a success, from approvals, to availability, justifying prioritisation and ensuring targeted communication to priority cohorts – all while staying ahead of the narrative and proactively tackling potential issues.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\nWe built not only a content engine that covered each state, UT and went down to individual districts but also created an eco-system that drove audiences to the correct information on the vaccines from the largest platforms like Google, Youtube, Facebook finally creating unaided awareness in excess of 90% for digital audiences.',
        quantifiable_metrics:
          'On 16th January (Launch of 1st dose for medical professionals), #LargestVaccineDrive trended Organically at No.1 for 8 hours and 4 hours Globally, with over <b>5 billion impressions</b>.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\n#VaccineVartha property has crossed <b>12+ Billion impressions</b>, since launch Communication efforts resulted in numerous days of vaccinating the most numbers in a single day, even more than China.',
        social_links:
          'https://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg\r\nhttps://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg',
        '': '',
      },
    },
    {
      id: 1368,
      title: 'Case study 12',
      date: '2024-11-27T11:55:30',
      acf: {
        entity: '2020',
        type: ['Policy & Regulation', 'Content & Video'],
        sector: 'Sector1',
        featured: 'https://picsum.photos/seed/1/1920/1080',
        post_icon: 'https://img.icons8.com/color/600/zigbee.png',
        video: 'https://www.youtube.com/embed/cVg5Z9mYqXw?si=5-MMA_oHzmZkRe9e',
        impressions: '',
        reach: '',
        video_views: '',
        engagement: '',
        background: '',
        objectives:
          'Monitor all conversations around COVID in India and abroad (with an India context) and help the government keep track of concerns and sentiments\r\n\r\nSet up a live tracking war room for the ministry to display in real time, key trends around Covid and Covid vaccinations Identify COVID\r\n\r\nhotspots based on media and citizens conversations and Identify myths and misinformation Identity emerging issues and new diseases/shortages and key drivers of hesitancy, especially for Vaccines',
        approach: '',
        impact:
          '<ul>\r\n \t<li>In the on going project, wear eable to pickup and highlight emergingissuesaroundandmythsaroundvaccinationforthegovernmentto put out correct information in a timely manner</li>\r\n \t<li>Hotspotinformationforfocusedmonitoringfromthecenterandquickeron-groundengagement</li>\r\n</ul>',
        intro:
          'Organic by MSL, tasked with managing digital communication for MOHFW (Ministry of Health and Family Welfare) around COVID vaccines deployed a team of 11 embedded and 5 backend colleagues working 7 days a week, 5AM – midnight for 6 months. The largest Vaccine drive needed a matching communication program, aimed at reaching all 1.3 billion Indians to manage both, vaccine eagerness and hesitancy at the same time.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\nThe team needed to ensure that the vaccine roll-out was a success, from approvals, to availability, justifying prioritisation and ensuring targeted communication to priority cohorts – all while staying ahead of the narrative and proactively tackling potential issues.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\nWe built not only a content engine that covered each state, UT and went down to individual districts but also created an eco-system that drove audiences to the correct information on the vaccines from the largest platforms like Google, Youtube, Facebook finally creating unaided awareness in excess of 90% for digital audiences.',
        quantifiable_metrics:
          'On 16th January (Launch of 1st dose for medical professionals), #LargestVaccineDrive trended Organically at No.1 for 8 hours and 4 hours Globally, with over 5 billion impressions.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\n#VaccineVartha property has crossed 12+ Billion impressions , since launch Communication efforts resulted in numerous days of vaccinating the most numbers in a single day, even more than China.',
        social_links:
          'https://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg\r\nhttps://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg',
        '': '',
      },
    },
    {
      id: 1367,
      title: 'Case study 11',
      date: '2024-11-27T11:55:20',
      acf: {
        entity: '2020',
        type: ['Strategy & Insights', 'Policy & Regulation'],
        sector: 'Sector1',
        featured: 'https://picsum.photos/seed/2/1920/1080',
        post_icon: 'https://img.icons8.com/color/600/zigbee.png',
        video: 'https://www.youtube.com/embed/cVg5Z9mYqXw?si=5-MMA_oHzmZkRe9e',
        impressions: '48M+',
        reach: '22M+',
        video_views: '6.4M+',
        engagement: '9.1M+',
        background:
          'On Menstrual Hygiene Day 2023, this campaign aimed to break this stigma and establish a more inclusive, supportive, and empathetic work environment that normalized and accommodates the needs of individuals who menstruate. It is a step towards achieving gender equality, improving employee well-being, and ensuring equal opportunities for everyone.',
        objectives:
          'To highlight the issue of period stigma in workplaces and execute a digital campaign on the need for normalizing period stigma.',
        approach:
          'The campaign targeted individuals within workplaces, including employees, employers, and management. It aimed to address the societal norms and challenges surrounding the stigma of periods in workplaces. By engaging this audience, the campaign sought to raise awareness, challenge the silence and shame associated with menstruation, and promote open dialogue and education about menstrual health and hygiene. It encouraged the target audience to actively participate in breaking the stigma, supporting menstruators, and fostering gender equality within their workplaces.',
        impact:
          '<ul>\r\n \t<li>Highlighting the need for breaking the stigma associated with periods</li>\r\n \t<li>Developing informative content to raise awareness and urging menstruators to speak openly about periods especially in workplaces</li>\r\n \t<li>Creating an inclusive campaign and providing the platform to the audience to show their support</li>\r\n \t<li>Activating key influencers, external collaborators, to participate in the campaign and amplify the message across audience ecosystems</li>\r\n</ul>',
        intro: '',
        quantifiable_metrics: '',
        social_links:
          'https://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg',
        '': '',
      },
    },
    {
      id: 1366,
      title: 'Case study 10',
      date: '2024-11-27T11:55:12',
      acf: {
        entity: 'PCA',
        type: ['Digital & Social Media', 'Policy & Regulation'],
        sector: 'Sector1',
        featured: 'https://picsum.photos/seed/5/1920/1080',
        post_icon: 'https://img.icons8.com/color/600/zigbee.png',
        video: 'https://www.youtube.com/embed/cVg5Z9mYqXw?si=5-MMA_oHzmZkRe9e',
        impressions: '',
        reach: '',
        video_views: '',
        engagement: '',
        background: '',
        objectives:
          'Monitor all conversations around COVID in India and abroad (with an India context) and help the government keep track of concerns and sentiments\r\n\r\nSet up a live tracking war room for the ministry to display in real time, key trends around Covid and Covid vaccinations Identify COVID\r\n\r\nhotspots based on media and citizens conversations and Identify myths and misinformation Identity emerging issues and new diseases/shortages and key drivers of hesitancy, especially for Vaccines',
        approach: '',
        impact:
          '<ul>\r\n \t<li>In the on going project, wear eable to pickup and highlight emergingissuesaroundandmythsaroundvaccinationforthegovernmentto put out correct information in a timely manner</li>\r\n \t<li>Hotspotinformationforfocusedmonitoringfromthecenterandquickeron-groundengagement</li>\r\n</ul>',
        intro:
          'Organic by MSL, tasked with managing digital communication for MOHFW (Ministry of Health and Family Welfare) around COVID vaccines deployed a team of 11 embedded and 5 backend colleagues working 7 days a week, 5AM – midnight for 6 months. The largest Vaccine drive needed a matching communication program, aimed at reaching all 1.3 billion Indians to manage both, vaccine eagerness and hesitancy at the same time.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\nThe team needed to ensure that the vaccine roll-out was a success, from approvals, to availability, justifying prioritisation and ensuring targeted communication to priority cohorts – all while staying ahead of the narrative and proactively tackling potential issues.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\nWe built not only a content engine that covered each state, UT and went down to individual districts but also created an eco-system that drove audiences to the correct information on the vaccines from the largest platforms like Google, Youtube, Facebook finally creating unaided awareness in excess of 90% for digital audiences.',
        quantifiable_metrics:
          'On 16th January (Launch of 1st dose for medical professionals), #LargestVaccineDrive trended Organically at No.1 for 8 hours and 4 hours Globally, with over 5 billion impressions.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\n#VaccineVartha property has crossed 12+ Billion impressions , since launch Communication efforts resulted in numerous days of vaccinating the most numbers in a single day, even more than China.',
        social_links:
          'https://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg',
        '': '',
      },
    },
    {
      id: 1365,
      title: 'Case study 9',
      date: '2024-11-27T11:55:03',
      acf: {
        entity: 'PCA',
        type: ['Media & Crisis', 'Policy & Regulation'],
        sector: 'Sector1',
        featured: 'https://picsum.photos/seed/6/1920/1080',
        post_icon: 'https://img.icons8.com/color/600/zigbee.png',
        video: 'https://www.youtube.com/embed/cVg5Z9mYqXw?si=5-MMA_oHzmZkRe9e',
        impressions: '48M+',
        reach: '22M+',
        video_views: '6.4M+',
        engagement: '9.1M+',
        background:
          'On Menstrual Hygiene Day 2023, this campaign aimed to break this stigma and establish a more inclusive, supportive, and empathetic work environment that normalized and accommodates the needs of individuals who menstruate. It is a step towards achieving gender equality, improving employee well-being, and ensuring equal opportunities for everyone.',
        objectives:
          'To highlight the issue of period stigma in workplaces and execute a digital campaign on the need for normalizing period stigma.',
        approach:
          'The campaign targeted individuals within workplaces, including employees, employers, and management. It aimed to address the societal norms and challenges surrounding the stigma of periods in workplaces. By engaging this audience, the campaign sought to raise awareness, challenge the silence and shame associated with menstruation, and promote open dialogue and education about menstrual health and hygiene. It encouraged the target audience to actively participate in breaking the stigma, supporting menstruators, and fostering gender equality within their workplaces.',
        impact:
          '<ul>\r\n \t<li>Highlighting the need for breaking the stigma associated with periods</li>\r\n \t<li>Developing informative content to raise awareness and urging menstruators to speak openly about periods especially in workplaces</li>\r\n \t<li>Creating an inclusive campaign and providing the platform to the audience to show their support</li>\r\n \t<li>Activating key influencers, external collaborators, to participate in the campaign and amplify the message across audience ecosystems</li>\r\n</ul>',
        intro: '',
        quantifiable_metrics: '',
        social_links:
          'https://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg',
        '': '',
      },
    },
    {
      id: 1364,
      title: 'Case study 8',
      date: '2024-11-27T11:54:52',
      acf: {
        entity: 'Organic',
        type: ['Strategy & Insights', 'Media & Crisis'],
        sector: 'Sector1',
        featured: 'https://picsum.photos/seed/8/1920/1080',
        post_icon: 'https://img.icons8.com/color/600/zigbee.png',
        video: 'https://www.youtube.com/embed/cVg5Z9mYqXw?si=5-MMA_oHzmZkRe9e',
        impressions: '',
        reach: '',
        video_views: '',
        engagement: '',
        background: '',
        objectives:
          'Monitor all conversations around COVID in India and abroad (with an India context) and help the government keep track of concerns and sentiments\r\n\r\nSet up a live tracking war room for the ministry to display in real time, key trends around Covid and Covid vaccinations Identify COVID\r\n\r\nhotspots based on media and citizens conversations and Identify myths and misinformation Identity emerging issues and new diseases/shortages and key drivers of hesitancy, especially for Vaccines',
        approach: '',
        impact:
          '<ul>\r\n \t<li>In the on going project, wear eable to pickup and highlight emergingissuesaroundandmythsaroundvaccinationforthegovernmentto put out correct information in a timely manner</li>\r\n \t<li>Hotspotinformationforfocusedmonitoringfromthecenterandquickeron-groundengagement</li>\r\n</ul>',
        intro:
          'Organic by MSL, tasked with managing digital communication for MOHFW (Ministry of Health and Family Welfare) around COVID vaccines deployed a team of 11 embedded and 5 backend colleagues working 7 days a week, 5AM – midnight for 6 months. The largest Vaccine drive needed a matching communication program, aimed at reaching all 1.3 billion Indians to manage both, vaccine eagerness and hesitancy at the same time.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\nThe team needed to ensure that the vaccine roll-out was a success, from approvals, to availability, justifying prioritisation and ensuring targeted communication to priority cohorts – all while staying ahead of the narrative and proactively tackling potential issues.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\nWe built not only a content engine that covered each state, UT and went down to individual districts but also created an eco-system that drove audiences to the correct information on the vaccines from the largest platforms like Google, Youtube, Facebook finally creating unaided awareness in excess of 90% for digital audiences.',
        quantifiable_metrics:
          'On 16th January (Launch of 1st dose for medical professionals), #LargestVaccineDrive trended Organically at No.1 for 8 hours and 4 hours Globally, with over 5 billion impressions.\r\n\r\n&lt;br/&gt;&lt;br/&gt;\r\n\r\n#VaccineVartha property has crossed 12+ Billion impressions , since launch Communication efforts resulted in numerous days of vaccinating the most numbers in a single day, even more than China.',
        social_links:
          'https://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg',
        '': '',
      },
    },
    {
      id: 1363,
      title: 'Case study 7',
      date: '2024-11-27T11:54:42',
      acf: {
        entity: 'Organic',
        type: ['Strategy & Insights'],
        sector: 'Sector1',
        featured: 'https://picsum.photos/seed/9/1920/1080',
        post_icon: 'https://img.icons8.com/color/600/zigbee.png',
        video: 'https://www.youtube.com/embed/cVg5Z9mYqXw?si=5-MMA_oHzmZkRe9e',
        impressions: '48M+',
        reach: '22M+',
        video_views: '6.4M+',
        engagement: '9.1M+',
        background:
          'On Menstrual Hygiene Day 2023, this campaign aimed to break this stigma and establish a more inclusive, supportive, and empathetic work environment that normalized and accommodates the needs of individuals who menstruate. It is a step towards achieving gender equality, improving employee well-being, and ensuring equal opportunities for everyone.',
        objectives:
          'To highlight the issue of period stigma in workplaces and execute a digital campaign on the need for normalizing period stigma.',
        approach:
          'The campaign targeted individuals within workplaces, including employees, employers, and management. It aimed to address the societal norms and challenges surrounding the stigma of periods in workplaces. By engaging this audience, the campaign sought to raise awareness, challenge the silence and shame associated with menstruation, and promote open dialogue and education about menstrual health and hygiene. It encouraged the target audience to actively participate in breaking the stigma, supporting menstruators, and fostering gender equality within their workplaces.',
        impact:
          '<ul>\r\n \t<li>Highlighting the need for breaking the stigma associated with periods</li>\r\n \t<li>Developing informative content to raise awareness and urging menstruators to speak openly about periods especially in workplaces</li>\r\n \t<li>Creating an inclusive campaign and providing the platform to the audience to show their support</li>\r\n \t<li>Activating key influencers, external collaborators, to participate in the campaign and amplify the message across audience ecosystems</li>\r\n</ul>',
        intro: '',
        quantifiable_metrics: '',
        social_links:
          'https://picsum.photos/600/600.jpg\r\nhttps://picsum.photos/600/601.jpg\r\nhttps://picsum.photos/600/602.jpg',
        '': '',
      },
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://mslindia.test/json/wp/v2/case-study?_embed&orderby=date&order=desc',
        {
          method: 'GET',
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21zbGluZGlhLnRlc3QiLCJpYXQiOjE3NDQwODkzNjcsIm5iZiI6MTc0NDA4OTM2NywiZXhwIjo0ODk3Njg5MzY3LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.dQSaYZSahmfnPCER0NywHEvV_Hy_VGoKxg61cwLYxdk', // Replace with your actual token
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();

      const parsed = data.map((item) => ({
        id: item.id,
        title: item.title.rendered,
        date: item.date,
        acf: item.acf,
      }));
      setCaseStudies(parsed);
      console.log(parsed);
    } catch (error) {
      console.error('Error fetching case studies:', error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  useEffect(() => {
    const spotlight = document.getElementById('spotlight');
    const play_cursor = document.getElementById('play_cursor');
    const reel_container = document.getElementById('reel_container');

    const handleMouseMove = (e) => {
      const rect = spotlight.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spotlight.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      spotlight.style.backgroundImage = `
      radial-gradient(circle at ${x}px ${y}px, transparent 30px, rgba(0, 0, 0, 0.8) 200px)
    `;
    };
    const handleMouseLeave = (e) => {
      const rect = spotlight.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spotlight.style.backgroundImage = `
      radial-gradient(circle at ${x}px ${y}px, transparent 30px, rgba(0, 0, 0, 0.80) 200px)
    `;
    };

    const handleMouseMoveCursor = (e) => {
      play_cursor.style.visibility = 'visible';
      const rectt = reel_container.getBoundingClientRect();
      const xx = e.clientX - rectt.left;
      const yy = e.clientY - rectt.top;
      play_cursor.style.left = `${xx}px`;
      play_cursor.style.top = `${yy}px`;
      reel_container.style.cursor = 'none';
    };
    const handleMouseLeaveCursor = (e) => {
      play_cursor.style.visibility = 'hidden';
      reel_container.style.cursor = 'unset';
    };

    spotlight.addEventListener('mousemove', handleMouseMove);
    spotlight.addEventListener('mouseleave', handleMouseLeave);
    reel_container.addEventListener('mousemove', handleMouseMoveCursor);
    reel_container.addEventListener('mouseleave', handleMouseLeaveCursor);
    const tl3 = gsap.timeline({ repeat: -1, delay: 0.5 });
    sent.forEach((item) => {
      tl3.add(() => {
        textRef.current.textContent = '';
      });
      tl3.to(textRef.current, {
        duration: 1.2,
        scrambleText: {
          text: item.text,
          chars: 'abcdefghijklmnopqrstuvwxyz0123456789',
          rightToLeft: true,
          speed: 1.2,
        },
      });

      tl3.to({}, { duration: 4 });
    });
    return () => {
      spotlight.removeEventListener('mousemove', handleMouseMove);
      spotlight.removeEventListener('mouseleave', handleMouseLeave);
      reel_container.removeEventListener('mousemove', handleMouseMoveCursor);
      reel_container.removeEventListener('mouseleave', handleMouseLeaveCursor);
      tl3.kill();
    };
  }, []);
  return (
    <>
      <VStack w={'100vw'} h={'104px'} bgColor={'#fffffa'}></VStack>
      <HStack
        w='100vw'
        h='calc(100vh - 104px)'
        spacing={0}
        bgColor='#fffffa'
        gap={[2, 2, 2, 4, 4, 4]}
        px={[2, 2, 2, 4, 4, 4]}>
        <VStack
          spacing={0}
          h={'100%'}
          w={'25%'}
          py={4}
          gap={[2, 2, 2, 4, 4, 4]}>
          <VStack
            px={[2, 2, 4, 4, 6, 8]}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            w='100%'
            bg={'url(./assets/banner5.gif)'}
            bgSize={'cover'}
            bgPos={'center center'}
            h={'70%'}
            borderRadius={16}
            _hover={{ shadow: 'sm' }}>
            <Heading
              py={[2, 2, 4, 4, 6, 8]}
              id='scroll_text'
              fontWeight={'bolder'}
              fontSize={[16, 16, 18, 20, 22, 32]}
              lineHeight={1.3}
              className='gothic'
              color={'white'}
              wordBreak={'break-word'}>
              Are you looking to <Span ref={textRef}></Span>
            </Heading>
            <Spacer />
            <HStack w={'100%'} py={[2, 2, 4, 4, 6, 8]}>
              <Heading
                color={'white'}
                className='gothic'
                fontWeight={'900'}
                fontSize={[12, 12, 14, 22, 24, 28]}
                w={'70%'}
                lineHeight={'1.3'}
                mixBlendMode={'hard-light'}>
                Services
              </Heading>
              <Spacer />
              <RiArrowRightUpLine
                color='white'
                size={30}
                mixBlendMode={'hard-light'}
              />
            </HStack>
          </VStack>
          <VStack spacing={0} h={'30%'} w={'100%'} gap={[2, 2, 2, 4, 4, 4]}>
            <VStack
              overflow={'hidden'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              transition={'0.3s'}
              _hover={{ shadow: 'sm' }}
              flex='1'
              w='100%'
              bg={'url(./assets/banner7.gif)'}
              bgSize={'cover'}
              bgPos={'center right'}
              h={'100%'}
              gap={0}
              borderRadius={16}
              px={0}>
              <HStack
                w={'100%'}
                pt={[2, 2, 4, 4, 6, 8]}
                px={[2, 2, 4, 4, 6, 8]}>
                <Heading
                  color={'white'}
                  className='gothic'
                  fontWeight={'900'}
                  fontSize={[12, 12, 14, 22, 24, 28]}
                  w={'70%'}
                  lineHeight={'1.3'}
                  mixBlendMode={'hard-light'}>
                  Awards
                </Heading>
                <Spacer />
                <RiArrowRightUpLine
                  color='white'
                  size={30}
                  mixBlendMode={'hard-light'}
                />
              </HStack>
              <MarqueeHomeDesktop />
            </VStack>
          </VStack>
        </VStack>
        <VStack spacing={0} h={'100%'} w={'25%'} py={4} pos={'relative'}>
          <VStack
            gap={0}
            py={[2, 2, 4, 4, 6, 8]}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flex='1'
            w='100%'
            bg={'url(./assets/banner7.gif)'}
            bgSize={'cover'}
            bgPos={'center left'}
            h={'100%'}
            px={[2, 2, 4, 4, 6, 8]}
            borderRadius={16}>
            <Heading
              className='gothic'
              color={'white'}
              fontWeight={'900'}
              fontSize={[16, 20, 20, 22, 22, 32]}
              lineHeight={'1.1'}>
              We’re a part of the Publicis Groupe and comprise of four brands -
              MSL India, 20:20 MSL, Organic by MSL, and Publicis Consultants
              Asia.
            </Heading>
            <Heading
              pt={[2, 2, 4, 4, 6, 8]}
              className='gothic'
              color={'white'}
              fontWeight={'900'}
              fontSize={[16, 18, 20, 22, 22, 32]}
              lineHeight={'1.1'}
              wordBreak={'normal'}>
              As strategic communication partners waiting to tell your story for
              you.
            </Heading>
          </VStack>
          <VStack
            py={[2, 2, 4, 4, 6, 8]}
            transition={'0.3s'}
            _hover={{ shadow: 'sm' }}
            pos={'absolute'}
            id='spotlight'
            className='spotlight'
            display={'flex'}
            alignItems={'flex-end'}
            justifyContent={'center'}
            w='100%'
            bgColor={'rgba(0, 0, 0, 0.8)'}
            h={'calc(100% - 32px)'}
            borderRadius={16}>
            <Heading
              w={'100%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-end'}
              transition={'1s'}
              _hover={{
                color: '#FF8C5F',
                transition: '1s',
                mixBlendMode: 'difference',
              }}>
              <RiArrowRightSLine size={70} padding={0} cursor={'pointer'} />
            </Heading>
            <Spacer />
            <VStack w={'100%'} px={[2, 2, 2, 4, 6, 8]}>
              <Button
                borderRadius={10}
                py={[2, 2, 2, 4, 6, 8]}
                w={'100%'}
                variant={'outline'}
                className='gothic'
                color={'white'}
                fontSize={[12, 12, 14, 22, 24, 28]}
                _hover={{
                  bgColor: 'transparent',
                  borderColor: '#FF8C5F',
                  color: 'white',
                }}
                borderColor={'white'}>
                Learn More
              </Button>
            </VStack>
          </VStack>
        </VStack>
        <VStack
          spacing={0}
          h={'100%'}
          w={'50%'}
          py={4}
          gap={[2, 2, 2, 4, 4, 4]}>
          <HStack h={'50%'} w={'100%'} gap={[2, 2, 2, 4, 4, 4]}>
            <VStack
              gap={[2, 2, 2, 4, 4, 4]}
              py={[2, 2, 4, 4, 6, 8]}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              w='100%'
              bg={'url(./assets/banner6.gif)'}
              bgSize={'cover'}
              bgPos={'center center'}
              h={'100%'}
              borderRadius={16}>
              <HStack
                display={['none', 'none', 'none', 'flex', 'flex', 'flex']}
                gap={[2, 2, 2, 2, 4, 4]}
                px={[2, 2, 4, 4, 6, 8]}
                id='partner_div'>
                <Container
                  bgColor={'white'}
                  zIndex={9}
                  w={'100%'}
                  border={'1px solid #dbdbdb'}
                  borderRadius={10}
                  py={2}
                  shadow={'xs'}>
                  <Image src='./assets/msl-logo-gray.png' />
                </Container>
                <Container
                  bgColor={'white'}
                  zIndex={8}
                  w={'100%'}
                  shadow={'xs'}
                  border={'1px solid #dbdbdb'}
                  borderRadius={10}
                  py={2}>
                  <Image src='./assets/pca-logo-white.png' w={'100%'} />
                </Container>
              </HStack>
              <HStack
                gap={[2, 2, 2, 2, 4, 4]}
                px={[2, 2, 4, 4, 6, 8]}
                display={['none', 'none', 'none', 'flex', 'flex', 'flex']}>
                <Container
                  bgColor={'white'}
                  zIndex={7}
                  w={'100%'}
                  shadow={'xs'}
                  border={'1px solid #dbdbdb'}
                  borderRadius={10}
                  py={2}>
                  <Image src='./assets/2020-msl-logo-white.png' />
                </Container>
                <Container
                  bgColor={'white'}
                  zIndex={6}
                  w={'100%'}
                  shadow={'xs'}
                  border={'1px solid #dbdbdb'}
                  borderRadius={10}
                  py={2}>
                  <Image src='./assets/organics.png' />
                </Container>
              </HStack>
              <VStack
                h={'100%'}
                display={['flex', 'flex', 'flex', 'none', 'none', 'none']}
                px={[2, 2, 4, 4, 6, 8]}>
                <Container
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  bgColor={'white'}
                  zIndex={9}
                  w={'100%'}
                  border={'1px solid #dbdbdb'}
                  borderRadius={10}
                  py={2}
                  shadow={'xs'}>
                  <Image src='./assets/msl-logo-gray.png' w={'40%'} />
                </Container>
                <Container
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  bgColor={'white'}
                  zIndex={8}
                  w={'100%'}
                  shadow={'xs'}
                  border={'1px solid #dbdbdb'}
                  borderRadius={10}
                  py={2}>
                  <Image src='./assets/pca-logo-white.png' w={'40%'} />
                </Container>
                <Container
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  bgColor={'white'}
                  zIndex={7}
                  w={'100%'}
                  shadow={'xs'}
                  border={'1px solid #dbdbdb'}
                  borderRadius={10}
                  py={2}>
                  <Image src='./assets/2020-msl-logo-white.png' w={'40%'} />
                </Container>
                <Container
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  bgColor={'white'}
                  zIndex={6}
                  w={'100%'}
                  shadow={'xs'}
                  border={'1px solid #dbdbdb'}
                  borderRadius={10}
                  py={2}>
                  <Image src='./assets/organics.png' w={'40%'} />
                </Container>
              </VStack>
              <Spacer />
              <Spacer />
              <HStack w={'100%'} px={[2, 2, 4, 4, 6, 8]}>
                <Heading
                  color={'white'}
                  className='gothic'
                  fontWeight={'900'}
                  fontSize={[12, 12, 14, 22, 24, 28]}
                  w={'70%'}
                  lineHeight={'1.3'}
                  mixBlendMode={'hard-light'}>
                  Partners
                </Heading>
                <Spacer />
                <RiArrowRightUpLine
                  color='white'
                  size={30}
                  mixBlendMode={'hard-light'}
                />
              </HStack>
            </VStack>
            <Container
              overflow={'hidden'}
              display={'flex'}
              alignItems={'flex-start'}
              justifyContent={'center'}
              w='100%'
              bg={'url(./assets/banner6.gif)'}
              bgSize={'cover'}
              bgPos={'bottom right'}
              h={'100%'}
              borderRadius={16}
              px={0}>
              <VStack
                gap={0}
                h={'100%'}
                w={'100%'}
                display={'flex'}
                alignItems={'flex-start'}
                py={[2, 2, 4, 4, 6, 8]}>
                <HStack w={'100%'} px={[2, 2, 4, 4, 6, 8]}>
                  <Heading
                    color={'white'}
                    className='gothic'
                    fontWeight={'900'}
                    fontSize={[12, 12, 14, 22, 24, 28]}
                    w={'70%'}
                    lineHeight={'1.3'}
                    mixBlendMode={'hard-light'}>
                    Clientele
                  </Heading>
                  <Spacer />
                  <RiArrowRightUpLine
                    color='white'
                    size={30}
                    mixBlendMode={'hard-light'}
                  />
                </HStack>
                <Spacer />
                <VStack
                  gap={0}
                  w={'100%'}
                  h={'100%'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}>
                  <MarqueeClientsTwo />
                </VStack>
              </VStack>
            </Container>
          </HStack>
          <Container
            id='reel_container'
            px={0}
            pos={'relative'}
            flex='1'
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            w='100%'
            bg={'url(./assets/hello.png)'}
            bgSize={'cover'}
            bgPos={'center center'}
            h={'50%'}
            borderRadius={16}>
            <VStack
              gap={0}
              px={0}
              pos={'absolute'}
              top={0}
              left={0}
              flex='1'
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              _hover={{ opacity: 0 }}
              cursor={'none'}
              w='100%'
              transition={'0.3s'}
              h={'100%'}
              borderRadius={16}>
              <Heading
                mixBlendMode={'multiply'}
                h={'100%'}
                borderRadius={'16px 16px 0 0'}
                px={8}
                py={8}
                w={'100%'}
                bgColor={'blue.950'}
                fontWeight={900}
                className='gothic'
                wordBreak={'break-word'}
                fontSize={[30, 30, 30, 30, 30, 44]}
                lineHeight={[1, 0.9, 1, 1.1, 1.2, 1.3]}
                textTransform={'uppercase'}
                color={'#fff'}>
                Build stories that get everyone talking about you.
              </Heading>
              <Button
                mixBlendMode={'multiply'}
                bgColor={'blue.950'}
                borderRadius={'0 0 16px 16px'}
                py={8}
                w={'100%'}
                variant={'outline'}
                className='gothic'
                color={'white'}
                fontSize={[30, 30, 30, 30, 30, 44]}
                outline={'none'}>
                Play Reel
              </Button>
            </VStack>
            <Container
              visibility={'hidden'}
              id='play_cursor'
              px={0}
              display={'flex'}
              alignItems={'center'}
              justifyItems={'center'}
              w={'75px'}
              h={'75px'}
              borderRadius={50}
              bgColor={'#FF8C5F'}
              pos={'absolute'}
              top={0}
              left={0}>
              <Heading
                className='gothic'
                w={'100%'}
                px={4}
                color={'black'}
                fontSize={16}
                lineHeight={1.2}>
                Play Reel
              </Heading>
            </Container>
          </Container>
        </VStack>
      </HStack>
      <VStack
        px={[2, 2, 2, 4, 4, 4]}
        w={'100vw'}
        bgColor={'#fffffa'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Heading
          py={4}
          bg={'url(./assets/cta.gif)'}
          bgSize={'cover'}
          bgPos={'center center'}
          w={'100%'}
          borderRadius={10}
          color={'white'}
          className='gothic'
          fontWeight={'900'}
          textAlign={'center'}
          fontSize={[12, 12, 14, 22, 24, 28]}>
          Case Studies
        </Heading>
      </VStack>
      <HStack
        w='100vw'
        h='100%'
        spacing={0}
        bgColor='#fffffa'
        gap={[2, 2, 2, 4, 4, 4]}
        px={[2, 2, 2, 4, 4, 4]}>
        <AnimatePresence>
          <Grid
            py={4}
            w='100%'
            templateColumns='repeat(auto-fit, minmax(350px, 1fr))'
            gap={[2, 2, 2, 4, 4, 4]}>
            {caseStudies.slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}>
                <Container
                  gap={0}
                  cursor={'pointer'}
                  bg={`url('${item.acf.featured}')`}
                  h={['200px', '300px', '400px', '400px', '400px', '400px']}
                  display={'flex'}
                  alignItems={'flex-end'}
                  py={['32px', '32px', '48px', '48px', '64px', '32px']}
                  borderRadius={'10px 10px 0 0'}></Container>
                <HStack gap={0} cursor={'pointer'}>
                  <VStack
                    borderRadius={'0 0 10px 10px'}
                    bg={'url(./assets/banner6.gif)'}
                    bgSize={'cover'}
                    bgPos={'right center'}
                    py={4}
                    px={[2, 2, 2, 4, 4, 4]}
                    gap={0}
                    w={'100%'}
                    display={'flex'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-start'}>
                    <Heading
                      fontSize={[12, 14, 16, 16, 18, 20]}
                      color={'white'}
                      textOverflow={'ellipsis'}
                      overflow={'hidden'}
                      className='comfortaa'
                      fontWeight={'600'}>
                      {item.title.slice.length >= 35
                        ? item.title
                        : item.title.slice(0, 26)}
                    </Heading>
                    <Heading
                      color={'white'}
                      textOverflow={'ellipsis'}
                      overflow={'hidden'}
                      className='gothic'
                      fontWeight={'100'}
                      fontSize={[
                        '14px',
                        '12px',
                        '12px',
                        '14px',
                        '14px',
                        '14px',
                      ]}>
                      {item.acf.type.slice(0, 2).join(', ')}
                    </Heading>
                  </VStack>
                </HStack>
              </motion.div>
            ))}
          </Grid>
        </AnimatePresence>
      </HStack>
      <VStack bgColor={'#fffffa'} w={'100vw'} py={4} px={[2, 2, 2, 4, 4, 4]}>
        <Grid
          border={'1px solid rgb(195, 195, 195)'}
          borderRadius={10}
          py={16}
          templateColumns={[
            '1fr',
            '1fr',
            '1fr',
            '1fr 1fr',
            '1fr 1fr',
            '1fr 1fr',
          ]}
          px={[2, 2, 2, 4, 4, 4]}
          w={'100%'}
          bgColor={'white'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={8}
          h={'100%'}>
          <VStack
            h={'100%'}
            w={'100%'}
            gap={0}
            display={'flex'}
            alignItems={'flex-start'}
            justifyContent={'center'}>
            <Heading
              h={'100%'}
              color={'#FF8C5F'}
              className='gothic'
              fontWeight={'900'}
              textAlign={'center'}
              fontSize={[16, 20, 20, 22, 22, 32]}>
              GET IN TOUCH
            </Heading>
            <Heading
              h={'100%'}
              w={'80%'}
              color={'#082992'}
              className='gothic'
              fontWeight={'900'}
              fontSize={[30, 30, 30, 30, 30, 44]}
              py={8}
              lineHeight={1.3}>
              Let's work together to develop your brand actively.
            </Heading>
          </VStack>
          <VStack w={'100%'}>
            <Fieldset.Root maxW='full'>
              <Stack
                py={8}
                borderRadius={10}
                px={[2, 2, 2, 4, 4, 4]}
                display={'flex'}
                alignItems={'flex-start'}
                gap={4}
                bg={'url(./assets/banner7.gif)'}
                bgSize={'cover'}
                bgPos={'center center'}>
                <Fieldset.Legend
                  color={'white'}
                  className='gothic'
                  fontWeight={'900'}
                  textAlign={'center'}
                  fontSize={[12, 12, 14, 22, 24, 28]}>
                  Contact details
                </Fieldset.Legend>
                <Fieldset.HelperText
                  color={'white'}
                  className='gothic'
                  fontWeight={'900'}
                  fontSize={[12, 12, 14, 22, 24, 28]}>
                  Please provide your contact details below.
                </Fieldset.HelperText>
              </Stack>

              <Fieldset.Content gap={8}>
                <Field.Root>
                  <Input
                    fontSize={[12, 14, 16, 16, 18, 20]}
                    fontWeight={800}
                    color={'blue.800'}
                    name='name'
                    type='text'
                    variant='flushed'
                    className='comfortaa'
                    placeholder='Full Name'
                    _placeholder={{ color: 'blue.800' }}
                  />
                </Field.Root>

                <Field.Root>
                  <Input
                    fontSize={[12, 14, 16, 16, 18, 20]}
                    fontWeight={800}
                    className='comfortaa'
                    placeholder='Email Address'
                    _placeholder={{ color: 'blue.800' }}
                    name='email'
                    type='email'
                    color={'blue.800'}
                    required
                    variant='flushed'
                  />
                </Field.Root>
                <Field.Root>
                  <Input
                    fontSize={[12, 14, 16, 16, 18, 20]}
                    fontWeight={800}
                    className='comfortaa'
                    placeholder='Contact Number'
                    _placeholder={{ color: 'blue.800' }}
                    name='number'
                    type='number'
                    color={'blue.800'}
                    required
                    variant='flushed'
                  />
                </Field.Root>
                <Field.Root>
                  <Input
                    fontSize={[12, 14, 16, 16, 18, 20]}
                    fontWeight={800}
                    className='comfortaa'
                    placeholder='Company Name'
                    _placeholder={{ color: 'blue.800' }}
                    name='company'
                    type='text'
                    color={'blue.800'}
                    required
                    variant='flushed'
                  />
                </Field.Root>
                <Field.Root>
                  <Input
                    fontSize={[12, 14, 16, 16, 18, 20]}
                    fontWeight={800}
                    className='comfortaa'
                    placeholder='Write a message'
                    _placeholder={{ color: 'blue.800' }}
                    name='message'
                    type='textarea'
                    color={'blue.800'}
                    variant='flushed'
                    required
                  />
                </Field.Root>
              </Fieldset.Content>

              <Button
                type='submit'
                borderRadius={10}
                py={[2, 2, 2, 4, 6, 6]}
                alignSelf='flex-start'
                variant={'outline'}
                className='gothic'
                fontSize={[12, 12, 14, 22, 24, 24]}
                _hover={{
                  bgColor: 'transparent',
                  borderColor: 'orange.700',
                  color: 'orange.800',
                }}
                color={'#FF8C5F'}
                borderColor={'#FF8C5F'}>
                Learn More
              </Button>
            </Fieldset.Root>
          </VStack>
        </Grid>
      </VStack>
    </>
  );
};

export default HomeDesktop;
