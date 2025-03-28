import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardSkywayCity } from '../../zone/safeguard-skyway-city'

export const CourageDriven: BadgeData = {
  type: 'EXPLORATION',
  key: 'courage-driven',
  setTitle: { id: 650 },
  name: [
    { alignment: 'H', value: 'Courage Driven' },
    { alignment: 'V', value: 'Rage Driven' },
  ],
  alignment: ['H'],
  zoneKey: SafeguardSkywayCity.key,
  badgeText: [{ value: 'The major highway that runs alongside this warehouse is frequently used by the "Dyne-addled" Supa-Trolls.' }],
  loc: [-945, 0, -3555],
  notes: 'The Courage Driven Badge is located in the Skyway City Safeguard Mission.\n'
    + '\n'
    + 'It is located just north of the entrance door of the southeastern warehouse building, just next to a delivery truck with a bronze colored cab.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Courage Driven Badge', href: 'https://homecoming.wiki/wiki/Courage_Driven_Badge' },
    { title: 'Rage Driven Badge', href: 'https://homecoming.wiki/wiki/Rage_Driven_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
