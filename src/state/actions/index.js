import { getRepos } from '../../api';

export const setRepos = data => ({
    type: 'SET_REPOS',
    repos: data,
});

export function getReposAsync(userName) {
    return (dispatch) => {
        return getRepos(userName)
            .then((data) => {
                dispatch(setRepos(data));
                return true;
            });
    }
}