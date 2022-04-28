import React from 'react'
import Icon1 from '../../../images/sign-up.svg'
import Icon2 from '../../../images/match.svg'
import Icon3 from '../../../images/connect.svg'
import { useNavigate } from 'react-router-dom'
import {
    HWWContainer,
    HWWH1,
    HWWWrapper,
    HWWCard,
    HWWIcon,
    HWWH2,
    HWWP
} from './HWWElements'

const HowWeWork = () => {
    const navigate = useNavigate();

  return (
    <HWWContainer id='how-we-work'>
        <HWWH1>How We Work</HWWH1>
        <HWWWrapper>
            <HWWCard>
                <HWWIcon src={Icon1} onClick={() => (navigate("/sign-up"))}/>
                <HWWH2>1.   Sign Up</HWWH2>
                <HWWP>Tell us about what you're going through, 
                    how you cope, what your interests are, and what you're looking for in a Pal.</HWWP>
            </HWWCard>
            <HWWCard>
                <HWWIcon src={Icon2}/>
                <HWWH2>2.   Match</HWWH2>
                <HWWP>Match with 
                    Mentor who has recovered from similar experiences as well as shares your passions, interests, and more.</HWWP>
            </HWWCard>
            <HWWCard>
            <   HWWIcon src={Icon3}/>
                <HWWH2>3.   Connect</HWWH2>
                <HWWP>Reach out to your new Recover Pal, share your story, build 
                    a support system, and make a friend for life!</HWWP>
            </HWWCard>
        </HWWWrapper>
    </HWWContainer>
  )
}

export default HowWeWork