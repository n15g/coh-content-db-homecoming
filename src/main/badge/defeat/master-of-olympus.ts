import { BadgeData } from 'coh-content-db'

export const MasterOfOlympus: BadgeData = {
  type: 'DEFEAT',
  key: 'master-of-olympus',
  setTitle: { id: 60 },
  name: [
    { sex: 'M', value: 'Master of Olympus' },
    { sex: 'F', value: 'Mistress of Olympus' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'You have destroyed the Kronos Titan, showing Malta that the Heroes of Paragon City defend '
        + 'their turf.',
    },
    { alignment: 'V', value: 'You have destroyed the Kronos Titan, showing Malta that you are a force to be reckoned with.' },
  ],
  acquisition: 'Defeat Kronos Class Titan, a monster in an ambush in a Crimson mission',
  links: [
    { title: 'Master of Olympus Badge', href: 'https://homecoming.wiki/wiki/Master_of_Olympus_Badge' },
    { title: 'Mistress of Olympus Badge', href: 'https://homecoming.wiki/wiki/Mistress_of_Olympus_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/malta.png' },
  ],
}
