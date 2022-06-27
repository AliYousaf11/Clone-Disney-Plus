import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>
                Recommended For You
                <Content>
                    <Wrap>
                        <img src="/local/maxresdefault.jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Disney-Animated-Feature.avif" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Vector-Cartoon-Disney-Castle.webp" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/th (1).jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/maxresdefault.jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Disney-Animated-Feature.avif" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Vector-Cartoon-Disney-Castle.webp" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/th (1).jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/maxresdefault.jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Disney-Animated-Feature.avif" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Vector-Cartoon-Disney-Castle.webp" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/th (1).jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/maxresdefault.jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Disney-Animated-Feature.avif" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Vector-Cartoon-Disney-Castle.webp" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/th (1).jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/maxresdefault.jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Disney-Animated-Feature.avif" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Vector-Cartoon-Disney-Castle.webp" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/th (1).jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/maxresdefault.jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Disney-Animated-Feature.avif" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Vector-Cartoon-Disney-Castle.webp" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/th (1).jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/maxresdefault.jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Disney-Animated-Feature.avif" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Vector-Cartoon-Disney-Castle.webp" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/th (1).jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/Goofy-Max-a-goofy-movie-1995-Edited.avif" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/The-Wonderful-World-of-Mickey-Mouse.jpg" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/5CEE7E23-9C2A-4C9B-9B15-D40DCF43A36E.png" alt="" />
                    </Wrap>
                    <Wrap>
                        <img src="/local/t2h.jpg" alt="" />
                    </Wrap>
                </Content>
            </h4>
        </Container>
    )
}

export default Movies

const Container = styled.div`
`

const Content = styled.div`
    display:grid;
    grid-gap:15px;
    grid-template-columns: repeat(5, minmax(0, 2fr));
`
const Wrap = styled.div`
border-radius: 10px;
overflow: hidden;
cursor:pointer;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition : all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;   
 

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
&:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 /72%) 0px 30px 22px -10px;
    bordr-color: rgba(249,249,249,0.8);
}
`