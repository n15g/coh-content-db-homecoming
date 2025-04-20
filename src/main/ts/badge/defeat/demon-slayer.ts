import { BadgeData } from 'coh-content-db'

export const DemonSlayer: BadgeData = {
  type: 'defeat',
  key: 'demon-slayer',
  setTitleId: [41],
  name: 'Demon Slayer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have defeated Baphomet, an evil spirit summoned by the upper echelon of the Circle of Thorns to destroy Paragon City.` },
    { alignment: 'villain', value: 'You have defeated Baphomet, an evil spirit summoned by the upper echelon of the Circle of Thorns.' },
  ],
  acquisition: `Defeat Baphomet, the Circle of Thorns Arch-Villain.`,
  links: [
    { title: 'Demon Slayer Badge', href: 'https://homecoming.wiki/wiki/Demon_Slayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cot.png',
}
