import React from 'react';
import styled,{ keyframes} from 'styled-components';

const Start = (props) =>{
    
    return(
        <Background>
            <TextContainer>
                <br/>
                <br/>
                DataBase Practice Web Programming Idea Proposal
            </TextContainer>
            <TeamText>
                Team4<br/>
                16102282 Oh Younggeun<br/>
                17101041 Kim Dalwon<br/>
                19102087 Park Jaeyoung<br/>
                19102091 Phan Younghwan
            </TeamText>
            <RowLine></RowLine>
            <ColLine></ColLine>
            <Title>
                OSSUE
            </Title>
            <ButtonDiv>
                <ButtonText>GO!</ButtonText>
                <StartButton onClick={()=>{
                    props.history.push('/contentsBase');
                }}/>
            </ButtonDiv>
            
        </Background>
    );
}

const Background = styled.div`
    
    width : 100%;
    height : 750px;
    max-height : 100vh;
    
    background-color:#3C3C3C;

`;
const FadeIn = keyframes`
    0%{
        opacity : 0%;
    }
    50%{
        opacity : 50%;
    }
    100%{
        opacity : 100%;
    }
`;

const FadeInBt = keyframes`
    0%{
        opacity : 0%;
    }
    50%{
        opacity : 0%;
    }
    70%{
        opacity : 40%;
    }
    100%{
        opacity : 100%;
    }
`;

const MoveLeftToRight = keyframes`
    0%{
        left : -1000px;
    }
    50%{
        left : -200px;
    }
    100%{
        left : 0 px;
    }
`;
const Title = styled.div`
    color : #FFCD4A;
    position : absolute;
    left : 0px ;
    top : 200px;
    font-size : 270px;
    animation : ${MoveLeftToRight} 1s  linear ;
`;


const TextContainer = styled.div`
    width : 100vw;
    height : 100px;
    font-size : 30px;
    color : white;
    padding-left : 15px;
    animation : ${FadeIn} 1.5s linear;
    
    
`;

const TeamText = styled.div`
    color : white;
    font-size : 30px;
    position : absolute;
    left : 930px;
    top : 520px;
    animation : ${FadeIn} 1.5s linear;
`;

const RowLine = styled.div`
    width : 100vw;
    height : 5px;
    background-color:#6C6C6C;
    animation : ${FadeIn} 1s linear;
`;
const ColLine = styled.div`
    width : 5px;
    height : 100vh;
    background-color:#6C6C6C;
    position : absolute;
    left : 1420px;
    top :0;
    animation : ${FadeIn} 1s linear;
`;

const ButtonDiv = styled.div`
    position : relative;
    left : 1100px;
    top : 120px;
    width : 200px;
    height : 200px;

`;

const StartButton = styled.button`
    width : 150px;
    height : 150px;
    border-radius : 100px;
    background-color : #FFCD4A;
    position : absolute;
    z-index : 0;
    left : 25px;
    top :25px;
    animation : ${FadeInBt} 3s linear;
`;
const ButtonText = styled.div`
    position : absolute;
    left:53px;
    top : 77px;
    z-index:1;
    animation : ${FadeInBt} 3s linear;
`;



export default Start;
