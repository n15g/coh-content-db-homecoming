import { BadgeData, contactLink } from 'coh-content-db'
import { MuVorkan } from '../../contact/muvorkan'
import { OneOfTheFacelessMany } from '../../mission/one-of-the-faceless-many'

export const BoundForGlory: BadgeData = {
  type: 'accomplishment',
  key: 'bound-for-glory',
  setTitleId: [2195],
  name: 'Bound for Glory',
  morality: 'all',
  badgeText: `You played through ${contactLink(MuVorkan)}'s personal story, witnessing the event where his quest to become a patron of Arachnos began.`,
  links: [
    { title: 'Bound for Glory Badge', href: 'https://homecoming.wiki/wiki/Bound_for_Glory_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png',
  requirements: [
    { key: OneOfTheFacelessMany.key, type: 'mission', missionKey: OneOfTheFacelessMany.key },
  ],
}
