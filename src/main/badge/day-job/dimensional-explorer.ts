import { BadgeData } from 'coh-content-db'

export const DimensionalExplorer: BadgeData = {
  type: 'DAY_JOB',
  key: 'dimensional-explorer',
  setTitle: { id: 1032 },
  name: [
    { alignment: 'H', value: 'Dimensional Explorer' },
    { alignment: 'V', value: 'Dimensional Plunderer' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H',
      value: 'You have spent a great deal of time working with the military at Firebase Zulu earning the Dimensional Explorer Day Job.'
        + ' Logging out in the Shadow Shard will earn you a Jetpack power, when you log back in, for a short time.',
    },
    {
      alignment: 'V',
      value: 'Firebase Zulu has classified you as A.W.O.L., but they wouldn\'t welcome you if you showed up, either.',
    },
  ],
  acquisition: 'Log out inside the Shadow Shard for 100 hours.',
  effect: 'Day Job: Jetpack',
  links: [
    { title: 'Dimensional Explorer Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Explorer_Badge' },
    { title: 'Dimensional Plunderer Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Plunderer_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/dimensional-explorer.png' }],
}
