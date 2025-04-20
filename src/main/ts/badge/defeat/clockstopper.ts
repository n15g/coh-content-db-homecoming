import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'
import { Synapse } from '../../contact/synapse'

export const Clockstopper: BadgeData = {
  type: 'defeat',
  key: 'clockstopper',
  setTitleId: [32],
  name: 'Clockstopper',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You have defeated Babbage, one of the greatest works of the Clockwork King.',
  acquisition: `Defeat Babbage, a monster that spawns in ${zoneLink(Boomtown)} or in an ambush in the ${contactLink(Synapse)} Task Force.`,
  links: [
    { title: 'Clockstopper Badge', href: 'https://homecoming.wiki/wiki/Clockstopper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/clockwork.png',
}
