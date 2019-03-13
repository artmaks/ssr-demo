import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getReposAsync } from '../state/actions';
import { FetchContext } from './../context/FetchContext';


class Repos extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            repos: [],
        };

        if (typeof window === 'undefined' || !window.__PRELOADED_STATE__) {
            this.fetchData();
        }
    }

    fetchData () {
        const { match } = this.props;
        const userName =  match.params.userName;
        if (userName) {
            const fetches = this.context;
            const promise = this.props.getRepos(match.params.userName);
            fetches.push(promise);
        }
    }

    render () {
        return (
            <div>
                {this.props.repos ? this.props.repos.map((repo) => (
                    <div key={repo.id}>{repo.name}</div>
                )) : 'Загрузка репозиториев'}
            </div>
        );
    }
}
Repos.contextType = FetchContext;

const mapStateToProps = state => ({
    repos: state.repos,
});

const mapDispatchToProps = dispatch => ({
    getRepos: (userName) => {
      return dispatch(getReposAsync(userName));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Repos);