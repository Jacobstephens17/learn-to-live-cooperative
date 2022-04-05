import React, { useState } from 'react'
import companyLogo from './content/LearnToLiveCo-Operative.jpg'
import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider } from '@mui/material';
import './styles.css'
import Item from './components/Item'
import Z from './content/Z.jpg'
import mimi from './content/M.jpg'
import directors from './content/boardOfDirectors.JPG'
import jaleadeanne from './content/jaleadeanne.jpg'
import Carousel from './components/Carousel';
import chelsea from './content/chelsea.png'
import noelani from './content/noelani.jpg'


const App = () => {

  return (
  
    <div className='layout'>

      <h1 className="header">Grow With Us</h1>  
      
        <Carousel/>
        
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
            <img className='images' alt='company logo' src={noelani}/>
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
            <img className='images' alt='company logo' src={chelsea}/>
            <Typography className='names'><span className='underlineForNames'>Treasurer</span><br/>Jaleadeanne Traynor</Typography>
            <img className='images' alt='company logo' src={jaleadeanne}/>
          </AccordionDetails>
        </Accordion>


        </div>

    </div>
  );
}

export default App;


