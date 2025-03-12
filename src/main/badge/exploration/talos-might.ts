import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardTalosIsland } from '../../map/safeguard-talos-island'

export const TalosMight: BadgeData = {
  type: 'EXPLORATION',
  key: 'talos-might',
  setTitle: { id: 653 },
  name: [
    { alignment: 'H', value: 'Talos\' Might' },
    { alignment: 'V', value: 'Talos\' Blight' },
  ],
  alignment: ['H'],
  mapKey: SafeguardTalosIsland.key,
  badgeText: [{ value: 'Years ago, Rularuu tore down the barriers between our dimensions and sent one of many invasion forces to this block. Heroes from all over fought back the invaders.' }],
  loc: [-1452, 160, 6739],
  notes: 'The Talos\' Might Badge is located in the Talos Island Safeguard Mission.\n'
    + '\n'
    + 'It is in the middle of the northernmost alley between the stores that line the central part of the Talos Island safeguard mission map.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Talos\' Might Badge', href: 'https://homecoming.wiki/wiki/Talos%27_Might_Badge' },
    { title: 'Talos\' Blight Badge', href: 'https://homecoming.wiki/wiki/Talos%27_Blight_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
