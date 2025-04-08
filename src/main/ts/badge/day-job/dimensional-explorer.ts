import { BadgeData } from 'coh-content-db'

export const DimensionalExplorer: BadgeData = {
  type: 'day-job',
  key: 'dimensional-explorer',
  setTitleId: [1032],
  name: [
    { alignment: 'hero', value: 'Dimensional Explorer' },
    { alignment: 'villain', value: 'Dimensional Plunderer' },
  ],
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `You have spent a great deal of time working with the military at Firebase Zulu earning the Dimensional Explorer Day Job.
Logging out in the Shadow Shard will earn you a Jetpack power, when you log back in, for a short time.`,
    },
    { alignment: 'villain', value: `Firebase Zulu has classified you as A.W.O.L., but they wouldn't welcome you if you showed up, either.` },
  ],
  acquisition: 'Log out inside the Shadow Shard for 100 hours.',
  links: [
    { title: 'Dimensional Explorer Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Explorer_Badge' },
    { title: 'Dimensional Plunderer Badge', href: 'https://homecoming.wiki/wiki/Dimensional_Plunderer_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/dimensional-explorer.png',
}
