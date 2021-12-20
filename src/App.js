import React, { useState } from 'react'
import companyLogo from './content/LearnToLiveCo-Operative.jpg'
import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider } from '@mui/material';
import './styles.css'
import Carousel from 'react-elastic-carousel'
import Item from './components/Item'
import z1 from './content/zoie1.JPG'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const App = () => {


  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);


  return (
  
    <div className='layout'>

      {/* <img className='logo'src={companyLogo} alt='LearnToLiveCo-OperativeLogo'/> */}

        <div className='carousel'>
        <Carousel itemsToShow={1}>
          {/* {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))} */}
          <img src={companyLogo}/>
          <img src={companyLogo}/>
          <img src={companyLogo}/>
          <img src={companyLogo}/>
          {/* <Item><img src={z1}/></Item>
          <Item><img src={companyLogo}/></Item>
          <Item><img src={companyLogo}/></Item>
          <Item><img src={companyLogo}/></Item> */}
        </Carousel>
        </div>



        <Accordion className='accordion' square='true'>
          <AccordionSummary className='accordionSummary'> 
            <Typography className='accordionTitle'>About Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Details</Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion className='accordion' square='true'>
          <AccordionSummary>
            <Typography>Contact</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Contact Info</Typography>
          </AccordionDetails>
        </Accordion>

    </div>
  );
}

export default App;
