import { BadgeData } from 'coh-content-db'
import { Television } from '../../contact/television'

export const CouchPotato: BadgeData = {
  type: 'accomplishment',
  key: 'couch-potato',
  setTitleId: [347],
  name: 'Couch Potato',
  morality: 'villainous',
  badgeText: 'You destroyed a shipment of books on the word of the Television, and then blamed it all on video games.',
  links: [
    { title: 'Couch Potato Badge', href: 'https://homecoming.wiki/wiki/Couch_Potato_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-9.png',
  requirements: [
    { key: 'sure-freakishly-stylized-cartoon-child-never-give-up', type: 'MISSION', missionName: 'Sure, freakishly stylized cartoon child! Never give up!', contactKey: Television.key },
  ],
}
