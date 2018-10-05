import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Hero = styled.div`
    width:100%;
    height: 400px;
`;

const Image = styled.div`
    background: url('${(props)=>props.image}');
    background-position: center;
    background-size: cover;
    width:100%;
    height:400px;
`;

const Item = styled.div`
    width:100%;
    height:400px;
`;

export default class ItemDetails extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <Wrapper>
                <Hero>
                    <Image image={item.picture} />
                    <Item >{item.name}</Item>
                </Hero>
            </Wrapper>
        );
    }
}