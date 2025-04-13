import { BadgeData } from 'coh-content-db'

export const Blindsider: BadgeData = {
  type: 'defeat',
  key: 'blindsider',
  setTitleId: [1468],
  name: 'Blindsider',
  morality: 'all',
  badgeText: 'The Seers never saw you coming! You defeated plenty of Seers to earn this badge.',
  acquisition: 'Defeat 100 points worth of Seers.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'Blindsider Badge', href: 'https://homecoming.wiki/wiki/Blindsider_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/blindsider.png',
}
