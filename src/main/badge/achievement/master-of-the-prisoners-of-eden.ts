import { BadgeData } from 'coh-content-db'

export const MasterOfThePrisonersOfEden: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-the-prisoners-of-eden',
  setTitle: { id: 2489 },
  name: [
    { value: 'Master of the Prisoners of Eden' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have proven yourself Master of the Prisoners of Eden Trial.` },
  ],
  acquisition: `Complete the Master of the Prisoners of Eden challenge (zero defeats, temporary and incarnate powers disabled)`,
  links: [
    { title: 'Master of the Prisoners of Eden Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Prisoners_of_Eden_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-prisoners-of-eden.png' },
  ],
}
