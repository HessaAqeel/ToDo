import React, { Component } from 'react';
import './App.css';


class BooklList extends Component {
    // To check items off of the list 
    // State.chdecked = f , if true add line through the item , if false leave it as it is .  
    state = {
        chechked: 'false',
    }

    scratchItem = () => {
        if (this.state.chechked === 'false') {
            this.setState({ chechked: 'true' })
        } else {
            this.setState({ chechked: 'false' })
        }
    }

    render() {

        return (

            <p className={this.state.chechked} onClick={this.scratchItem} id='itemsP'> {this.props.book} </p>);
    }
}

export default BooklList;
