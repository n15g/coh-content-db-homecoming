import { BadgeData } from 'coh-content-db'
import { SisterSolaris } from '../../contact/sister-solaris'

export const CimeroranHero: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'cimeroran-hero',
  setTitle: { id: 2198 },
  name: [
    { sex: 'M', value: 'Cimeroran Hero' },
    { sex: 'F', value: 'Cimeroran Heroine' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: `You played through Marcus Valerius's personal story, witnessing the event where Marcus Valerius brought Mot to the land of Astoria and joined together with Mot, becoming his Sentinel.`,
  acquisition: 'Complete the personal story mission from Sister Solaris',
  links: [
    { title: 'Cimeroran Hero Badge', href: 'https://homecoming.wiki/wiki/Cimeroran_Hero_Badge' },
    { title: 'Cimeroran Heroine Badge', href: 'https://homecoming.wiki/wiki/Cimeroran_Heroine_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: 'for-my-people', type: 'MISSION', missionName: 'For My People', contactKey: SisterSolaris.key },
  ],
}
