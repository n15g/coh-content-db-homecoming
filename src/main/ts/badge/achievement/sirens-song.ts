import { BadgeData } from 'coh-content-db'

export const SirensSong: BadgeData = {
  type: 'achievement',
  key: 'sirens-song',
  setTitleId: [399],
  name: [
    { alignment: 'hero', value: `Siren's Song` },
    { alignment: 'villain', value: 'Raider' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Siren's Call must call to you. You've spent over one hour there.`,
  acquisition: `Spend 1 hour in Siren's Call.`,
  links: [
    { title: `Siren's Song Badge`, href: 'https://homecoming.wiki/wiki/Siren%27s_Song_Badge' },
    { title: 'Raider Badge', href: 'https://homecoming.wiki/wiki/Raider_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
