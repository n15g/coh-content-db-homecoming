import { BadgeData } from 'coh-content-db'

export const DUSTInTheWind: BadgeData = {
  type: 'DEFEAT',
  key: 'dust-in-the-wind',
  setTitle: { id: 2060 },
  name: [
    { value: 'D.U.S.T. in the Wind' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'They may be ruthless, genetically modified super-soldiers with no oversight and unlimited '
        + 'resources... But since when is that enough to top you? You defeated several D.U.S.T. to earn '
        + 'this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of D.U.S.T.',
  links: [
    { title: 'D.U.S.T. in the Wind Badge', href: 'https://homecoming.wiki/wiki/D.U.S.T._In_The_Wind_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/dust-in-the-wind.png' },
  ],
}
