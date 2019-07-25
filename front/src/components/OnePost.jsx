import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class OnePost extends React.Component {
    ifHasTag = () => {
        if (this.props.location.state[0].tag) {
            return <h4>Tag: {this.props.location.state[0].tag}</h4>
        }
        else
            return <h4>No tag</h4>
    };

    render () {
        return (
            <div className='post main'>
                <Moment className="date" format="YYYY-MM-DD, HH:mm">{this.props.location.state[0].date}</Moment>
                {this.ifHasTag()}
                <h3>{this.props.location.state[0].title}</h3>
                <p>{this.props.location.state[0].text}</p>
            </div>
        );
    }
}

export default OnePost;
