import { MissionData } from 'coh-content-db'
import { JuliusTheTroll } from '../contact/julius-the-troll'

export const JuliusTheKindHeartedTroll: MissionData = {
  key: 'julius-the-kind-hearted-troll',
  name: 'Julius the Kind Hearted Troll',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: JuliusTheTroll.key,
  levelRange: [10, 14],
  links: [
    { title: 'Julius the Kind Hearted Troll', href: 'https://homecoming.wiki/wiki/Julius_the_Troll#Julius_the_Kind_Hearted_Troll_(10-14)' },
  ],
  flashback: {
    id: '2.03',
    levelRange: [10, 14],
  },
}
