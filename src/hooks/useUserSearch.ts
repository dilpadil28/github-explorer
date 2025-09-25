import { searchUsersService } from '@/services';
import type { GitHubUser } from '@/types';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

export const useUserSearch = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(false);

  const searchUsers = useCallback(async (query: string) => {
    if (!query.trim()) {
      setUsers([]);
      return;
    }

    setLoading(true);

    try {
      const results = await searchUsersService(query);
      setUsers(results);
    } catch (err) {
      console.log('🚀 ~ useUserSearch ~ err:', err);
      toast.error('Failed to search users. Please try again.');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, searchUsers };
};
