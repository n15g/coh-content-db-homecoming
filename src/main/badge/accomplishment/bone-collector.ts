import { BadgeData } from 'coh-content-db'
import { MrBocor } from '../../contact/mr-bocor'

export const BoneCollector: BadgeData = {
  type: 'accomplishment',
  key: 'bone-collector',
  setTitleId: [331],
  name: 'Bone Collector',
  morality: 'villainous',
  badgeText: `You recovered Mr. Bocor's necromantic Loa Bone.`,
  links: [
    { title: 'Bone Collector Badge', href: 'https://homecoming.wiki/wiki/Bone_Collector_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-1.png',
  requirements: [
    { key: 'retrieve-the-loa-bone', type: 'MISSION', missionName: 'Retrieve the Loa Bone', contactKey: MrBocor.key },
  ],
}
