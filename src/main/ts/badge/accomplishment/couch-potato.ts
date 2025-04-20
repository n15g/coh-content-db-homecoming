import { BadgeData } from 'coh-content-db'
import { SureFreakishlyStylizedCartoonChildNeverGiveUp } from '../../mission/sure-freakishly-stylized-cartoon-child-never-give-up'

export const CouchPotato: BadgeData = {
  type: 'accomplishment',
  key: 'couch-potato',
  setTitleId: [347],
  name: 'Couch Potato',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'You destroyed a shipment of books on the word of the Television, and then blamed it all on video games.',
  links: [
    { title: 'Couch Potato Badge', href: 'https://homecoming.wiki/wiki/Couch_Potato_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-9.png',
  requirements: [
    { key: SureFreakishlyStylizedCartoonChildNeverGiveUp.key, type: 'mission', missionKey: SureFreakishlyStylizedCartoonChildNeverGiveUp.key },
  ],
}
