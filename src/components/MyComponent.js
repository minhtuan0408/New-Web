// class component
// functional component
import React from 'react';

class MyComponent extends React.Component {
    
    state = {
        name: 'Bùi Minh Tuấn',
        age: 18,
        address: 'Hà Nội'
    }

    //JSX
    render() {
        return (    
            <div>
                My name is {this.state.name} <br/>
            </div>
        );
    }
}


export default MyComponent;