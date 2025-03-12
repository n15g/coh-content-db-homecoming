import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../map/cap-au-diable'
import { Sparky } from '../exploration/sparky'
import { MediaJunky } from '../exploration/media-junky'
import { Egghead } from '../exploration/egghead'
import { Steamed } from '../exploration/steamed'
import { SweetTooth } from '../exploration/sweet-tooth'
import { DoomSayer } from '../exploration/doom-sayer'
import { MasterOfScience } from '../exploration/master-of-science'
import { CircleGazer } from '../exploration/circle-gazer'

export const MadScienceSupporter: BadgeData = {
  type: 'ACCOLADE',
  key: 'mad-science-supporter',
  setTitle: { id: 1495 },
  name: [
    { value: 'Mad Science Supporter' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Cap Au Diable.` },
  ],
  notes: `Visit all exploration badges in [map:${CapAuDiable.key}]`,
  links: [
    { title: 'Mad Science Supporter Badge', href: 'https://homecoming.wiki/wiki/Mad_Science_Supporter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png' },
  ],
  partials: [
    { key: Sparky.key, type: 'BADGE', badgeKey: Sparky.key },
    { key: MediaJunky.key, type: 'BADGE', badgeKey: MediaJunky.key },
    { key: Egghead.key, type: 'BADGE', badgeKey: Egghead.key },
    { key: Steamed.key, type: 'BADGE', badgeKey: Steamed.key },
    { key: SweetTooth.key, type: 'BADGE', badgeKey: SweetTooth.key },
    { key: DoomSayer.key, type: 'BADGE', badgeKey: DoomSayer.key },
    { key: MasterOfScience.key, type: 'BADGE', badgeKey: MasterOfScience.key },
    { key: CircleGazer.key, type: 'BADGE', badgeKey: CircleGazer.key },
  ],
}
