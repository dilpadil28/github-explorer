import { render } from '@testing-library/react';
import { OUserCard } from './OUserCard';

import { vi } from 'vitest';
import type { GitHubUser, Repository } from '@/types';

vi.mock('../atoms/ALoading', () => ({
  ALoading: () => <div data-testid="loading">Loading...</div>,
}));

vi.mock('../atoms/AAvatar', () => ({
  AAvatar: ({ src, alt }: { src: string; alt: string }) => (
    <img data-testid="avatar" src={src} alt={alt} />
  ),
}));

vi.mock('../molecules/MExternalLink', () => ({
  MExternalLink: ({ href, children }: never) => (
    <a data-testid="external-link" href={href}>
      {children}
    </a>
  ),
}));

vi.mock('../molecules/MItem', () => ({
  MItem: ({ value, href }: never) => (
    <div data-testid="mitem">
      {value} - <a href={href}>Link</a>
    </div>
  ),
}));

vi.mock('../ui/collapsible', () => {
  const Collapsible = ({ children }: never) => {
    return <div>{children}</div>;
  };
  const CollapsibleTrigger = ({ children, onClick }: never) => (
    <button onClick={onClick}>{children}</button>
  );
  const CollapsibleContent = ({ children }: never) => <div>{children}</div>;

  return { Collapsible, CollapsibleTrigger, CollapsibleContent };
});
const usersMock: GitHubUser[] = [
  {
    id: 1,
    login: 'user1',
    avatar_url: 'avatar1.png',
    html_url: 'https://github.com/user1',
    name: 'User One',
    public_repos: 10,
    followers: 5,
    following: 2,
    created_at: '2021-01-01T00:00:00Z',
  },
  {
    id: 2,
    login: 'user2',
    avatar_url: 'avatar2.png',
    html_url: 'https://github.com/user2',
    public_repos: 3,
    followers: 2,
    following: 1,
    created_at: '2022-01-01T00:00:00Z',
  },
];

const reposMock: Repository[] = [
  {
    id: 101,
    name: 'repo1',
    full_name: 'user1/repo1',
    description: 'Repo 1 description',
    html_url: 'https://github.com/user1/repo1',
    stargazers_count: 5,
    forks_count: 2,
    language: 'TypeScript',
    updated_at: '2023-01-01T00:00:00Z',
    topics: ['typescript', 'react'],
    homepage: 'https://repo1-homepage.com',
  },
  {
    id: 102,
    name: 'repo2',
    full_name: 'user1/repo2',
    html_url: 'https://github.com/user1/repo2',
    stargazers_count: 10,
    forks_count: 4,
    updated_at: '2023-06-01T00:00:00Z',
    topics: [],
  },
];

describe('OUserCard', () => {
  it('renders users list and user info', () => {
    render(
      <OUserCard
        users={usersMock}
        loading={false}
        repos={[]}
        reposLoading={false}
        handleUserSelect={vi.fn()}
      />
    );
  });

  it('renders repos details when reposLoading=false', () => {
    render(
      <OUserCard
        users={usersMock}
        loading={false}
        repos={reposMock}
        reposLoading={false}
        handleUserSelect={vi.fn()}
      />
    );
  });
});
