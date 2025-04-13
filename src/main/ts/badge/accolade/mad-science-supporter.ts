import { BadgeData } from 'coh-content-db'
import { Sparky } from '../exploration/sparky'
import { MediaJunky } from '../exploration/media-junky'
import { Egghead } from '../exploration/egghead'
import { Steamed } from '../exploration/steamed'
import { SweetTooth } from '../exploration/sweet-tooth'
import { DoomSayer } from '../exploration/doom-sayer'
import { MasterOfScience } from '../exploration/master-of-science'
import { CircleGazer } from '../exploration/circle-gazer'

export const MadScienceSupporter: BadgeData = {
  type: 'accolade',
  key: 'mad-science-supporter',
  setTitleId: [1495],
  name: 'Mad Science Supporter',
  morality: 'villainous',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Cap Au Diable.`,
  links: [
    { title: 'Mad Science Supporter Badge', href: 'https://homecoming.wiki/wiki/Mad_Science_Supporter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png',
  requirements: [
    { key: Sparky.key, type: 'badge', badgeKey: Sparky.key },
    { key: MediaJunky.key, type: 'badge', badgeKey: MediaJunky.key },
    { key: Egghead.key, type: 'badge', badgeKey: Egghead.key },
    { key: Steamed.key, type: 'badge', badgeKey: Steamed.key },
    { key: SweetTooth.key, type: 'badge', badgeKey: SweetTooth.key },
    { key: DoomSayer.key, type: 'badge', badgeKey: DoomSayer.key },
    { key: MasterOfScience.key, type: 'badge', badgeKey: MasterOfScience.key },
    { key: CircleGazer.key, type: 'badge', badgeKey: CircleGazer.key },
  ],
}
