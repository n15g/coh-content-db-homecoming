import { BadgeData, contactLink } from 'coh-content-db'
import { SafeguardSkywayCity } from '../../zone/safeguard-skyway-city'
import { AgentHassell } from '../../contact/agent-hassell'

export const CourageDriven: BadgeData = {
  type: 'exploration',
  key: 'courage-driven',
  setTitleId: [650],
  name: [
    { alignment: 'hero', value: 'Courage Driven' },
    { alignment: 'villain', value: 'Rage Driven' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'The major highway that runs alongside this warehouse is frequently used by the "Dyne-addled" Supa-Trolls.',
  notes: `Located just north of the entrance door of the southeastern warehouse building, just next to a delivery truck with a bronze colored cab.

Out-levelled Safeguard missions can be accessed via ${contactLink(AgentHassell)}.`,
  links: [
    { title: 'Courage Driven Badge', href: 'https://homecoming.wiki/wiki/Courage_Driven_Badge' },
    { title: 'Rage Driven Badge', href: 'https://homecoming.wiki/wiki/Rage_Driven_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SafeguardSkywayCity.key, coords: [-945, 0, -3555], icon: 'badge', iconText: '1' } },
  ],
}
