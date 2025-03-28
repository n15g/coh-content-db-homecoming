import { BadgeData, zoneLink } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const OfThingsUnclean: BadgeData = {
  type: 'EXPLORATION',
  key: 'of-things-unclean',
  setTitle: { id: 2186 },
  name: [{ value: 'Of Things Unclean' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: DarkAstoria.key,
  loc: [936, -1, 4321],
  badgeText: [{
    value: `The dead have always cavorted through the streets of Dark Astoria, praying and making sacrifice to their mute master, and for good reason.
Even after its fall, Mot's shadow has terrorized the dreams of mankind through all of history, for it is the embodiment of all that is unnatural and vile; death most unclean.`,
  }],
  notes: `Located in ${zoneLink(DarkAstoria)}, in the Dido's View neighborhood, 324 yards SE of the Dido's View marker.`,
  links: [
    { title: 'Of Things Unclean Badge', href: 'https://homecoming.wiki/wiki/Of_Things_Unclean_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
