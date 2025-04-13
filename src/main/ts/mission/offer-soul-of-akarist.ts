import { MissionData } from 'coh-content-db'
import { ArchmageTarixus } from '../contact/archmage-tarixus'

export const OfferSoulOfAkarist: MissionData = {
  key: 'offer-soul-of-akarist',
  name: 'Offer soul of Akarist',
  type: 'mission',
  morality: 'villainous',
  contactKeys: ArchmageTarixus.key,
  levelRange: [25, 29],
  links: [
    { title: 'Offer soul of Akarist', href: 'https://homecoming.wiki/wiki/Archmage_Tarixus#Offer_soul_of_Akarist' },
  ],
  flashback: {
    id: '6.40',
    levelRange: [25, 29],
  },
}
