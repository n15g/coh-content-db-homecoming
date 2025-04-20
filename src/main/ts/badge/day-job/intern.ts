import { BadgeData } from 'coh-content-db'

export const Intern: BadgeData = {
  type: 'day-job',
  key: 'intern',
  setTitleId: [1033],
  name: [
    { alignment: 'hero', value: 'Intern' },
    { alignment: 'villain', value: 'Wage Slave' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `You have worked with Portal Corps during your free time earning the Intern Day Job.
Logging out in a Portal Corps building will earn you a Large Inspiration, when you log back in, each time you complete a mission for a short time.`,
    },
    { alignment: 'villain', value: `You wouldn't make it past the guards at Portal Corps nowadays, but at least you never have to make the coffee anymore.` },
  ],
  acquisition: 'Log out inside Portal Corps for 100 hours.',
  links: [
    { title: 'Intern Badge', href: 'https://homecoming.wiki/wiki/Intern_Badge' },
    { title: 'Wage Slave Badge', href: 'https://homecoming.wiki/wiki/Wage_Slave_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/intern.png',
}
