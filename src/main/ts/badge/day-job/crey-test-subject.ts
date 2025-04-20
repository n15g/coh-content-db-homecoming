import { BadgeData } from 'coh-content-db'

export const CreyTestSubject: BadgeData = {
  type: 'day-job',
  key: 'crey-test-subject',
  setTitleId: [1050],
  name: [
    { alignment: 'hero', value: 'Crey Test Subject' },
    { alignment: 'villain', value: 'Crey Employee' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: 'Your utility to Crey Industries is now limited to your tolerance for experimental treatments.' },
    {
      alignment: 'villain', value: `Your work with Crey Industries has earned you the Crey Employee Day Job.
Logging out in the Crey Industries building will grant you a random Large Inspiration, after you log back in, each time you complete a mission for a short time.`,
    },
  ],
  acquisition: 'Log out in the Crey building in Nerva Archipelago for 100 hours.',
  links: [
    { title: 'Crey Test Subject Badge', href: 'https://homecoming.wiki/wiki/Crey_Test_Subject_Badge' },
    { title: 'Crey Employee Badge', href: 'https://homecoming.wiki/wiki/Crey_Employee_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/crey-test-subject.png',
}
