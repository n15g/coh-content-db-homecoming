import { BadgeData } from 'coh-content-db'
import { ForMyPeople } from '../../mission/for-my-people'

export const CimeroranHero: BadgeData = {
  type: 'accomplishment',
  key: 'cimeroran-hero',
  setTitleId: [2198],
  name: [
    { sex: 'M', value: 'Cimeroran Hero' },
    { sex: 'F', value: 'Cimeroran Heroine' },
  ],
  morality: 'all',
  badgeText: `You played through Marcus Valerius's personal story, witnessing the event where Marcus Valerius brought Mot to the land of Astoria and joined together with Mot, becoming his Sentinel.`,
  links: [
    { title: 'Cimeroran Hero Badge', href: 'https://homecoming.wiki/wiki/Cimeroran_Hero_Badge' },
    { title: 'Cimeroran Heroine Badge', href: 'https://homecoming.wiki/wiki/Cimeroran_Heroine_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: ForMyPeople.key, type: 'mission', missionKey: ForMyPeople.key },
  ],
}
