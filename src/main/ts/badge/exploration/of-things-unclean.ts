import { BadgeData } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const OfThingsUnclean: BadgeData = {
  type: 'exploration',
  key: 'of-things-unclean',
  setTitleId: [2186],
  name: 'Of Things Unclean',
  morality: 'all',
  badgeText: `The dead have always cavorted through the streets of Dark Astoria, praying and making sacrifice to their mute master, and for good reason.
Even after its fall, Mot's shadow has terrorized the dreams of mankind through all of history, for it is the embodiment of all that is unnatural and vile; death most unclean.`,
  notes: `Located in the Dido's View neighborhood, 324 yards SE of the Dido's View marker.`,
  links: [
    { title: 'Of Things Unclean Badge', href: 'https://homecoming.wiki/wiki/Of_Things_Unclean_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: DarkAstoria.key, coords: [936, -1, 4321], icon: 'badge', iconText: '8' } },
  ],
}
