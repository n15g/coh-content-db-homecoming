import { BadgeData } from 'coh-content-db'

export const EvilsResident: BadgeData = {
  type: 'event',
  key: 'evils-resident',
  setTitleId: [1022],
  name: `Evil's Resident`,
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've defeated 25 Zombie Bosses, making your place of occupation a Home of the Dead.`,
  acquisition: 'Defeat 25 Zombie bosses during Zombie Apocalypses.',
  links: [
    { title: `Evil's Resident Badge`, href: 'https://homecoming.wiki/wiki/Evil%27s_Resident_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/evils-resident.png',
}
