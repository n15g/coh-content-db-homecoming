import { BadgeData } from 'coh-content-db'

export const Venomous: BadgeData = {
  type: 'defeat',
  key: 'venomous',
  setTitleId: [538],
  name: 'Venomous',
  morality: 'all',
  badgeText: `You've taken down so many Toxic Tarantulas that people call you Venomous.`,
  acquisition: 'Defeat 50 Arachnos Toxic Tarantulas.',
  links: [
    { title: 'Venomous Badge', href: 'https://homecoming.wiki/wiki/Venomous_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/arachnos.png',
}
