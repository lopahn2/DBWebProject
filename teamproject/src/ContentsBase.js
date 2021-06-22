import React from 'react';
import { Switch } from 'react-router';
import styled from 'styled-components';
import {Route} from 'react-router-dom';


import DefaultPage from './DefaultPage';
import Economy from './Economy';
import Society from './Society';
import Policy from './Policy';
import RankDetail from './RankDetail';


const ContentsBase = (props) =>{
    return(
        <Background>
            
            <DesignBox/>
            <TextContainer>
                <br/>
                <span style ={{color:"#FFCD4A"}}>What happen Today?</span>
                <br/>
                Based on Hadoop
            </TextContainer>
            
            <RowLine/>
            
            <Switch>
                <Route path="/contentsbase/Economy"   render={(props) => (
                <Economy
                history={props.history}
                />
                )}/>
                <Route path="/contentsbase/Society"  render={(props) => (
                <Society
                history={props.history}
                />
                )}/>
                <Route path="/contentsbase/Policy"  render={(props) => (
                <Policy
                history={props.history}
                />
                )}/>
                
                
                
                <Route path='/contentsbase'  component={DefaultPage}/>
                {/* <Route path='/contentsbase/Economy' exact component={Economy}/>
                <Route path='/contentsbase/Society' exact component={Society}/>
                <Route path='/contentsbase/Policy' exact component={Policy}/> */}
                
            </Switch>
            
            
            
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

`;





const TextContainer = styled.div`
    width : 100vw;
    height : 100px;
    font-size : 30px;
    color : white;
    padding-left : 170px;
`;
const DesignBox = styled.div`
    width : 150px;
    height : 100px;
    background-color : #FFCD4A;
    position : absolute;
    left : 0;
    top : 0;


`;
const RowLine = styled.div`
    width : 100vw;
    height : 5px;
    background-color:#6C6C6C;
    
`;

const ButtonContainer = styled.div`
    position : absolute;
    width : 520px;
    height : 100px;
    left : 1000px;
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
export default ContentsBase;
