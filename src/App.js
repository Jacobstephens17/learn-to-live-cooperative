import React, { useState } from 'react'
import companyLogo from './content/LearnToLiveCo-Operative.jpg'
import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider } from '@mui/material';
import './styles.css'
import Carousel from 'react-elastic-carousel'
import Item from './components/Item'
import z1 from './content/zoie1.JPG'
import Z from './content/Z.jpg'
import food from './content/food.JPG'
import plant from './content/plant.JPG'
import plant2 from './content/plant2.JPG'
import drive from './content/drive.JPG'
import drive2 from './content/drive2.JPG'
import food2 from './content/food2.jpg'
import hospital from './content/hospital.JPEG'
import mimi from './content/mimi.jpg'
import directors from './content/boardOfDirectors.JPG'
import jaleadeanne from './content/jaleadeanne.jpg'

const App = () => {


  return (
  
    <div className='layout'>


      <h1 className="header">Grow With Us</h1>

        <Carousel enableSwipe="true" className="carousel" tiltEasing="ease" itemsToShow={1}>
          <img className='images' alt='logo' src={companyLogo}/>
          <img className='images' alt='zoie' src={z1}/>
          <img className='images' alt='food' src={food}/>
          <img className='images' alt='plant' src={plant}/>
          <img className='images' alt='plant two' src={plant2}/>
          <img className='images' alt='food drive'src={drive}/>
          <img className='images' alt='food drive 2'src={drive2}/>
          <img className='images' alt='hospital' src={hospital}/>
          <img className='images' alt='food' src={food2}/>
        </Carousel>


        <div className='accordionContainer'>

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

            <img className='images' alt='directors' src={directors} />
            <div className='seperator'></div>
            <Typography className='names'><span className="underlineForNames">Director of General Operations</span><br/>Zoie Laviolette</Typography>
            <img className='images' alt='zoie' src={Z}/>
            <Typography className='names'><span className="underlineForNames">Director of Youth Outreach</span><br/>Noelani White</Typography>
            <img className='images' alt='company logo' src={companyLogo}/>
            <Typography className='names'> <span className="underlineForNames">Director of Arts</span><br/>Dominique Keys</Typography>
            <img className='images' alt='mimi' src={mimi}/>
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
            <img className='images' alt='zoie' src={Z}/>
            <Typography className='names'><span className='underlineForNames'>Secretary</span><br/>Chelsea Sconce</Typography>
            <img className='images' alt='company logo' src={companyLogo}/>
            <Typography className='names'><span className='underlineForNames'>Treasurer</span><br/>Jaleadeanne Traynor</Typography>
            <img className='images' alt='company logo' src={jaleadeanne}/>
          </AccordionDetails>
        </Accordion>


        </div>

    </div>
  );
}

export default App;


