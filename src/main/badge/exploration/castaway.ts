import { BadgeData, zoneLink } from 'coh-content-db'
import { CascadeArchipelago } from '../../zone/cascade-archipelago'

export const Castaway: BadgeData = {
  type: 'EXPLORATION',
  key: 'castaway',
  setTitle: { id: 1805 },
  name: [{ value: 'Castaway' }],
  alignment: ['H'],
  zoneKey: CascadeArchipelago.key,
  loc: [2523, 1676, 2985],
  badgeText: [{
    value: 'You stand on the brink, a psychological one, overwhelmed by a sense of dislocation and loss that is nearly impossible to shake.'
      + ' The scientists manning Firebase Zulu have codenamed this region "The Marooned Shores," and you can see why this name is appropriate.'
      + ' You feel as though you have washed ashore in a hostile land, cast off from everything you know. You fear, for an instant, that you will never again find the way home.'
      + ' You fight down this irrational fear and move on, lest it consume you.',
  }],
  notes: `Located in ${zoneLink(CascadeArchipelago)} 588 yards south of The Marooned Shores marker, at the base of the hills on the island's southern edge.`,
  links: [
    { title: 'Castaway Badge', href: 'https://homecoming.wiki/wiki/Castaway_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
