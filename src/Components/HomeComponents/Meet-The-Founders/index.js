import React from 'react'
import AaronImg from '../../../images/Aaron (1).png'
import SamanthaImg from '../../../images/Samantha.png'
import JoeImg from '../../../images/Joe.png'
import CalebImg from '../../../images/Caleb.png'
import GraceImg from '../../../images/Grace.png'
import AlannaImg from '../../../images/Alanna.png'

import {
    MTFContainer,
    MTFWrapper,
    MTFCard,
    MTFIcon,
    MTFH2,
    MTFH1,
    MTFP
} from './MTFElements'

const MeetTheFounders = () => {
  return (
    <MTFContainer id="meet-founders">
      <MTFH1>Meet The Team</MTFH1>
      <MTFWrapper>
        <MTFCard>
          <MTFIcon src={AaronImg} />
          <MTFH2>Aaron Z.</MTFH2>
          <MTFP>Team Lead</MTFP>
        </MTFCard>
        <MTFCard>
          <MTFIcon src={JoeImg} />
          <MTFH2>Joseph V.</MTFH2>
          <MTFP>Full-Stack Dev</MTFP>
        </MTFCard>
        <MTFCard>
          <MTFIcon src={CalebImg} />
          <MTFH2>Caleb Y.</MTFH2>
          <MTFP>Full-Stack Dev</MTFP>
        </MTFCard>
        <MTFCard>
          <MTFIcon src={AlannaImg} />
          <MTFH2>Alanna B.</MTFH2>
          <MTFP>Operation Logisitics</MTFP>
        </MTFCard>
        <MTFCard>
          <MTFIcon src={SamanthaImg} />
          <MTFH2>Samantha F.</MTFH2>
          <MTFP>Operation Logisitics</MTFP>
        </MTFCard>
        <MTFCard>
          <MTFIcon src={GraceImg} />
          <MTFH2>Grace S.</MTFH2>
          <MTFP>Business Analyst</MTFP>
        </MTFCard>
      </MTFWrapper>
    </MTFContainer>
  );
}

export default MeetTheFounders