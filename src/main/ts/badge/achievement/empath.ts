import { BadgeData } from 'coh-content-db'

export const Empath: BadgeData = {
  type: 'achievement',
  key: 'empath',
  setTitleId: [238, 1692],
  name: [
    { value: 'Empath' },
    { alignment: 'praetorian', value: `Death's Jailer` },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { value: 'You have helped your fellow heroes by healing them for ten million hit points.' },
    { alignment: 'praetorian', value: `With you around, people have started to wonder if you've managed to lock up Death somewhere far away.` },
  ],
  acquisition: 'Heal others for 10,000,000 hit points.',
  links: [
    { title: 'Empath Badge', href: 'https://homecoming.wiki/wiki/Empath_Badge' },
    { title: `Death's Jailer Badge`, href: 'https://homecoming.wiki/wiki/Death%27s_Jailer_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
