import { BadgeData } from 'coh-content-db'
import { RetrieveTheLoaBone } from '../../mission/retrieve-the-loa-bone'

export const BoneCollector: BadgeData = {
  type: 'accomplishment',
  key: 'bone-collector',
  setTitleId: [331],
  name: 'Bone Collector',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You recovered Mr. Bocor's necromantic Loa Bone.`,
  links: [
    { title: 'Bone Collector Badge', href: 'https://homecoming.wiki/wiki/Bone_Collector_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-1.png',
  requirements: [
    { key: RetrieveTheLoaBone.key, type: 'mission', missionKey: RetrieveTheLoaBone.key },
  ],
}
