import { MissionData } from 'coh-content-db'
import { BlackScorpion } from '../contact/black-scorpion'

export const ArmorWars: MissionData = {
  key: 'armor-wars',
  name: 'Armor Wars',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: BlackScorpion.key,
  levelRange: [35],
  links: [
    { title: 'Armor Wars', href: 'https://homecoming.wiki/wiki/Black_Scorpion#Armor_Wars' },
  ],
  flashback: {
    id: '7.38',
    levelRange: [50],
  },
}
