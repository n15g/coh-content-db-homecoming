import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-warf'

export const ProtestTooMuch: BadgeData = {
  type: 'exploration',
  key: 'protest-too-much',
  setTitleId: [2451],
  name: 'Protest Too Much',
  releaseDate: '2025-06-??',
  morality: 'all',
  badgeText: `At this location in June of 2018, a man by the name of Kieran Holt, who was later determined to be wrongfully detained, was assaulted by members of the PPD for resisting arrest while protesting their corruption. Holt died, hours later, in his holding cell from his injuries. The resulting media coverage led to the swift loss of public trust in the local PPD and their removal, in favor of Blackwing Industries after heated debates.`,
  notes: ` ??? `,
  links: [
    { title: 'Protest Too Much Badge', href: 'https://homecoming.wiki/wiki/Protest_Too_Much_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [5875.5, 47.9, 4979.9], icon: 'badge', iconText: 'x' } },
  ],
}
