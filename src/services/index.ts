import { API_CONFIG } from '@/constants';
import type { GitHubUser, Repository, SearchResponse } from '@/types';
import axios from 'axios';

async function makeRequest<T>(endpoint: string): Promise<T> {
  try {
    const response = await axios.get<T>(`${API_CONFIG.BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
}

export async function searchUsersService(
  username: string
): Promise<GitHubUser[]> {
  const endpoint = `${API_CONFIG.ENDPOINTS.SEARCH_USERS}?q=${encodeURIComponent(
    username
  )}&per_page=${API_CONFIG.LIMITS.SEARCH_RESULTS}`;
  const response = await makeRequest<SearchResponse>(endpoint);
  return response.items;
}

export async function getUserRepositoriesService(
  username: string
): Promise<Repository[]> {
  const endpoint = `${API_CONFIG.ENDPOINTS.USER}/${username}/repos?sort=updated&per_page=${API_CONFIG.LIMITS.REPOSITORIES}`;
  return makeRequest<Repository[]>(endpoint);
}
