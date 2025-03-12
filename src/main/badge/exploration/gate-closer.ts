import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemPeregrineIsland } from '../../map/mayhem-peregrine-island'

export const GateCloser: BadgeData = {
  type: 'EXPLORATION',
  key: 'gate-closer',
  setTitle: { id: 563 },
  name: [
    { alignment: 'H', value: 'Gate Closer' },
    { alignment: 'V', value: 'Gate Crasher' },
  ],
  alignment: ['V'],
  mapKey: MayhemPeregrineIsland.key,
  badgeText: [{
    alignment: 'H', value: 'You\'d hate to have to defend Portal Corps from the Arachnos Flyer should it ever return to Peregrine Island.',
  }, {
    alignment: 'V', value: 'Even this gateway to Portal Corps in Peregrine Island couldn\'t keep you out with the help of the Arachnos Flyer.',
  }],
  loc: [-1154, 0, -3079],
  notes: 'Located at the fence in front of you as you zone in.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Gate Closer Badge', href: 'https://homecoming.wiki/wiki/Gate_Closer_Badge' },
    { title: 'Gate Crasher Badge', href: 'https://homecoming.wiki/wiki/Gate_Crasher_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
