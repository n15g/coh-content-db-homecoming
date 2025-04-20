import { BadgeData } from 'coh-content-db'

export const Commuter: BadgeData = {
  type: 'day-job',
  key: 'commuter',
  setTitleId: [1030],
  name: [
    { alignment: 'hero', value: 'Commuter' },
    { alignment: 'villain', value: 'Fare Jumper' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `You have traveled all over Paragon City for various day jobs during your free time earning the Commuter Day Job.
Logging out in a Train Station will earn you a speed boost, when you log back in, for a short time.`,
    },
    {
      alignment: 'villain', value: 'You miss the monorails of Paragon City, but in the Rogue Isles it would just be too impractical.',
    },
  ],
  acquisition: 'Log out inside Train Stations for 100 hours.',
  links: [
    { title: 'Commuter Badge', href: 'https://homecoming.wiki/wiki/Commuter_Badge' },
    { title: 'Fare Jumper Badge', href: 'https://homecoming.wiki/wiki/Fare_Jumper_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/commuter.png',
}
