import { BadgeData } from 'coh-content-db'

export const Exorcist: BadgeData = {
  type: 'defeat',
  key: 'exorcist',
  setTitleId: [2174],
  name: 'Exorcist',
  morality: 'all',
  badgeText: `You have cast down demons and ancient spirits whose names are as royalty among the legions of the netherworld.`,
  acquisition: 'Defeat 100 points worth of Incarnate-level Circle of Thorns.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: 'Exorcist Badge', href: 'https://homecoming.wiki/wiki/Exorcist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/exorcist.png',
}
