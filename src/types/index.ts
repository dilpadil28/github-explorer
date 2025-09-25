export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  bio?: string;
  location?: string;
  blog?: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description?: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
  updated_at: string;
  topics: string[];
  homepage?: string;
}

export interface SearchResponse {
  items: GitHubUser[];
  total_count: number;
}
