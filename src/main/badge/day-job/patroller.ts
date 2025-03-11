import { BadgeData } from 'coh-content-db'

export const Patroller: BadgeData = {
  type: 'DAY_JOB',
  key: 'patroller',
  setTitle: { id: 1036, praetorianId: 1757 },
  name: [
    { alignment: 'H', value: 'Patroller' },
    { alignment: 'V', value: 'Criminal' },
    { alignment: 'P', value: 'Patroller' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    alignment: 'H',
    value: 'You have spent your free time making the streets of Paragon City a safer place for its citizens earning the Patroller Day Job.',
  }, {
    alignment: 'V',
    value: 'You spent your free time causing havoc in the Rogue Isles and bring terror to its citizens earning the Criminal Day Job.',
  }, {
    alignment: 'P',
    value: 'You have spent your free time on the streets, Praetorian or otherwise, earning the Patroller Day Job.',
  }],
  acquisition: 'Log out anywhere for 100 hours.',
  effect: 'Day Job: Patrol XP',
  links: [
    { title: 'Patroller Badge', href: 'https://homecoming.wiki/wiki/Patroller_Badge' },
    { title: 'Criminal Badge', href: 'https://homecoming.wiki/wiki/Criminal_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/patroller.png' }],
}
