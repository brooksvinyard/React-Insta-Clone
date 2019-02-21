import styled from 'styled-components'
import React from 'react';
import cameraLogo from '../../assets/camera-logo.svg';
import igLogo from '../../assets/iglogo.png';

// Styled with Styled-Components
const SearchBarContainerDiv = styled.div`
    border-bottom: 1px solid #3333;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`;
const StyledLogos = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Camera = styled.img`
    width: 50px;
    padding: 20px;
`;
const Logo = styled.img`
    height: 50px;
    border-left: 1px solid #3333;
    padding-left: 10px;
`;
const SearchBarInput = styled.input`
    margin: 10px 3%;
    width: 35%;
    min-width: 75px;
    height: 35px;
    font-size: 15px;
    border-radius: 5px;
    text-align: center;
`;
const SocialContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    margin-right: 20px;
`;
const Social = styled.div`
    width: 20px;
    height: 20px;
    font-size: 27px;
    padding: 10px;
`;

function SearchBarContainer(props) {
    return (
        <SearchBarContainerDiv>
            <StyledLogos> 
                <Camera alt="camera logo" src={cameraLogo} />
                <Logo alt="instagram logo" src={igLogo} />
            </StyledLogos>
            
            <SearchBarInput type="text" placeholder="🔍 Search" onKeyDown={props.searchPosts} />

            <SocialContainer>
                <Social><i className="fa fa-compass" /></Social>
                <Social><i className="fa fa-heart" /></Social>
                <Social><i className="fa fa-user-circle" /></Social>
            </SocialContainer>
        </SearchBarContainerDiv>
    )
};

export default SearchBarContainer;