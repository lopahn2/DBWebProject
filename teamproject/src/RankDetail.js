import React from 'react';
import styled from 'styled-components';

const RankDetail = (props) => {
    const keyidx = props.keyIdx;
    const twitidx = props.twitIdx;
    
    const keyword = props.relatedKeyword[keyidx];
    const twitNum = props.twitNum[twitidx];
    setTimeout(() => {
        console.log('Async Hey There');
        
      }, 2000);
    let sumup = 0;
    for(var i = 0; i < twitNum.length; i++){
        sumup = sumup + twitNum[i];
    }
    
    const barPercent = [twitNum[0]/sumup,twitNum[1]/sumup,twitNum[2]/sumup,twitNum[3]/sumup,twitNum[4]/sumup];
    
    return(
            <Background>  
                <ButtonContainer>
                    <Buttons onClick={()=>{
                        props.history.push(`/contentsbase/${props.section}/`)
                    }}>Back</Buttons>
                </ButtonContainer>
                <TableContainer>
                    <TitleDiv>{props.title}</TitleDiv>
                    <TextDiv>

                        {//https://www.mozilla.com 처럼 절대 주소로 저장하기
                        }
                        <ContentsNotBtn><a href={props.url[0]}>{props.newsTitle[0]}</a></ContentsNotBtn>
                        <ContentsNotBtn><a href={props.url[1]}>{props.newsTitle[1]}</a></ContentsNotBtn>
                        <ContentsNotBtn><a href={props.url[2]}>{props.newsTitle[2]}</a></ContentsNotBtn>
                        <ContentsNotBtn><a href={props.url[3]}>{props.newsTitle[3]}</a></ContentsNotBtn>
                        <ContentsNotBtn><a href={props.url[4]}>{props.newsTitle[4]}</a></ContentsNotBtn>
                    </TextDiv>
                </TableContainer>
                <GraphContainer>
                    <GraphDiv id="twit">
                        <SubTitleDiv>
                            {props.title}
                        </SubTitleDiv>
                        <GraphFieldDiv>
                            <GraphBar style={{height:`${barPercent[0]*100}%`}}></GraphBar>
                            <GraphBar style={{height:`${barPercent[1]*100}%`}}></GraphBar>
                            <GraphBar style={{height:`${barPercent[2]*100}%`}}></GraphBar>
                            <GraphBar style={{height:`${barPercent[3]*100}%`}}></GraphBar>
                            <GraphBar style={{height:`${barPercent[4]*100}%`}}></GraphBar>
                        </GraphFieldDiv>
                        <BarTextContainer>
                            <BarText>1</BarText>
                            <BarText>2</BarText>
                            <BarText>3</BarText>
                            <BarText>4</BarText>
                            <BarText>5</BarText>
                        </BarTextContainer>
                        
                    </GraphDiv>
                    <KeywordDiv>
                        <BarTextDetail>1 : {keyword[0]}</BarTextDetail>
                        <BarTextDetail>2: {keyword[1]}</BarTextDetail>
                        <BarTextDetail>3: {keyword[2]}</BarTextDetail>
                        <BarTextDetail>4: {keyword[3]}</BarTextDetail>
                        <BarTextDetail>5: {keyword[4]}</BarTextDetail>
                    </KeywordDiv>
                    
                </GraphContainer>
                
            </Background>
            
    );
}


const Background = styled.div`
    position: relative;
    width : 100vw;
    max-width: 100vw;
    height : 750px;
    max-height : 100vh;
    overflow-x : hidden;
    background-color:#3C3C3C;
    display : flex;
    flex-direction : row;

`;

const ButtonContainer = styled.div`
    position : absolute;
    width : 150px;
    height : 100px;
    left : 1300px;
    top : 0px;
`;

const Buttons = styled.button`
    color : white;
    font-size: 23px;
    font-family: eignt_bit;
    background-color:#41424F;
    margin : 20px 10px 20px 30px;
    width : 130px;
    height : 60px;
    
`;

const TableContainer = styled.div`
    margin : auto 0 auto 200px;
    width : 400px;
    height : 600px;
    display : flex;
    flex-direction : column;
`;



const GraphContainer = styled.div`
    margin : auto auto auto 200px;
    width : 400px;
    height : 600px;
    display : flex;
    flex-direction : column;
`;

const TitleDiv = styled.div`
    width : 500px;
    height : 70px;
    font-size: 60px;
    font-family: eignt_bit;
    background-color : #FFCD4A;
    border-radius : 15px;
    text-align : center;
    padding-top : 10px;
    
    
    
    
`;
const TextDiv = styled.div`
    width : 500px;
    height : 500px;
    font-size: 23px;
    font-family: eignt_bit;
    border-radius : 15px;
    background-color:#41424F;
    display: flex;
    flex-direction : column;
    margin :auto;
    
`;
const ContentsNotBtn = styled.div`
    width :450px;
    height : 30px;
    background-color : white;
    border-radius : 20px;
    margin: auto;
    padding : 20px;
    display : table;
    font-size: 20px;
    text-align:center;
    vertical-align:middle;
`;

const GraphDiv = styled.div`
    width : 500px;
    height : 280px;
    margin : auto;
    border : 5px solid white;
`;

const KeywordDiv = styled.div`
    width : 500px;
    height : 280px;
    margin : auto;
    border : 5px solid white;
    display : flex;
    flex-direction : column;
`;


const SubTitleDiv = styled.div`
    width : 100%;
    height : 20%;
    
    text-align : center;
    color : white;
    margin-top : 10px;

`;

const GraphFieldDiv = styled.div`
    width : 100%;
    height : 74%;
    margin-top : -70px;
    display : flex;
    flex-direction : row;
    border-bottom : 4px solid red;

`;

const GraphBar = styled.div`
    position : relative;
    
    width : 70px;
    margin : auto auto 0 auto;
    background-color: white;
`;
const BarTextContainer = styled.div`
    width : 100%;
    heigh : 70px;
    display : flex;
    flex-direction : row;
`;

const BarText = styled.div`
    width : 70px;
    height: 70px;
    text-align: center;
    color: white;
    margin : auto ;
`;

const BarTextDetail = styled.div`
    width : 100%;
    height: 70px;
    text-align: left;
    color: white;
    margin-left : 15px;
    margin-top : 4px;
    font-size : 30px;
    
`;



export default RankDetail;