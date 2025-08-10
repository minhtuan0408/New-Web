// class component
// functional component
import React from 'react';

class MyComponent extends React.Component {
    
    state = {
        name: 'Bùi Minh Tuấn',
        age: 18,
        address: 'Hà Nội',
        luckyNumber: 7
    }

    hoten = {
        name: 'Ai đó',
        age: 18,
        address: 'Hà Nội',
        luckyNumber: 7
    }
    handleClick = (event) => {
        console.log ("Button clicked!");
        
        this.setState({
            luckyNumber: Math.floor(Math.random() * 100) + 1
        })

        console.log(this.state.name + "lucky number is: " + this.state.luckyNumber);
    }

    handleOnMoverOver(event){
        // console.log("Đừng chạm vào tôi!", this.state.name , "dear!");
    }

    handleOnChangeInput = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form
        console.log (this.state)
    }

    //JSX
    render() {
        return (    
            <div>
                My name is {this.state.name} và con số may mắn là {this.state.luckyNumber} <br/>
                {/* <button onClick={this.handleClick}>Click Here</button>
                <button onMouseOver={(event) => this.handleOnMoverOver(event)}>handleOnMoverOver</button> */}

                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <input type="text" 
                    onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


export default MyComponent;