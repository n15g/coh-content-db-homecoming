import { BadgeData } from 'coh-content-db'
import { EchoDarkAstoria } from '../../map/echo-dark-astoria'

export const CairnWarder: BadgeData = {
  type: 'EXPLORATION',
  key: 'cairn-warder',
  setTitle: { id: 130 },
  name: [{ value: 'Cairn Warder' }],
  alignment: ['H'],
  mapKey: EchoDarkAstoria.key,
  loc: [1026, 51, 218],
  badgeText: [{
    value: 'Mortals erect petty monuments and cairns in the foolish pursuit of stemming the forces of Death. Mot has since sundered such vanities.',
  }],
  notes: 'Located in [map:echo-dark-astoria] in the far northeast corner of the zone under the northern side of a stone archway.',
  links: [
    { title: 'Cairn Warder Badge', href: 'https://homecoming.wiki/wiki/Cairn_Warder_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
