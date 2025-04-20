import { BadgeData } from 'coh-content-db'

export const Banker: BadgeData = {
  type: 'day-job',
  key: 'banker',
  setTitleId: [1037],
  name: [
    { alignment: 'hero', value: 'Banker' },
    { alignment: 'villain', value: 'Thief' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `Your time spent working with the financial institutions of Paragon City during your free time has earned you the Banker Day Job.
Logging out in a Vault will earn you an Influence Bonus, when you log back, in each time you complete a mission for a short time.`,
    }, {
      alignment: 'villain', value: `Your time spent staging heists on the various financial institutions of the Rogue Isles has earned you the Thief Day Job.
Logging out in a Vault will earn you an Infamy Bonus, when you log back in, each time you complete a mission for a short time.`,
    },
  ],
  acquisition: 'Log out at a Vault Reserve for 100 hours.',
  links: [
    { title: 'Banker Badge', href: 'https://homecoming.wiki/wiki/Banker_Badge' },
    { title: 'Thief Badge', href: 'https://homecoming.wiki/wiki/Thief_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/banker.png',
}
