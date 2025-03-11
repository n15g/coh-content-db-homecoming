import { BadgeData } from 'coh-content-db'

export const Advisor: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'advisor',
  setTitle: { id: 12, praetorianId: 1705 },
  name: [
    { alignment: 'H', value: 'Advisor' },
    { alignment: 'V', value: 'Comrade' },
    { alignment: 'P', value: 'Encourager' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have earned this badge for your time spent tutoring others.' },
    { alignment: 'V', value: 'You\'ve spent time helping others on the path of super-villainy.' },
    {
      alignment: 'P', value: 'There\'s always new blood flowing through Praetoria. You\'ve spent some time trying to keep all '
        + 'of it from being spilled.',
    },
  ],
  acquisition: 'Sidekick another hero for 4 hours',
  links: [
    { title: 'Advisor Badge', href: 'https://homecoming.wiki/wiki/Advisor_Badge' },
    { title: 'Comrade Badge', href: 'https://homecoming.wiki/wiki/Comrade_Badge' },
    { title: 'Encourager Badge', href: 'https://homecoming.wiki/wiki/Encourager_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
