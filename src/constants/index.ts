export const API_CONFIG = {
  BASE_URL: 'https://api.github.com',
  ENDPOINTS: {
    SEARCH_USERS: '/search/users',
    USER: '/users',
  },
  LIMITS: {
    SEARCH_RESULTS: 5,
    REPOSITORIES: 5,
  },
} as const;
