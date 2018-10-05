import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.div`
    width:100%;
`;

const Hero = styled.div`
    width:33%;
    padding:24px;
`;

const Image = styled.div`
    background: url('${(props)=>props.image}');
    background-position: center;
    background-size: cover;
    width:100%;
    height:200px;
`;

export default class ItemsGrid extends React.Component {
    render() {
        const {items, onItemClick} = this.props;
        return (
            <Wrapper>
                {items.map( (item,index) => (
                    <Hero key={index} >
                        <Image image={item.picture} onClick={(event) => onItemClick(item,event)}/>
                        <Item >{item.name}</Item>
                    </Hero>
                ))}
            </Wrapper>
        );
    }
}