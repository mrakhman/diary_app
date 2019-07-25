import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class OnePost extends React.Component {
    ifHasTag = () => {
        if (this.props.location.state[0].tag) {
            return <h1>Tag: {this.props.location.state[0].tag}</h1>
        }
        else
            return <h1>No tag</h1>
    };

    render () {
        return (
            <div className='post main'>
                <Moment className="date" format="YYYY-MM-DD, HH:mm">{this.props.location.state[0].date}</Moment>
                <br/>
                <small className="text-success">{this.props.location.state[0].date}</small>
                {this.ifHasTag()}
                <h4>{this.props.location.state[0].title}</h4>
                <p>{this.props.location.state[0].text}</p>
            </div>
        );
    }
}

export default OnePost;
