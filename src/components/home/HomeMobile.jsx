import {
  Button,
  Container,
  Field,
  Fieldset,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Spacer,
  Span,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { RiArrowRightUpLine, RiPlayLine } from '@remixicon/react';
import React, { useEffect, useRef, useState } from 'react';
import MarqueeComponent from '../../layout/secondFold/MarqueeComponent';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarqueeHomeDesktop from './award_section/MarqueeHomeDesktop';
import MarqueeClientsTwo from './client_section/MarqueeClientsTwo';

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

const HomeMobile = () => {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const partner1 = useRef(null);
  const partner2 = useRef(null);
  const partner3 = useRef(null);
  const partner4 = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP, ScrambleTextPlugin);
  const [windowSize, setWindowSize] = useState('380px');
  useGSAP(() => {
    const partnerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#partner_div',
        scroller: 'body',
        markers: false, // Debug markers
        start: 'top 60%',
        end: 'top 50%',
        scrub: 3, // Smooth scrolling effect
        pin: false, // Pin the trigger element
        ease: 'power4',
      },
    });
    partnerTimeline
      .to(partner1.current, {
        transform: 'translate(0%,0%)',
      })
      .to(partner2.current, {
        transform: 'translate(0%,0%)',
      })
      .to(partner3.current, {
        transform: 'translate(0%,0%)',
      })
      .to(partner4.current, {
        transform: 'translate(0%,0%)',
      });
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 431) {
        console.log('resized');
        setWindowSize(`${window.innerWidth}px`);
      }
    };
    // Run once on mount
    handleResize();
    // Listen to resize events
    window.addEventListener('resize', handleResize);
    const tl3 = gsap.timeline({ repeat: -1, delay: 0.5 });
    sent.forEach((item) => {
      tl3.add(() => {
        textRef.current.textContent = ''; // Reset manually
      });
      tl3.to(textRef.current, {
        duration: 1.2,
        scrambleText: {
          text: item.text,
          chars: 'abcdefghijklmnopqrstuvwxyz0123456789',
          rightToLeft: true,
          speed: 1.2,
        },
        onComplete: () => {
          textRef1.current.style.backgroundImage = `url(${item.src})`;
        },
      });

      // Add a hold time after text settles
      tl3.to({}, { duration: 4 });
    });
    return () => {
      tl3.kill(); // ✅ Cleanup to prevent memory leaks
    };
  }, [sent]);

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
    } catch (error) {
      console.error('Error fetching case studies:', error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <VStack w={'100vw'} py={4} pt={'120px'} bgColor={'white'} px={4} gap={4}>
      <VStack
        border={'1px solid rgb(47, 47, 47)'}
        w={'100%'}
        display={'flex'}
        justifyContent={'flex-end'}
        h={'50vh'}
        bgColor={'chocolate'}
        borderRadius={10}
        bg={'url(./assets/banner2.gif)'}
        bgSize={'cover'}
        bgPos={'center right'}
        px={4}>
        <Heading
          zIndex={99}
          w={'100%'}
          color={'white'}
          opacity={1}
          className='gothic h1 text'
          fontSize={30}
          lineHeight={'1.3'}
          fontWeight={'900'}>
          Build stories that get everyone talking about you.
        </Heading>
        <HStack
          w={'100%'}
          py={4}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Button
            variant={'outline'}
            className='gothic'
            py={4}
            w={'100%'}
            color={'white'}
            fontSize={20}
            borderColor={'white'}>
            <RiPlayLine size={40} color='orange' mixBlendMode='difference' />
            Play Reel
          </Button>
        </HStack>
      </VStack>
      <VStack
        py={4}
        w={'100%'}
        display={'flex'}
        justifyContent={'flex-end'}
        bgColor={'chocolate'}
        borderRadius={10}
        bg={'url(./assets/banner6.gif)'}
        bgSize={'cover'}
        bgPos={'center right'}
        px={4}>
        <HStack w={'100%'} px={4}>
          <Heading
            py={2}
            textAlign={'start'}
            color={'white'}
            className='gothic'
            fontWeight={'900'}
            fontSize={[20, 24, 14, 22, 24, 28]}
            w={'70%'}
            lineHeight={'1.3'}>
            Clientele
          </Heading>
          <Spacer />
          <RiArrowRightUpLine color='white' size={30} />
        </HStack>
        <MarqueeClientsTwo />
      </VStack>
      <VStack
        borderRadius={10}
        w={'100%'}
        display={'flex'}
        alignItems={'flex-start'}
        bg={'url(./assets/banner7.gif)'}
        bgSize={'cover'}
        bgPos={'center right'}>
        <VStack
          bgColor={'white'}
          w={'135px'}
          h={'46px'}
          display={'flex'}
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          className='inverted-border-radius'
          pos={'relative'}
          top={0}
          left={0}
          zIndex={99}
          borderRadius={'10px 0px 10px 0px'}>
          <Image
            zIndex={100}
            src={'./assets/msl-25-logo-black.png'}
            w={'130px'}
          />
        </VStack>
        <VStack w={'100%'} px={4}>
          <Heading
            className='comfortaa'
            py={5}
            zIndex={99}
            color={'white'}
            fontWeight={300}
            fontSize={20}
            lineHeight={'1.2'}>
            We’re a part of the Publicis Groupe and comprise of four brands -
            MSL India, 20:20 MSL, Organic by MSL, and Publicis Consultants Asia.
            <br />
            <br />
            As strategic communication partners waiting to tell your story for
            you.
          </Heading>
          <HStack w={'100%'} py={4}>
            <Heading
              pb={2}
              textAlign={'start'}
              color={'white'}
              className='gothic'
              fontWeight={'900'}
              fontSize={[20, 24, 14, 22, 24, 28]}
              w={'70%'}
              lineHeight={'1.3'}>
              Learn More
            </Heading>
            <Spacer />
            <RiArrowRightUpLine color='white' size={30} />
          </HStack>
        </VStack>
      </VStack>
      <VStack
        w={'100%'}
        display={'flex'}
        justifyContent={'flex-end'}
        borderRadius={10}
        bg={'url(./assets/banner5.gif)'}
        bgSize={'cover'}
        bgPos={'center center'}
        px={4}
        py={4}
        pt={8}>
        <HStack gap={4} px={5} id='partner_div' zIndex={'100'}>
          <Container
            ref={partner1}
            bgColor={'white'}
            zIndex={9}
            transform={'translate(50%,50%)'}
            w={'45%'}
            border={'1px solid #dbdbdb'}
            borderRadius={10}
            py={2}
            shadow={'xs'}>
            <Image src='./assets/msl-logo-gray.png' />
          </Container>
          <Container
            ref={partner2}
            bgColor={'white'}
            zIndex={8}
            transform={'translate(-65%,52%)'}
            w={'45%'}
            shadow={'xs'}
            border={'1px solid #dbdbdb'}
            borderRadius={10}
            py={2}>
            <Image src='./assets/pca-logo-white.png' />
          </Container>
        </HStack>
        <HStack gap={5} px={5} py={3} pb={5} zIndex={'90'}>
          <Container
            ref={partner3}
            transform={'translate(54%,-62%)'}
            bgColor={'white'}
            zIndex={7}
            w={'45%'}
            shadow={'xs'}
            border={'1px solid #dbdbdb'}
            borderRadius={10}
            py={2}>
            <Image src='./assets/2020-msl-logo-white.png' />
          </Container>
          <Container
            ref={partner4}
            transform={'translate(-66%,-66%)'}
            bgColor={'white'}
            zIndex={6}
            w={'45%'}
            shadow={'xs'}
            border={'1px solid #dbdbdb'}
            borderRadius={10}
            py={2}>
            <Image src='./assets/organics.png' />
          </Container>
        </HStack>
        <HStack w={'100%'}>
          <Heading
            pb={2}
            textAlign={'start'}
            color={'white'}
            className='gothic'
            fontWeight={'900'}
            fontSize={[20, 24, 14, 22, 24, 28]}
            w={'70%'}
            lineHeight={'1.3'}
            mixBlendMode={'hard-light'}>
            Partner
          </Heading>
          <Spacer />
          <RiArrowRightUpLine
            color='white'
            size={30}
            mixBlendMode={'hard-light'}
          />
        </HStack>
      </VStack>
      <VStack
        border={'1px solid white'}
        w={'100%'}
        display={'flex'}
        justifyContent={'flex-end'}
        h={'50vh'}
        bgColor={'chocolate'}
        ref={textRef1}
        borderRadius={10}
        bg={'url(./assets/banner3.gif)'}
        bgSize={'cover'}
        bgPos={'center right'}
        px={4}>
        <Heading
          minH={'150px'}
          id='scroll_text'
          fontWeight={'bolder'}
          fontSize={[20, 24, 14, 22, 24, 28]}
          w={'100%'}
          className='gothic'
          color={'white'}>
          Are you looking to <Span ref={textRef}></Span>
        </Heading>
        <HStack w={'100%'} py={4}>
          <Heading
            pb={2}
            textAlign={'start'}
            color={'white'}
            className='gothic'
            fontWeight={'900'}
            fontSize={[20, 24, 14, 22, 24, 28]}
            w={'70%'}
            lineHeight={'1.3'}>
            Contact Us
          </Heading>
          <Spacer />
          <RiArrowRightUpLine color='white' size={30} />
        </HStack>
      </VStack>
      <VStack
        w={'100%'}
        bg={'url(./assets/cs_bg.gif)'}
        bgSize={'cover'}
        bgPos={'top left'}
        py={4}
        borderRadius={10}>
        <Heading className='gothic' fontSize={[20, 24, 14, 22, 24, 28]}>
          Case Studies
        </Heading>
      </VStack>
      {caseStudies.slice(0, 4).map((item, key) => {
        return (
          <VStack
            key={key}
            w={'100%'}
            bg={'url(./assets/banner1.gif)'}
            bgSize={'cover'}
            bgPos={'right center'}
            borderRadius={10}
            gap={0}
            border={'1px solid #3b3541'}>
            <Image src={item.acf.featured} borderRadius={'10px 10px 0 0'} />
            <Heading
              pt={4}
              px={2}
              w={'100%'}
              className='comfortaa'
              fontSize={18}
              fontWeight={'900'}>
              {item.title.slice.length >= 35
                ? item.title
                : item.title.slice(0, 26)}
            </Heading>
            <HStack
              w={'100%'}
              display={'flex'}
              alignItems={'center'}
              px={2}
              pb={4}>
              <Heading
                textAlign={'start'}
                color={'white'}
                className='gothic'
                fontWeight={'400'}
                fontSize={16}
                lineHeight={'1.3'}>
                {item.acf.type.slice(0, 2).join(', ')}
              </Heading>
              <Spacer />
              <RiArrowRightUpLine color='white' size={24} />
            </HStack>
          </VStack>
        );
      })}

      <VStack
        overflow={'hidden'}
        w={'100%'}
        borderRadius={10}
        py={4}
        bg={'url(./assets/banner7.gif)'}
        bgSize={'cover'}
        bgPos={'center center'}>
        <HStack w={'100%'} px={4}>
          <Heading
            py={2}
            textAlign={'start'}
            color={'white'}
            className='gothic'
            fontWeight={'900'}
            fontSize={[20, 24, 14, 22, 24, 28]}
            w={'70%'}
            lineHeight={'1.3'}>
            Awards
          </Heading>
          <Spacer />
          <RiArrowRightUpLine color='white' size={30} />
        </HStack>
        <MarqueeHomeDesktop />
      </VStack>
      <VStack
        w={'100%'}
        borderRadius={10}
        px={4}
        py={4}
        bgColor={'#fffffa'}
        border={'1px solid rgb(195, 195, 195)'}>
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
            fontSize={[20, 24, 14, 22, 24, 28]}>
            GET IN TOUCH
          </Heading>
          <Heading
            h={'100%'}
            w={'80%'}
            color={'#082992'}
            className='gothic'
            fontWeight={'900'}
            fontSize={[22, 30, 14, 22, 24, 28]}
            py={8}
            lineHeight={1.3}
            textWrap={'wrap'}>
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
                fontSize={[20, 24, 14, 22, 24, 28]}>
                Contact details
              </Fieldset.Legend>
              <Fieldset.HelperText
                color={'white'}
                className='gothic'
                fontWeight={'900'}
                fontSize={[16, 20, 14, 22, 24, 28]}>
                Please provide your contact details below.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content gap={8} py={4}>
              <Field.Root>
                <Input
                  fontSize={[20, 24, 16, 16, 18, 20]}
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
                  fontSize={[20, 24, 16, 16, 18, 20]}
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
                  fontSize={[20, 24, 16, 16, 18, 20]}
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
                  fontSize={[20, 24, 16, 16, 18, 20]}
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
                  fontSize={[20, 24, 16, 16, 18, 20]}
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
              fontSize={[20, 24, 14, 22, 24, 24]}
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
      </VStack>
    </VStack>
  );
};

export default HomeMobile;
