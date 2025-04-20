import { BadgeData } from 'coh-content-db'

export const MasterOfOlympus: BadgeData = {
  type: 'defeat',
  key: 'master-of-olympus',
  setTitleId: [60],
  name: [
    { sex: 'M', value: 'Master of Olympus' },
    { sex: 'F', value: 'Mistress of Olympus' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have destroyed the Kronos Titan, showing Malta that the Heroes of Paragon City defend their turf.` },
    { alignment: 'villain', value: 'You have destroyed the Kronos Titan, showing Malta that you are a force to be reckoned with.' },
  ],
  acquisition: 'Defeat the Kronos Class Titan.',
  links: [
    { title: 'Master of Olympus Badge', href: 'https://homecoming.wiki/wiki/Master_of_Olympus_Badge' },
    { title: 'Mistress of Olympus Badge', href: 'https://homecoming.wiki/wiki/Mistress_of_Olympus_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/malta.png',
}
