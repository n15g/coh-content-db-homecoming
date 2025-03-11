import { BadgeData } from 'coh-content-db'

export const Guide: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'guide',
  setTitle: { id: 13, praetorianId: 1706 },
  name: [
    { alignment: 'H', value: 'Guide' },
    { alignment: 'V', value: 'Drill Instructor' },
    { alignment: 'P', value: 'Motivator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Your continued mentoring has earned you this badge.' },
    { alignment: 'V', value: 'You\'ve spent time teaching the young toughs how to do it \'Old School.\'' },
    {
      alignment: 'P', value: 'If those you mentor slack off, you\'ve got quite a few ways to motivate them. They\'re not all '
        + 'pleasant.',
    },
  ],
  acquisition: 'Sidekick another hero for 8 hours',
  links: [
    { title: 'Guide Badge', href: 'https://homecoming.wiki/wiki/Guide_Badge' },
    { title: 'Drill Instructor Badge', href: 'https://homecoming.wiki/wiki/Drill_Instructor_Badge' },
    { title: 'Motivator Badge', href: 'https://homecoming.wiki/wiki/Motivator_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
