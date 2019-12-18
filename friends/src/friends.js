import React from 'react';
import axios from 'axios';

export default class Friends extends React.Component{
    state = {
        friends: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000')
            .then(res => {
                const friends = res.data;
                this.setState({ friends })
            })
    }

    render() {
        return ( <ul> {this.state.friends.map(friend => <li>{friend.name}</li>)} </ul>)
    }
}