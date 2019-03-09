const GIT_URL = 'https://api.github.com';

export const getRepos = (username) => {
    const url = `${GIT_URL}/users/${username}/repos?per_page=250`;

    return fetch(url)
        .then(response => response.json());
}