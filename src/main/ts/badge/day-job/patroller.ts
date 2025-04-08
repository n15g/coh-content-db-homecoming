import { BadgeData } from 'coh-content-db'

export const Patroller: BadgeData = {
  type: 'day-job',
  key: 'patroller',
  setTitleId: [1036, 1757],
  name: [
    { alignment: 'hero', value: 'Patroller' },
    { alignment: 'villain', value: 'Criminal' },
    { alignment: 'praetorian', value: 'Patroller' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have spent your free time making the streets of Paragon City a safer place for its citizens earning the Patroller Day Job.' },
    { alignment: 'villain', value: 'You spent your free time causing havoc in the Rogue Isles and bring terror to its citizens earning the Criminal Day Job.' },
    { alignment: 'praetorian', value: 'You have spent your free time on the streets, Praetorian or otherwise, earning the Patroller Day Job.' },
  ],
  acquisition: 'Log out anywhere for 100 hours.',
  links: [
    { title: 'Patroller Badge', href: 'https://homecoming.wiki/wiki/Patroller_Badge' },
    { title: 'Criminal Badge', href: 'https://homecoming.wiki/wiki/Criminal_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/patroller.png',
}
