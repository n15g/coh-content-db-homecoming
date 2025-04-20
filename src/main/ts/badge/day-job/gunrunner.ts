import { BadgeData } from 'coh-content-db'

export const Gunrunner: BadgeData = {
  type: 'day-job',
  key: 'gunrunner',
  setTitleId: [1140],
  name: [
    { alignment: 'hero', value: 'Gunrunner' },
    { alignment: 'villain', value: 'Smuggler' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `You've scored the biggest coup of all: smuggling directly into Paragon City. Unfortunately, it's a long round trip.` },
    {
      alignment: 'villain', value: `You spend your free time smuggling in illicit black market goods earning you the Smuggler Day Job.
Logging out near a ferry will earn you a random enhancement, upon each mission completion, for a short time.`,
    },
  ],
  acquisition: 'Log out at a Ferry for 100 hours.',
  links: [
    { title: 'Gunrunner Badge', href: 'https://homecoming.wiki/wiki/Gunrunner_Badge' },
    { title: 'Smuggler Badge', href: 'https://homecoming.wiki/wiki/Smuggler_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/gunrunner.png',
}
