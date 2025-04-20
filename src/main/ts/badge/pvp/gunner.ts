import { BadgeData, zoneLink } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Gunner: BadgeData = {
  type: 'pvp',
  key: 'gunner',
  setTitleId: [370],
  name: 'Gunner',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have been part of taking over a Firebase, earning you a new nickname: 'Gunner.'`,
  acquisition: `Deactivate a firebase in ${zoneLink(BloodyBay)}.`,
  links: [
    { title: 'Gunner Badge', href: 'https://homecoming.wiki/wiki/Gunner_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/gunner.png',
}
