import { BadgeData } from 'coh-content-db'

export const Silencer: BadgeData = {
  type: 'defeat',
  key: 'silencer',
  setTitleId: [2172],
  name: 'Silencer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have stilled the cry of the innocent by punishing all false accusers.',
  acquisition: 'Defeat 100 points worth of Incarnate-level Knives of Vengeance.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'Silencer Badge', href: 'https://homecoming.wiki/wiki/Silencer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/silencer.png',
}
