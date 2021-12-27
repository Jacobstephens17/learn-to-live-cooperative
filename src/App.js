import React, { useState } from 'react'
import companyLogo from './content/LearnToLiveCo-Operative.jpg'
import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider } from '@mui/material';
import './styles.css'
import Carousel from 'react-elastic-carousel'
import Item from './components/Item'
import z1 from './content/zoie1.JPG'
import z2 from './content/z2.jpeg'
import styled from 'styled-components'


// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 }
// ];

const App = () => {

  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
  
    <div className='layout'>

      {/* <img className='logo'src={companyLogo} alt='LearnToLiveCo-OperativeLogo'/> */}

      <h1 className="name">Learn to Live Co-Operative</h1>

        <Carousel enableSwipe="true" className="carousel" tiltEasing="ease" itemsToShow={1}>
          {/* {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))} */}
          <img className='images' src={companyLogo}/>
          <img className='images' src={z1}/>
          <img className='images' src={z2}/>
          <img className='images' src={companyLogo}/>
          <img className='images' src={z1}/>
          <img className='images' src={z2}/>
          <img className='images' src={z1}/>
          <img className='images' src={z2}/>
          {/* <Item><img src={z1}/></Item>
          <Item><img src={companyLogo}/></Item>
          <Item><img src={companyLogo}/></Item>
          <Item><img src={companyLogo}/></Item> */}
        </Carousel>



        <Accordion className='accordion' square='true'>
          <AccordionSummary className='accordionSummary'> 
            <Typography className='accordionTitle'>About Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>My team is working to help supply families in hospice with ready to eat meals this holiday season! We’re already partnering with local businesses to redirect food supply waste to hungry mouths</Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion className='accordion' square='true'>
          <AccordionSummary>
            <Typography>Contact</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <Typography>
              <Typography>
                Email Us!
              </Typography>
              learntolivecooperative@gmail.com
            </Typography>

            <Typography>
              <InstagramLink href="https://www.instagram.com/learn.to.live.coop/">
                Follow us on Instagram
              </InstagramLink>
            </Typography>

          </AccordionDetails>
        </Accordion>

    </div>
  );
}

export default App;


const EmailLink = styled.a`

`


const InstagramLink = styled.a`

`

