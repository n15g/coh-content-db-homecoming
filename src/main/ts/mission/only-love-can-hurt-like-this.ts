import { MissionData } from 'coh-content-db'
import { AshlingCorlett } from '../contact/ashling-corlett'

export const OnlyLoveCanHurtLikeThis: MissionData = {
  key: 'only-love-can-hurt-like-this',
  name: 'Only Love Can Hurt Like This',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: AshlingCorlett.key,
  levelRange: [41, 49],
  links: [
    { title: 'Only Love Can Hurt Like This', href: 'https://homecoming.wiki/wiki/Ashling_Corlett#Only_Love_Can_Hurt_Like_This' },
  ],
  flashback: {
    id: '28.01',
    levelRange: [40, 49],
  },
}
