import { BadgeData } from 'coh-content-db'

export const Caregiver: BadgeData = {
  type: 'day-job',
  key: 'caregiver',
  setTitleId: [1034],
  name: [
    { alignment: 'hero', value: 'Caregiver' },
    { alignment: 'villain', value: 'Pain Specialist' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `You have spent a great deal of time working in the hospitals of Paragon City during your free time earning the Caregiver Day Job.
Logging out in a Hospital will earn you a Regeneration Bonus, when you log back in, for a short time.`,
    },
    {
      alignment: 'villain',
      value: `Your expertise in surgery and understanding pain has earned you the Pain Specialist Day Job.
Logging out in a Hospital will earn you a Regeneration Bonus, when you log back in, for a short time.`,
    },
  ],
  acquisition: 'Log out inside Hospitals for 100 hours.',
  links: [
    { title: 'Caregiver Badge', href: 'https://homecoming.wiki/wiki/Caregiver_Badge' },
    { title: 'Pain Specialist Badge', href: 'https://homecoming.wiki/wiki/Pain_Specialist_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/caregiver.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/pain-specialist.png' },
  ],
}
