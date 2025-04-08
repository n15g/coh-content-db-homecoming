import { BadgeData } from 'coh-content-db'

export const Guide: BadgeData = {
  type: 'achievement',
  key: 'guide',
  setTitleId: [13, 1706],
  name: [
    { alignment: 'hero', value: 'Guide' },
    { alignment: 'villain', value: 'Drill Instructor' },
    { alignment: 'praetorian', value: 'Motivator' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Your continued mentoring has earned you this badge.' },
    { alignment: 'villain', value: `You've spent time teaching the young toughs how to do it 'Old School.'` },
    { alignment: 'praetorian', value: `If those you mentor slack off, you've got quite a few ways to motivate them. They're not all pleasant.` },
  ],
  acquisition: 'Sidekick another hero for 8 hours.',
  links: [
    { title: 'Guide Badge', href: 'https://homecoming.wiki/wiki/Guide_Badge' },
    { title: 'Drill Instructor Badge', href: 'https://homecoming.wiki/wiki/Drill_Instructor_Badge' },
    { title: 'Motivator Badge', href: 'https://homecoming.wiki/wiki/Motivator_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
