import { BadgeData, zoneLink } from 'coh-content-db'
import { Twinshot } from '../../contact/twinshot'
import { Ouroboros } from '../../zone/ouroboros'

export const Supernova: BadgeData = {
  type: 'accomplishment',
  key: 'supernova',
  setTitleId: [2016],
  name: 'Supernova',
  morality: 'heroic',
  badgeText: 'The Shining Stars have stopped a Praetorian plot to destroy Paragon, but at great cost.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "The Shining Stars: With Friends like These" entry with number 21.11 in the 15-19 level range.`,
  links: [
    { title: 'Supernova Badge', href: 'https://homecoming.wiki/wiki/Supernova_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/supernova.png',
  requirements: [
    { key: 'tss3', type: 'ARC', missionName: 'The Shining Stars - With Friends Like These', contactKey: Twinshot.key },
  ],
}
