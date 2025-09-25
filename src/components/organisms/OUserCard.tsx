import type { GitHubUser, Repository } from '@/types';
import type React from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { ALoading } from '../atoms/ALoading';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { MExternalLink } from '../molecules/MExternalLink';
import { AAvatar } from '../atoms/AAvatar';
import { MItem } from '../molecules/MItem';
import { useState } from 'react';

interface UserCardProps {
  users: GitHubUser[];
  loading: boolean;
  repos: Repository[];
  reposLoading: boolean;
  handleUserSelect: (user: GitHubUser) => void;
}

export const OUserCard: React.FC<UserCardProps> = ({
  users,
  loading,
  repos,
  reposLoading,
  handleUserSelect,
}) => {
  const [openUserId, setOpenUserId] = useState<number | null>(null);
  if (loading) return <ALoading />;
  if (users.length === 0) return <div>No users found</div>;

  return (
    <>
      {users.map((user) => {
        const isOpen = openUserId === user.id;

        return (
          <Collapsible
            key={user.id}
            className="mb-2"
            open={isOpen}
            onOpenChange={(open) => {
              if (open) {
                setOpenUserId(user.id);
                handleUserSelect(user);
              } else {
                setOpenUserId(null);
              }
            }}
          >
            <CollapsibleTrigger className="group flex w-full items-center justify-between py-3 border rounded-lg p-3 bg-white ">
              <div className="flex gap-2 items-center">
                <AAvatar
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  size="sm"
                />
                <h3 className="font-semibold truncate">{user.login}</h3>
                {user.name && (
                  <p className="text-sm text-gray-600 truncate">{user.name}</p>
                )}
              </div>
              <ChevronDown className="h-4 w-4 group-data-[state=open]:rotate-180 transition-transform text-muted-foreground" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-1 pb-3 p-3 border rounded-lg mt-2 bg-white">
              <div className="my-2">
                {isOpen ? (
                  reposLoading ? (
                    <ALoading />
                  ) : (
                    <div className="space-y-4">
                      {repos.map((repo) => (
                        <div
                          key={repo.id}
                          className="border border-gray-200 rounded-md p-4 hover:shadow-sm transition-shadow duration-200"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <MExternalLink
                              href={repo.html_url}
                              className="text-blue-600 font-medium break-words text-base"
                            >
                              {repo.name}
                            </MExternalLink>

                            <div className="flex items-center text-sm text-gray-500 mt-2 sm:mt-0">
                              <MItem
                                icon={Star}
                                value={repo.stargazers_count}
                                label=""
                                href={repo.html_url}
                              />
                            </div>
                          </div>

                          {repo.description && (
                            <p className="text-sm text-gray-600 mt-1 text-left">
                              {repo.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )
                ) : null}
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </>
  );
};
