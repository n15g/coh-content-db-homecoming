import { BadgeData } from 'coh-content-db'

export const BoneCollector: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'bone-collector',
  setTitle: { id: 331 },
  name: [
    { value: 'Bone Collector' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'You recovered Mr. Bocor\'s necromantic Loa Bone.' },
  ],
  acquisition: 'Complete the Retrieve Loa Bonemission from Mr. Bocor',
  links: [
    { title: 'Bone Collector Badge', href: 'https://homecoming.wiki/wiki/Bone_Collector_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-1.png' },
  ],
}
