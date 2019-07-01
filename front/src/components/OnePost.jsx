import React from 'react';

class OnePost extends React.Component {
    render () {
        return (
            <div className='post main'>
                <h4>{this.props.location.state[0].title}</h4>
                <p>{this.props.location.state[0].text}</p>
            </div>
        );
    }
}

export default OnePost;
