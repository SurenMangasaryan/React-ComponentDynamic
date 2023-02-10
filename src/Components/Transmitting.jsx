import React, { Component } from 'react'
import Recipient from './Recipient.jsx'

export default class Transmitting extends Component {

    state = {
        block: [
            {
                image: "/images/first_img.jpg",
                title: 'Computer Monitor',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, doloribus!',
                click: 'Button 1',
                id: 1
            },
            {
                image: "/images/second_img.jpg",
                title: 'Mustang',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, doloribus!',
                click: 'Button 2',
                id: 2
            },
            {
                image: "/images/third_img.jpg",
                title: 'Lamborgini',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, doloribus!',
                click: 'Button 3',
                id: 3
            },
        ],
        oneBlock: [],
    }

    handleClick = (item) => {
        this.setState({
            oneBlock: [item]
        })
    }

    render() {
        const { block, oneBlock } = this.state;
        return (
            <div className='all'>

                <div className='block-div'>
                    {block.map(item => {
                        return (
                            <div className='block' key={item.id}>
                                <img src={item.image} />
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <button onClick={() => { this.handleClick(item) }}>{item.click}</button>
                            </div>
                        )
                    })}
                </div>

                <Recipient oneBlock={oneBlock} />

            </div>
        )
    }
}
