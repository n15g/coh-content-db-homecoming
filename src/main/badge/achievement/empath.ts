import { BadgeData } from 'coh-content-db'

export const Empath: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'empath',
  setTitle: { id: 238, praetorianId: 1692 },
  name: [
    { value: 'Empath' },
    { alignment: 'P', value: 'Death\'s Jailer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have helped your fellow heroes by healing them for ten million hit points.' },
    {
      alignment: 'P', value: 'With you around, people have started to wonder if you\'ve managed to lock up Death somewhere '
        + 'far away.',
    },
  ],
  acquisition: 'Heal others for 10,000,000 hit points',
  links: [
    { title: 'Empath Badge', href: 'https://homecoming.wiki/wiki/Empath_Badge' },
    { title: 'Death\'s Jailer Badge', href: 'https://homecoming.wiki/wiki/Death%27s_Jailer_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
