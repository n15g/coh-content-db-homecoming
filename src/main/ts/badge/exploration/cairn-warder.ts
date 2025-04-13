import { BadgeData } from 'coh-content-db'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'

export const CairnWarder: BadgeData = {
  type: 'exploration',
  key: 'cairn-warder',
  setTitleId: [130],
  name: 'Cairn Warder',
  morality: 'paragon-city-access',
  badgeText: `Mortals erect petty monuments and cairns in the foolish pursuit of stemming the forces of Death. Mot has since sundered such vanities.`,
  notes: `Located in the far northeast corner of the zone under the northern side of a stone archway.`,
  links: [
    { title: 'Cairn Warder Badge', href: 'https://homecoming.wiki/wiki/Cairn_Warder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoDarkAstoria.key, coords: [1026, 51, 218], icon: 'badge', iconText: '3' } },
  ],
}
