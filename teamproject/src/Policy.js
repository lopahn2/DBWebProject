import React, {useState} from 'react';
import styled from 'styled-components';
import { Switch } from 'react-router';
import {Route} from 'react-router-dom';

import RankDetail from './RankDetail';
import {useSelector} from 'react-redux';
const Policy = (props) => {

    

    const title = useSelector(state => state.data.ptitle);
    const ntitle = useSelector(state => state.data.pntitle);
    const url = useSelector(state => state.data.purl);
    const urlTitle = useSelector(state => state.data.purlTitle);
    const relatedKeywords = useSelector(state => state.data.prelatedKeyword);
    const twitNums = useSelector(state => state.data.ptwitNum);
    //url과 urlTitle을 한세트로 10개를 만들어서 저장해야함.
    const [select, setSelect] = useState(0);
    var keynum = "key" + (select+1);
    var twitnum = "num" + (select+1);
    return(
        <div>
            <ButtonContainer>
                <Buttons onClick={()=>{
                        props.history.push(`/contentsbase/`)
                    }}>Back</Buttons>
                </ButtonContainer>
            <Category>
                Policy
            </Category>
            <TableContainer>
            <TitleContainer>
                <Title>News</Title>
                <Title>Petition</Title>
            </TitleContainer>
            <TableInnerContainer>
            <Table>
                <ContentsContainer>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(0);
                    }}><Span>{title[0]}</Span></ContentsBtn>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(1);
                    }}><Span>{title[1]}</Span></ContentsBtn>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(2);
                    }}><Span>{title[2]}</Span></ContentsBtn>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(3);
                    }}><Span>{title[3]}</Span></ContentsBtn>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(4);
                    }}><Span>{title[4]}</Span></ContentsBtn>
                </ContentsContainer>
                <ContentsContainer>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(5);
                    }}><Span>{title[5]}</Span></ContentsBtn>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(6);
                    }}><Span>{title[6]}</Span></ContentsBtn>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(7);
                    }}><Span>{title[7]}</Span></ContentsBtn>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(8);
                    }}><Span>{title[8]}</Span></ContentsBtn>
                    <ContentsBtn onClick={()=>{
                        props.history.push("/contentsbase/Policy/RankDetail")
                        setSelect(9);
                    }}><Span>{title[9]}</Span></ContentsBtn>
                </ContentsContainer>
            </Table>
            <Table>
            <ContentsContainer>
                    
                    <ContentsNotBtn><Span2>{ntitle[0]}</Span2></ContentsNotBtn>
                    <ContentsNotBtn><Span2>{ntitle[1]}</Span2></ContentsNotBtn>
                    <ContentsNotBtn><Span2>{ntitle[2]}</Span2></ContentsNotBtn>
                    <ContentsNotBtn><Span2>{ntitle[3]}</Span2></ContentsNotBtn>
                    <ContentsNotBtn><Span2>{ntitle[4]}</Span2></ContentsNotBtn>
                </ContentsContainer>
                <ContentsContainer>
                    <ContentsNotBtn><Span2>{ntitle[5]}</Span2></ContentsNotBtn>
                    <ContentsNotBtn><Span2>{ntitle[6]}</Span2></ContentsNotBtn>
                    <ContentsNotBtn><Span2>{ntitle[7]}</Span2></ContentsNotBtn>
                    <ContentsNotBtn><Span2>{ntitle[8]}</Span2></ContentsNotBtn>
                    <ContentsNotBtn><Span2>{ntitle[9]}</Span2></ContentsNotBtn>
                </ContentsContainer>
            </Table>
            </TableInnerContainer>
            
        </TableContainer>
        <Switch>
        <Route path="/contentsbase/Policy/RankDetail" exact  render={(props) => (
            <RankDetail
            history={props.history} 
            title={title[select]} 
            url={url[select]}
            keyIdx = {keynum}
            section = {"Policy"} 
            newsTitle ={urlTitle[select]}
            // serchTime = {searchTime}
            relatedKeyword = {relatedKeywords}
            twitIdx = {twitnum}
            twitNum = {twitNums}
            />
            )}/>
        </Switch>
        </div>
    );
}
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
const Category = styled.div`
    text-align : center;
    width : 350px;
    height : 60px;
    color : white;
    font-size : 60px;
    position : absolute;
    left : 590px;
    top : 20px;
    border: thick double #FFCD4A; 

`;
const TableContainer = styled.div`
    padding-top : 20px;
    margin : auto;
    width : 1500px;
    height : 600px;
    
    display : flex;
    flex-direction : column;

`;
const TitleContainer = styled.div`
    display : flex;
    flex-direction : row;
`;


const Title = styled.div`
    margin: auto;
    color: #FFCD4A;

`;

const TableInnerContainer = styled.div`
    display : flex;
    flex-direction : row;
`;

const Table = styled.div`
    margin : auto;
    width : 500px;
    height : 500px;
    background-color:#51504C;
    border-radius : 40px;
    display : flex;
    flex-direction : row;

`;

const ContentsContainer = styled.div`
    margin : auto;
    width : 200px;
    height : 450px;
    
    display : flex;
    flex-direction : column;
`;

const ContentsBtn = styled.button`
    width :180px;
    height : 80px;
    border-radius : 20px;
    
    margin: auto;
    text-align : center;
    dispaly : table;
    

`;

const ContentsNotBtn = styled.div`
    width :180px;
    height : 80px;
    background-color : white;
    border-radius : 20px;
    margin: auto;
    padding-left : 10px;
    
    display : table;
    
`;

const Span = styled.span`
    display:table-cell;
    font-family: eignt_bit;
    font-size : 30px;
    vertical-align:middle;
    
`;
const Span2 = styled.span`
    display:table-cell;
    font-family: eignt_bit;
    font-size : 15px;
    vertical-align:middle;
`;


   
    
export default Policy;