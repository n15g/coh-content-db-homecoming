import { BadgeData } from 'coh-content-db'
import { RetrieveTheStolenWeaponsFromTheFreakshow } from '../../mission/retrieve-the-stolen-weapons-from-the-freakshow'

export const Pwnz: BadgeData = {
  type: 'accomplishment',
  key: 'pwnz',
  setTitleId: [75],
  name: 'Pwnz',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You have arrested one of the higher ranking members of the Freakshow.',
  links: [
    { title: 'Pwnz Badge', href: 'https://homecoming.wiki/wiki/Pwnz_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pwnz.png',
  requirements: [
    { key: RetrieveTheStolenWeaponsFromTheFreakshow.key, type: 'mission', missionKey: RetrieveTheStolenWeaponsFromTheFreakshow.key },
  ],
}
