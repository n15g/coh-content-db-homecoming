import { BadgeData } from 'coh-content-db'

export const Restrained: BadgeData = {
  type: 'achievement',
  key: 'restrained',
  setTitleId: [18, 1693],
  name: [
    { alignment: 'hero', value: 'Restrained' },
    { alignment: 'villain', value: 'Slacker' },
    { alignment: 'praetorian', value: 'Waiting' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have been under the influence of restraining powers such as sleeps and holds for an inordinate amount of time.' },
    { alignment: 'villain', value: `You've been Slept, Immobilized, or Held for over ten minutes. Quit sleeping on the job!` },
    { alignment: 'praetorian', value: 'Wait long enough and those stuns will wear off. Any minute now...' },
  ],
  acquisition: 'Be held for 10 minutes.',
  links: [
    { title: 'Restrained Badge', href: 'https://homecoming.wiki/wiki/Restrained_Badge' },
    { title: 'Slacker Badge', href: 'https://homecoming.wiki/wiki/Slacker_Badge' },
    { title: 'Waiting Badge', href: 'https://homecoming.wiki/wiki/Waiting_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
