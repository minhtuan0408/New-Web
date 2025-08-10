// class component
// functional component
import React from 'react';

class MyComponent extends React.Component {
    
    state = {
        name: 'Bùi Minh Tuấn',
        age: 18,
        address: 'Hà Nội'
    }

    handleClick(event){
        console.log ("Button clicked!");
        console.log(this.state.name);
        
    }

    handleOnMoverOver(event){
        console.log("Mouse over event!");
        console.log(event);
    }
    //JSX
    render() {
        return (    
            <div>
                My name is {this.state.name} <br/>
                <button onClick={this.handleClick}>Click Here</button> <br/>
                <button onMouseOver={this.handleOnMoverOver}>handleOnMoverOver</button>
            </div>
        );
    }
}


export default MyComponent;