import { BadgeData, contactLink } from 'coh-content-db'
import { MayhemPeregrineIsland } from '../../zone/mayhem-peregrine-island'
import { LordSchweinzer } from '../../contact/lord-schweinzer'

export const GateCloser: BadgeData = {
  type: 'exploration',
  key: 'gate-closer',
  setTitleId: [563],
  name: [
    { alignment: 'hero', value: 'Gate Closer' },
    { alignment: 'villain', value: 'Gate Crasher' },
  ],
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `You'd hate to have to defend Portal Corps from the Arachnos Flyer should it ever return to Peregrine Island.` },
    { alignment: 'villain', value: `Even this gateway to Portal Corps in Peregrine Island couldn't keep you out with the help of the Arachnos Flyer.` },
  ],
  notes: `Located at the fence in front of you as you zone in.

Out-levelled Mayhem missions can be accessed via ${contactLink(LordSchweinzer)}.`,
  links: [
    { title: 'Gate Closer Badge', href: 'https://homecoming.wiki/wiki/Gate_Closer_Badge' },
    { title: 'Gate Crasher Badge', href: 'https://homecoming.wiki/wiki/Gate_Crasher_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemPeregrineIsland.key, coords: [-1154, 0, -3079], icon: 'badge', iconText: '1' } },
  ],
}
