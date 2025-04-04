import { BadgeData, zoneLink } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const KnightErrant: BadgeData = {
  type: 'defeat',
  key: 'knight-errant',
  setTitleId: [200],
  name: [
    { alignment: 'hero', value: 'Knight Errant' },
    { alignment: 'villain', value: 'Black Knight' },
  ],
  morality: 'heroic',
  badgeText: 'You have helped defeat the Clockwork Paladin, a diabolical invention of the Clockwork King.',
  acquisition: `Prevent the construction of Paladin by defeating the Monster Construction during the Paladin Construction zone event in ${zoneLink(KingsRow)}.`,
  links: [
    { title: 'Knight Errant Badge', href: 'https://homecoming.wiki/wiki/Knight_Errant_Badge' },
    { title: 'Black Knight Badge', href: 'https://homecoming.wiki/wiki/Black_Knight_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/knight-errant.png',
}
