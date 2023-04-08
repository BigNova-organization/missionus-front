import React, { useEffect } from "react";
import { Box, Divider, Stack, useTheme } from "@mui/material";
import Head from "../../components/Head";
import Presentation from "./components/presentaion";
import Body from "../../components/Body";
import Experience from "./components/experience";
import Space from "../../components/outils/Space";
import Formation from "./components/formations";
import Competence from "./components/competence";
import Hobies from "./components/hobie";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FacebookShareButton,TwitterShareButton,LinkedinShareButton, FacebookIcon,TwitterIcon,LinkedinIcon} from 'react-share';
// import  ShareButtons from 'react-share';
// import generateShareIcon from 'react-share';

const VisualiserCv = ( props) => {


  const location = useLocation();
  const  state  = location.state;

  const theme = useTheme();

  // const FacebookShareButton = ShareButtons.FacebookShareButton;
  // const FacebookIcon = generateShareIcon('facebook');
  
  // const TwitterShareButton = ShareButtons.TwitterShareButton;
  // const TwitterIcon = generateShareIcon('twitter');
  
  // const LinkedinShareButton = ShareButtons.LinkedInShareButton;
  // const LinkedinIcon = generateShareIcon('linkedin');

  // const handleShareResume = () => {
  //   // Use the 'navigator.share()' API to share the resume
  //   if (navigator.share) {
  //     navigator.share({
  //       title: 'My Resume',
  //       text: 'Check out my resume!',
  //       url: 'https://example.com/my-resume.pdf',
  //     })
  //       .then(() => console.log('Resume shared successfully'))
  //       .catch(error => console.error('Error sharing resume:', error));
  //   } else {
  //     console.log('Web Share API not supported on this browser');
  //   }
  // }
 

  
  return (
    <>
    <Head title="Visualiser Curriculum Vitae" retur btn/>

    {/* <FacebookShareButton
    url={'https://example.com/my-resume.pdf'}
    quote={'Check out my resume!'}
    hashtag={'#resume'}
    onClick={handleShareResume}
  >
    <FacebookIcon size={32} round />
  </FacebookShareButton>

  <TwitterShareButton
    url={'https://example.com/my-resume.pdf'}
    title={'My Resume'}
    hashtags={['resume']}
    onClick={handleShareResume}
  >
    <TwitterIcon size={32} round />
  </TwitterShareButton>

  <LinkedinShareButton
    url={'https://example.com/my-resume.pdf'}
    title={'My Resume'}
    summary={'Check out my resume!'}
    source={'My Website'}
    onClick={handleShareResume}
  >
    <LinkedinIcon size={32} round />
  </LinkedinShareButton>

       */}
      <Body>
        {/* <Stack>
        <PrimaryText
          fontWeight={"600"}
          fontSize={"35px"}
          text={" Créez votre cv"}
          color={theme.palette.secondary.light}
          cursor
        />
        </Stack> */}
        <Stack>
          <Presentation state={state} />
          <Space space={20} />
          <Experience />
          <Space space={20} />
          <Formation />
          <Space space={20} />
          <Competence />
          <Space space={20} />
          <Hobies />
        </Stack>
      </Body>
    </>
  );
};

export default VisualiserCv;
