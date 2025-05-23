import { BadgeData } from 'coh-content-db'
import { Savant } from '../history/savant'

export const RiktiDrone: BadgeData = {
  type: 'gladiator',
  key: 'rikti-drone',
  setTitleId: [496],
  name: 'Rikti Drone',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'This unit has been programmed to serve as your gladiator in the Arena.',
  links: [
    { title: 'Rikti Drone Badge', href: 'https://homecoming.wiki/wiki/Rikti_Drone_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Savant.key, type: 'badge', badgeKey: Savant.key },
  ],
}
