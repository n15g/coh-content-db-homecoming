import { BadgeData } from 'coh-content-db'

export const DemonSlayer: BadgeData = {
  type: 'DEFEAT',
  key: 'demon-slayer',
  setTitle: { id: 41 },
  name: [
    { value: 'Demon Slayer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'You have defeated Baphomet, an evil spirit summoned by the upper echelon of the Circle of '
        + 'Thorns to destroy Paragon City.',
    },
    {
      alignment: 'V', value: 'You have defeated Baphomet, an evil spirit summoned by the upper echelon of the Circle of '
        + 'Thorns.',
    },
  ],
  acquisition: 'Defeat Baphomet, a villain found in the Faathim the Kind Task Force and an Angus McQueen mission',
  links: [
    { title: 'Demon Slayer Badge', href: 'https://homecoming.wiki/wiki/Demon_Slayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cot.png' },
  ],
}
