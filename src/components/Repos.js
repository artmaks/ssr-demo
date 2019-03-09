import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getReposAsync } from '../state/actions';


class Repos extends Component {
    constructor (props) {
        super(props);
        this.state = {
            repos: [],
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const userName =  match.params.userName;
        if (userName) {
            this.props.getRepos(match.params.userName);
        }
    }

    render () {
        return (
            <div>
                {this.props.repos.map((repo) => (
                    <div key={repo.id}>{repo.name}</div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    repos: state.repos,
});

const mapDispatchToProps = dispatch => ({
    getRepos: (userName) => {
      dispatch(getReposAsync(userName));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Repos);