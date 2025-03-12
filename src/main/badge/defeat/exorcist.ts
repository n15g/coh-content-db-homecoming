import { BadgeData } from 'coh-content-db'

export const Exorcist: BadgeData = {
  type: 'DEFEAT',
  key: 'exorcist',
  setTitle: { id: 2174 },
  name: [
    { value: 'Exorcist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have cast down demons and ancient spirits whose names are as royalty among the legions of '
        + 'the netherworld.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Incarnate-level Circle of Thorns',
  links: [
    { title: 'Exorcist Badge', href: 'https://homecoming.wiki/wiki/Exorcist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/exorcist.png' },
  ],
}
