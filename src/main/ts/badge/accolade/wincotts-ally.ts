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
  type: 'accolade',
  key: 'wincotts-ally',
  setTitleId: [1521],
  name: [
    { alignment: 'hero', value: 'Wincott\'s Ally' },
    { alignment: 'villain', value: 'Wincott\'s Betrayer' },
  ],
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within the Hollows.`,
  links: [
    { title: 'Wincott\'s Ally Badge', href: 'https://homecoming.wiki/wiki/Wincott%27s_Ally_Badge' },
    { title: 'Wincott\'s Betrayer Badge', href: 'https://homecoming.wiki/wiki/Wincott%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: Parapsychologist.key, type: 'badge', badgeKey: Parapsychologist.key },
    { key: SeekerOfMonsters.key, type: 'badge', badgeKey: SeekerOfMonsters.key },
    { key: Geologist.key, type: 'badge', badgeKey: Geologist.key },
    { key: Backwoodsman.key, type: 'badge', badgeKey: Backwoodsman.key },
    { key: GanglandFury.key, type: 'badge', badgeKey: GanglandFury.key },
    { key: GraffitiCommunicator.key, type: 'badge', badgeKey: GraffitiCommunicator.key },
    { key: CircleSeeker.key, type: 'badge', badgeKey: CircleSeeker.key },
    { key: Ironic.key, type: 'badge', badgeKey: Ironic.key },
  ],
}
