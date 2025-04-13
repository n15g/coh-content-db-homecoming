import { BadgeData } from 'coh-content-db'

export const LawEnforcer: BadgeData = {
  type: 'day-job',
  key: 'law-enforcer',
  setTitleId: [1029],
  name: [
    { alignment: 'hero', value: 'Law Enforcer' },
    { alignment: 'villain', value: 'Dirty Cop' },
  ],
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `You have worked closely with the Paragon Police Department during your free time earning the Law Enforcer Day Job.
Logging out in a Police Station will earn you an Experience Bonus, when you log back in, each time you complete a mission for a short time.`,
    },
    { alignment: 'villain', value: `The Paragon Police Department has severed its ties with you now that you're a villain.` },
  ],
  acquisition: 'Log out inside Police Stations for 100 hours.',
  links: [
    { title: 'Law Enforcer Badge', href: 'https://homecoming.wiki/wiki/Law_Enforcer_Badge' },
    { title: 'Dirty Cop Badge', href: 'https://homecoming.wiki/wiki/Dirty_Cop_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/law-enforcer.png',
}
