import React from 'react'
//import Typewriter from 'typewriter-effect'
import Image from '../../../images/map.svg'
import {
    OSContainer,
    OSWrapper,
    OSRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img
} from './OSElements'

const OurStory = () => {
  return (
    <>
        <OSContainer id='our-story'>
            <OSWrapper>
                <OSRow imageStart={false}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Our Story</TopLine>
                            <Heading>Road to Recover Pals</Heading>
                            <Subtitle>
                                After our friend Grace lost her brother, she fell into
                                a period of isolation and depression. She recalled that nobody could
                                understand how she was feeling or why she was acting differently.
                                While she attended therapy and support groups regularly, she found it hard to 
                                relate to anyone else who attended. When Grace finally came to us about her 
                                experience, we discovered that she was part of a large group of people who 
                                find it extremely difficult 
                                to connect with someone who truly understands them after a tramatizing event.
                                Thus, we set out to create Recover Pals, a website designed to 
                                connect recoverees to mentors who have share similar adverse experiences, passions, and interests.
                                </Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={Image}/>
                        </ImgWrap>
                    </Column2>
                </OSRow>
            </OSWrapper>
        </OSContainer>   
    </>
  );
};

export default OurStory
