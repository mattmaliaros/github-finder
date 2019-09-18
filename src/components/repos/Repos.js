import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { loading, repos } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {repos.map(repo => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    );
  }
};

export default Repos;
