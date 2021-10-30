import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import avatar1 from '../img/avatar1.svg';
import avatar2 from '../img/avatar2.svg';
import avatar3 from '../img/avatar3.svg';
import avatar4 from '../img/avatar4.svg';
import avatar5 from '../img/avatar5.svg';
import messaging from '../img/conversation.svg';
import bgCircles from '../img/circleBg.svg';
function MassagingSection() {
    return (
    <MessageStyle>
        <InnerLayout>
            <div className="massage-con">
                <div className="left-items">
                    <h2 className="secondary-heading">
                        We support you in 5 different languages
                    </h2>
                    <p className="m-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Officiis distinctio vel, quod repellendus enim exercitationem ullam quas facere sapiente esse incidunt, odio laborum?
                    </p>
                    <div className="images-con">
                        <img src={avatar1} alt="" className="image-1" />
                        <img src={avatar2} alt="" className="image-2" />
                        <img src={avatar3} alt="" className="image-3" />
                        <img src={avatar4} alt="" className="image-4" />
                        <img src={avatar5} alt="" className="image-5" />
                        <p>&nbsp; +25</p>
                        <img src={bgCircles} alt="" className="bgCircles"/>
                    </div>
                </div>
                <div className="right-items">
                    <img src={messaging} alt=""/>
                    <img src={bgCircles} alt="" className="bgCircles"/>
                </div>
            </div>
        </InnerLayout>
    </MessageStyle>
    )
}

const MessageStyle = styled.section`
    .massage-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        @media screen and (max-width: 845px){
            grid-template-columns: repeat(1, 1fr);
            .right-items{
                margin-top: 20px;
                margin-left: -25px;
            }
    }
    }
    .left-items{
        position: relative;
        padding-right: 2rem;
       .m-para{
            padding: 1em 0;
        }
        .images-con{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -20px;
            }
        }
        .bgCircles{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 2rem;
        }
        .bgCircles{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
    }
`

export default MassagingSection;
