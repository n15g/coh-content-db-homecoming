import { BadgeData } from 'coh-content-db'
import { Parapsychologist } from '../exploration/parapsychologist'
import { SeekerOfMonsters } from '../exploration/seeker-of-monsters'
import { Geologist } from '../exploration/geologist'
import { Backwoodsman } from '../exploration/backwoodsman'
import { GanglandFury } from '../exploration/gangland-fury'
import { GraffitiCommunicator } from '../exploration/graffiti-communicator'
import { CircleSeeker } from '../exploration/circle-seeker'
import { Ironic } from '../exploration/ironic'

export const WincottsAlly: BadgeData = {
  type: 'ACCOLADE',
  key: 'wincotts-ally',
  setTitle: { id: 1521 },
  name: [
    { alignment: 'H', value: 'Wincott\'s Ally' },
    { alignment: 'V', value: 'Wincott\'s Betrayer' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within the Hollows.` },
  ],
  links: [
    { title: 'Wincott\'s Ally Badge', href: 'https://homecoming.wiki/wiki/Wincott%27s_Ally_Badge' },
    { title: 'Wincott\'s Betrayer Badge', href: 'https://homecoming.wiki/wiki/Wincott%27s_Betrayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  requirements: [
    { key: Parapsychologist.key, type: 'BADGE', badgeKey: Parapsychologist.key },
    { key: SeekerOfMonsters.key, type: 'BADGE', badgeKey: SeekerOfMonsters.key },
    { key: Geologist.key, type: 'BADGE', badgeKey: Geologist.key },
    { key: Backwoodsman.key, type: 'BADGE', badgeKey: Backwoodsman.key },
    { key: GanglandFury.key, type: 'BADGE', badgeKey: GanglandFury.key },
    { key: GraffitiCommunicator.key, type: 'BADGE', badgeKey: GraffitiCommunicator.key },
    { key: CircleSeeker.key, type: 'BADGE', badgeKey: CircleSeeker.key },
    { key: Ironic.key, type: 'BADGE', badgeKey: Ironic.key },
  ],
}
