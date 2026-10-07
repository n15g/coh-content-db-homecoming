import { BadgeData } from 'coh-content-db'

// TODO: Confirm gameId before adding this draft to EVENT_BADGES.
// The setTitleId and exact in-game badgeText also remain unverified.
export const CameOutToPlay: Omit<BadgeData, 'gameId'> = {
  type: 'event',
  key: 'came-out-to-play',
  name: 'Came Out to Play',
  releaseDate: '2026-10-06',
  acquisition: 'Defeat 25 old-school Warriors spawned from Time Capsules during the City of Heroes Anniversary event.',
  links: [
    { title: 'Issue 28, Page 4 Patch Notes — Badge Additions', href: 'https://forums.homecomingservers.com/patch-notes/issue-28/page-4/issue-28-page-4-r47/' },
    { title: 'Issue 28, Page 4 Release Announcement', href: 'https://forums.homecomingservers.com/topic/65857-patch-notes-for-october-6th-2026-issue-28-page-4/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/came-out-to-play.png',
}
