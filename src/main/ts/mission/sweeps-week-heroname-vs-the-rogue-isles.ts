import { MissionData } from 'coh-content-db'
import { MrGPrimal } from '../contact/mr-g-primal'

export const SweepsWeekHeroNameVsTheRogueIsles: MissionData = {
  key: 'sweeps-week-heroname-vs-the-rogue-isles',
  name: 'Sweeps Week: HeroName vs. The Rogue Isles',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: MrGPrimal.key,
  levelRange: [30],
  links: [
    { title: 'Sweeps Week: HeroName vs. The Rogue Isles', href: 'https://homecoming.wiki/wiki/Mr._G_(Primal_Earth)#Sweeps_Week:_Character_vs._The_Rogue_Isles' },
  ],
  flashback: {
    id: '24.12',
    levelRange: [50],
  },
}
