import { BadgeData } from 'coh-content-db'

export const Paradigm: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'paradigm',
  setTitle: { id: 247, praetorianId: 1710 },
  name: [
    { value: 'Paradigm' },
    { alignment: 'P', value: 'Old-Timer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You are a Paradigm, that which all other heroes aspire to be.' },
    { alignment: 'V', value: 'You\'ve spent considerable time as a boss of others.' },
    {
      alignment: 'P', value: 'There\'s no doubt you\'ve seen it all, and the young pups who look up to you have started '
        + 'calling you "Old-Timer." You\'ll take it as a term of endearment.',
    },
  ],
  acquisition: 'Sidekick another hero for 24 hours',
  links: [
    { title: 'Paradigm Badge', href: 'https://homecoming.wiki/wiki/Paradigm_Badge' },
    { title: 'Old-Timer Badge', href: 'https://homecoming.wiki/wiki/Old-Timer_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
