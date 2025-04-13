import { MissionData } from 'coh-content-db'
import { AngeloVendetti } from '../contact/angelo-vendetti'

export const HurtTheTraitorousVendettiRetainer: MissionData = {
  key: 'hurt-the-traitorous-vendetti-retainer',
  name: 'Hurt the traitorous Vendetti retainer',
  type: 'mission',
  morality: 'villainous',
  contactKeys: AngeloVendetti.key,
  levelRange: [5, 10],
  links: [
    { title: 'Hurt the traitorous Vendetti retainer', href: 'https://homecoming.wiki/wiki/Angelo_Vendetti#Hurt_the_traitorous_Vendetti_retainer' },
  ],
  flashback: {
    id: '6.11',
    name: 'Hurt the Traitorous Vendetti',
    levelRange: [10, 14],
  },
}
