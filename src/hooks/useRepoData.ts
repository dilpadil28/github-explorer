import { getUserRepositoriesService } from '@/services';
import type { Repository } from '@/types';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

export const useRepoData = () => {
  const [repos, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);

  const loadRepoData = useCallback(async (username: string) => {
    setLoading(true);
    setRepositories([]);

    try {
      const repos = await getUserRepositoriesService(username);
      setRepositories(repos);
    } catch (err) {
      console.log('🚀 ~ useRepoData ~ err:', err);
      toast.error('Failed to load user data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const clearUserData = useCallback(() => {
    setRepositories([]);
  }, []);

  return { repos, loading, loadRepoData, clearUserData };
};
