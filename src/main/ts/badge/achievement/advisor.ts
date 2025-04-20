import { BadgeData } from 'coh-content-db'

export const Advisor: BadgeData = {
  type: 'achievement',
  key: 'advisor',
  setTitleId: [12, 1705],
  name: [
    { alignment: 'hero', value: 'Advisor' },
    { alignment: 'villain', value: 'Comrade' },
    { alignment: 'praetorian', value: 'Encourager' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have earned this badge for your time spent tutoring others.' },
    { alignment: 'villain', value: `You've spent time helping others on the path of super-villainy.` },
    { alignment: 'praetorian', value: `There's always new blood flowing through Praetoria. You've spent some time trying to keep all of it from being spilled.` },
  ],
  acquisition: 'Sidekick another hero for 4 hours.',
  links: [
    { title: 'Advisor Badge', href: 'https://homecoming.wiki/wiki/Advisor_Badge' },
    { title: 'Comrade Badge', href: 'https://homecoming.wiki/wiki/Comrade_Badge' },
    { title: 'Encourager Badge', href: 'https://homecoming.wiki/wiki/Encourager_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
