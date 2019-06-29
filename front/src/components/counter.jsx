import React, { Component } from 'react';

class Counter extends Component {
    state = {
      count: 0,
        imgUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3'],
        tags2: []
    };
    renderTags() {
        if (this.state.tags2.length === 0)
            return <p> No tags! </p>;
        return <ul>
            {this.state.tags2.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    }
    render() {
        return (
                <div>
                    {/*<img src={this.state.imgUrl} alt=""/>*/}
                    {/*<span className="badge badge-primary m-2">{this.formatCount()}</span>*/}
                    {/*<button className="btn btn-secondary btn-sm">Increment</button>*/}
                    {this.renderTags()}
                </div>
            );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;
