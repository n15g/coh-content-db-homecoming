import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { Twinshot } from '../../contact/twinshot'

export const ShiningStar: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'shining-star',
  setTitle: { id: 2014 },
  name: 'Shining Star',
  alignment: ['H'],
  badgeText: 'You and your friends have proven your worth to Manticore, and gained a high-profile benefactor.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "A New Day Dawning" entry with number 21.09 in the 1-9 level range.`,
  links: [
    { title: 'Shining Star Badge', href: 'https://homecoming.wiki/wiki/Shining_Star_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/shining-star.png',
  requirements: [
    { key: 'tts1', type: 'ARC', missionName: 'The Shining Stars - A New Day Dawning', contactKey: Twinshot.key },
  ],
}
