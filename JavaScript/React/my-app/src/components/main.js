import React, { Component } from 'react'
import Item from './item.js'
import Image from './item1.js'
import SubTitle from './item2.js'
import MainTitle from './item3.js';
import Rating from './item4.js';

class Main extends Component { 
    render() {
        return (
            <div>
                <div>
                    <p>Homes Around the World</p>
                <Item />
                </div>
                <div>
                <Image />
                </div>
                <div>
                <SubTitle />
                </div>
                <div>
                    <MainTitle />
                </div>
                <div>
                    <Rating />
                </div>
            </div>
            
        )
    }
}


export default Main