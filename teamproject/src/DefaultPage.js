import React from 'react';
import styled from 'styled-components';

const DefaultPage = (props) => {
    return (
        <div>
            <ButtonContainer>
                <Buttons onClick={()=>{
                    props.history.push('/contentsbase/Economy')
                }}>Economy</Buttons>
                <Buttons onClick={()=>{
                    props.history.push('/contentsbase/Society')
                }}>Society</Buttons>
                <Buttons onClick={()=>{
                    props.history.push('/contentsbase/Policy')
                }}>Policy</Buttons>
            </ButtonContainer>
            <TestDiv>
            Chose Interesting Topic!
            </TestDiv>
        </div>
        
    );
}

const TestDiv = styled.div`
    color : white;
    text-align : center;
    font-size : 100px;
    width : 1000px;
    height : 100px;
    margin : 200px auto;

    
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
export default DefaultPage;