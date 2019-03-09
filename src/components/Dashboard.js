import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Dashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }

    handleSubmit() {
        if (this.state.input) {
            this.props.history.push(`/user/${this.state.input}`)
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        GitHub Login:
                        <input value={this.state.input} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Перейти" />
                </form>
            </div>
        );
    }
}

export default withRouter(Dashboard);