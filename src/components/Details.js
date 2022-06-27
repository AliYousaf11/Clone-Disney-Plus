import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
      <Background>
        <img src="/local/bao-1.jpg" alt="" />
      </Background>

      <ImageTitle>
        <img src="/local/png-farewell-farewell-684.png" alt="" />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>

      </Controls>
      <SubTitle>
        2018 . 7m . Family, Famtasy, Kids, Animation
      </SubTitle>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Qui debitis officiis accusamus, perferendis
        ullam labore beatae vero vitae aperiam, consectetur
        at harum itaque in quam eaque
        voluptate aspernatur! Eos, odit.
      </Description>
    </Container>
  )
}

export default Details

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
position:fixed;
top: 0;
left: 0;
bottom : 0;
right : 0;
z-index: -1;
opacity: 0.7;
  
  img{
      width: 100%;
      height: 100%;
      object-fit : cover;
  }
`
const ImageTitle = styled.div`
  height: 30vh;
  min-height:170px;
  min-width: 550px;
  width:35vw;
  margin-top:60px;

  img{
    background: rgba(0,0,0,0);
    width:100%;
    height:100%;
    object-fit:cover;
  }
`

const Controls = styled.div`
  display:flex;
  align-items:center;
`
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display:flex;
  padding: 0px 24px;
  margin-right: 22px;
  align-items:center;
  height: 56px;
  background:rgb (249,249,249);
  border:none;
  letter-spacing: 1.8px;
  cursor:pointer;

  &:hover{
    background:rgba(198,198,198);
  }
`
const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249,249,249);
  color:rgb(249,249,249);
  text-transform:uppercase;  
`
const AddButton = styled.button`
  width:44px;
  margin-right: 16px;
  height:44px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;   
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor:pointer;

  span{
    font-size: 30px;
    color:white;
  }
`
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
color: rgb(249,249,249);
font-size:15px;
min-heihgt:20px;
margin-top:26px;
`
const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
max-width:760px;
color:rgb(249,249,249);
`
