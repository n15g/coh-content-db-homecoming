import { BadgeData } from 'coh-content-db'

export const MarkedForDeath: BadgeData = {
  type: 'defeat',
  key: 'marked-for-death',
  setTitleId: [1470],
  name: 'Marked for Death',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `The Syndicate has marked you for death, but if they're smart they won't get anywhere near you. You defeated several Syndicate members to earn this badge.`,
  acquisition: 'Defeat 100 points worth of Syndicate.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'Marked for Death Badge', href: 'https://homecoming.wiki/wiki/Marked_for_Death_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/marked-for-death.png',
}
