import React from 'react';

class OnePost extends React.Component {
    state = {
        title: '',
        text: null
    };
    constructor(props) {
        super(props);
        this.state.title = this.props.location.state.title;
    }
    componentDidMount() {
        let data = this.props.location.state;
        // return <h4>{data.title}</h4>;
        console.log(data[0].title);
        console.log(this.state)
    }

    render () {
        return (
            <div className='post main'>
                <h1>He</h1>
                <h4>{this.props.location.state[0].title}</h4>
                <h4>{this.state.title}</h4>
            </div>
        );
    }
}

export default OnePost;
