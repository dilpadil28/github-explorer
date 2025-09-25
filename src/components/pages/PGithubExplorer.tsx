import { useCallback, useState } from 'react';
import { THeader } from '../templates/THeader';
import type { GitHubUser } from '@/types';
import { useUserSearch } from '@/hooks/useUserSearch';
import { useRepoData } from '@/hooks/useRepoData';
import { MSearchInput } from '../molecules/MSearchInput';
import { OUserCard } from '../organisms/OUserCard';

export const PGitHubExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const { users, loading: searchLoading, searchUsers } = useUserSearch();
  const {
    repos,
    loading: reposLoading,
    loadRepoData,
    clearUserData,
  } = useRepoData();

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleSearchSubmit = useCallback(
    (value: string) => {
      searchUsers(value);
      setSubmittedTerm(value);
      setShowResults(true);
    },
    [searchUsers]
  );

  const handleSearchClear = useCallback(() => {
    setSearchTerm('');
    setShowResults(false);
    clearUserData();
  }, [clearUserData]);

  const handleUserSelect = useCallback(
    (selectedUser: GitHubUser) => {
      loadRepoData(selectedUser.login);
    },
    [loadRepoData]
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 max-w-xl mx-auto">
      <THeader title="GitHub Explorer" />

      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="max-w-xl mx-auto">
            <MSearchInput
              value={searchTerm}
              onChange={handleSearchChange}
              onSubmit={handleSearchSubmit}
              onClear={handleSearchClear}
              placeholder="Enter username"
            />
          </div>
          {showResults && !searchLoading && submittedTerm && (
            <div className="mt-2">
              Showing users for "<b>{submittedTerm}</b>"
            </div>
          )}

          {showResults && (
            <div className="max-w-xl mx-auto mt-4">
              <OUserCard
                users={users}
                loading={searchLoading}
                repos={repos}
                reposLoading={reposLoading}
                handleUserSelect={handleUserSelect}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
