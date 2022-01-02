import React, { useState } from 'react'
import companyLogo from './content/LearnToLiveCo-Operative.jpg'
import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider } from '@mui/material';
import './styles.css'
import Carousel from 'react-elastic-carousel'
import Item from './components/Item'
import z1 from './content/zoie1.JPG'
import food from './content/food.JPG'
import plant from './content/plant.JPG'
import plant2 from './content/plant2.JPG'
import drive from './content/drive.JPG'
import drive2 from './content/drive2.JPG'
import food2 from './content/food2.jpg'
import hospital from './content/hospital.JPEG'
import mimi from './content/mimi.JPG'
import directors from './content/boardOfDirectors.JPG'


const App = () => {


  return (
  
    <div className='layout'>


      <h1 className="name">Grow With Us</h1>

        <Carousel enableSwipe="true" className="carousel" tiltEasing="ease" itemsToShow={1}>
          <img className='images' src={companyLogo}/>
          <img className='images' src={z1}/>
          <img className='images' src={food}/>
          <img className='images' src={plant}/>
          <img className='images' src={plant2}/>
          <img className='images' src={drive}/>
          <img className='images' src={drive2}/>
          <img className='images' src={hospital}/>
          <img className='images' src={food2}/>
        </Carousel>



        <Accordion className='accordion' square='true'>

          <AccordionSummary className='accordionSummary'> 
            <Typography className='accordionTitle'>About Us</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
               Our ultimate goal is to provide an unwavering resource for the community and aid in the allocation of essential items. We aim to be an active member within our community, participating in local farmers markets, art fairs, and partnering with local businesses. This all-women owned nonprofit aims to spark growth in change within the community, urging us into a new age of self-reliance and resilience
            </Typography>
          </AccordionDetails>

        </Accordion>


        <Accordion className='accordion' square='true'>

          <AccordionSummary className='accordionSummary'>
            <Typography>Contact</Typography>
          </AccordionSummary>

          <AccordionDetails>

            <Typography>Email:</Typography>
            <Typography>learntolivecooperative@gmail.com</Typography>
            <Typography>learntolivecooperative.hr@gmail.com</Typography>

            <Typography>
              <a href="https://www.instagram.com/learn.to.live.coop/">
                Follow us on Instagram
              </a>
            </Typography>

          </AccordionDetails>

        </Accordion>



        <Accordion className='accordion' square='true'>
          <AccordionSummary className='accordionSummary'>
            <Typography>
              Board Of Directors
            </Typography>
          </AccordionSummary>


          <AccordionDetails align='center' className='accordionDetails'>
            <img className='images' src={directors} />
            <div className='seperator'></div>
            <Typography className='names'><span className="underlineForNames">Director of General Operations</span><br/>Zoie Laviolette</Typography>
            <img className='images' src={z1}/>
            <Typography className='names'><span className="underlineForNames">Director of Youth Outreach</span><br/>Noelani White</Typography>
            <img className='images' src={companyLogo}/>
            <Typography className='names'> <span className="underlineForNames">Director of Arts</span><br/>Dominique Keys</Typography>
            <img className='images' src={mimi}/>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accordion' square='true'>
          <AccordionSummary className='accordionSummary'>
            <Typography>
              Board Of Officers
            </Typography>
          </AccordionSummary>


          <AccordionDetails align='center' className='accordionDetails'>
            <Typography className='names'><span className='underlineForNames'>President</span><br/>Zoie Laviolette</Typography>
            <img className='images' src={z1}/>
            <Typography className='names'><span className='underlineForNames'>Secretary</span><br/>Chelsea Sconce</Typography>
            <img className='images' src={companyLogo}/>
            <Typography className='names'><span className='underlineForNames'>Treasurer</span><br/>Jaleadeanne Traynor</Typography>
            <img className='images' src={companyLogo}/>
          </AccordionDetails>
        </Accordion>

    </div>
  );
}

export default App;


