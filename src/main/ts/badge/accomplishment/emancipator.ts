import { BadgeData } from 'coh-content-db'
import { TinaMacintyre } from '../../contact/tina-macintyre'

export const Emancipator: BadgeData = {
  type: 'accomplishment',
  key: 'emancipator',
  setTitleId: [82],
  name: 'Emancipator',
  morality: 'heroic',
  badgeText: 'You have defeated the Clockwork King in an alternate dimension where he realized his true potential.',
  links: [
    { title: 'Emancipator Badge', href: 'https://homecoming.wiki/wiki/Emancipator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/emancipator.png',
  requirements: [
    { key: 'the-clockwork-kings-psychic-signal', type: 'MISSION', missionName: `The Clockwork King's Psychic Signal`, contactKey: TinaMacintyre.key },
  ],
}
