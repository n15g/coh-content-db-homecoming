import { MissionData } from 'coh-content-db'
import { CaptainMako } from '../contact/captain-mako'

export const IronFist: MissionData = {
  key: 'iron-fist',
  name: 'Iron Fist',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: CaptainMako.key,
  levelRange: [45],
  links: [
    { title: 'Iron Fist', href: 'https://homecoming.wiki/wiki/Captain_Mako#Iron_Fist' },
  ],
  flashback: {
    id: '7.44',
    levelRange: [50],
  },
}
