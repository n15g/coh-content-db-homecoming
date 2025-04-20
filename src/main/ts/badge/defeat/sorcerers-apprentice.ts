import { BadgeData } from 'coh-content-db'

export const SorcerersApprentice: BadgeData = {
  type: 'defeat',
  key: 'sorcerers-apprentice',
  setTitleId: [2215],
  name: `Sorcerer's Apprentice`,
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Your magical aptitude allowed you to tame the wild magics of the Night Ward. The capricious Animus Arcana have been dispelled at your hand.`,
  acquisition: 'Defeat 100 points worth of Animus Arcana.',
  notes: `Each minion counts as 1 point, lieutenants as 2 points, and bosses as 5 points.`,
  links: [
    { title: `Sorcerer's Apprentice Badge`, href: 'https://homecoming.wiki/wiki/Sorcerer%27s_Apprentice_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/sorcerers-apprentice.png',
}
