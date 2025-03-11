import { BadgeData } from 'coh-content-db'

export const MasterOfTheImperiousTaskForce: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-the-imperious-task-force',
  setTitle: { id: 1375 },
  name: [
    { value: 'Master of the Imperious Task Force' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have proven yourself Master of the Imperious Task Force' },
  ],
  acquisition: `Complete the Master of the Imperious Task Force challenge (zero defeats, temporary and incarnate powers disabled)`,
  links: [
    { title: 'Master of the Imperious Task Force Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Imperious_Task_Force_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-imperious-task-force.png' },
  ],
}
