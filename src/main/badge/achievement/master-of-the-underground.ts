import { BadgeData } from 'coh-content-db'

export const MasterOfTheUnderground: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-the-underground',
  setTitle: { id: 2000 },
  name: [
    { value: 'Master of the Underground' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: Underground.' },
  ],
  acquisition: 'Earn the Regenerate This, Tour Guide, Preservation Specialist, and Avatar Assassin badges',
  links: [
    { title: 'Master of the Underground Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Underground_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-underground.png' },
  ],
}
