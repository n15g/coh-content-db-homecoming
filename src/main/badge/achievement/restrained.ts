import { BadgeData } from 'coh-content-db'

export const Restrained: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'restrained',
  setTitle: { id: 18, praetorianId: 1693 },
  name: [
    { alignment: 'H', value: 'Restrained' },
    { alignment: 'V', value: 'Slacker' },
    { alignment: 'P', value: 'Waiting' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'You have been under the influence of restraining powers such as sleeps and holds for an '
        + 'inordinate amount of time.',
    },
    { alignment: 'V', value: 'You\'ve been Slept, Immobilized, or Held for over ten minutes. Quit sleeping on the job!' },
    { alignment: 'P', value: 'Wait long enough and those stuns will wear off. Any minute now...' },
  ],
  acquisition: 'Be held for 10 minutes',
  links: [
    { title: 'Restrained Badge', href: 'https://homecoming.wiki/wiki/Restrained_Badge' },
    { title: 'Slacker Badge', href: 'https://homecoming.wiki/wiki/Slacker_Badge' },
    { title: 'Waiting Badge', href: 'https://homecoming.wiki/wiki/Waiting_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
