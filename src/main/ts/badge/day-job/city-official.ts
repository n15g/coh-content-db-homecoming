import { BadgeData } from 'coh-content-db'

export const CityOfficial: BadgeData = {
  type: 'day-job',
  key: 'city-official',
  setTitleId: [1028],
  name: [
    { alignment: 'hero', value: 'City Official' },
    { alignment: 'villain', value: 'Ousted Official' },
  ],
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `You have worked closely with the Paragon City government during your free time earning the City Official Day Job.
Logging out in the City Hall will earn you an Influence Bonus, when you log back in, each time you complete a mission for a short time.`,
    },
    {
      alignment: 'villain', value: 'You were unceremoniously ejected from your position in Paragon City government when you became a villain.',
    },
  ],
  acquisition: 'Log out inside City Hall or the Freedom Corps headquarters for 100 hours.',
  links: [
    { title: 'City Official Badge', href: 'https://homecoming.wiki/wiki/City_Official_Badge' },
    { title: 'Ousted Official Badge', href: 'https://homecoming.wiki/wiki/Ousted_Official_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/city-official.png',
}
