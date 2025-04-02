import { BadgeData, contactLink } from 'coh-content-db'
import { MuVorkan } from '../../contact/muvorkan'

export const BoundForGlory: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'bound-for-glory',
  setTitle: { id: 2195 },
  name: 'Bound for Glory',
  alignment: ['H', 'V', 'P'],
  badgeText: `You played through ${contactLink(MuVorkan)}'s personal story, witnessing the event where his quest to become a patron of Arachnos began.`,
  links: [
    { title: 'Bound for Glory Badge', href: 'https://homecoming.wiki/wiki/Bound_for_Glory_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: 'one-of-the-faceless-many', type: 'MISSION', missionName: 'One of the Faceless Many', contactKey: MuVorkan.key },
  ],
}
