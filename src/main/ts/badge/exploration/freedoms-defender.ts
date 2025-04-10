import { BadgeData, contactLink } from 'coh-content-db'
import { SafeguardSteelCanyon } from '../../zone/safeguard-steel-canyon'
import { AgentHassell } from '../../contact/agent-hassell'

export const FreedomsDefender: BadgeData = {
  type: 'exploration',
  key: 'freedoms-defender',
  setTitleId: [651],
  name: [
    { alignment: 'hero', value: `Freedom's Defender` },
    { alignment: 'villain', value: `Freedom's Crusher` },
  ],
  morality: 'heroic',
  badgeText: 'The Hellions attempted to burn Steel Canyon to the ground. This block is where one of the first fires was started.',
  notes: `Located in the bottom right (southwestern) cutaway corner of a four-story apartment building in the central western part of the map.

Out-levelled Safeguard missions can be accessed via ${contactLink(AgentHassell)}.`,
  links: [
    { title: `Freedom's Defender Badge`, href: 'https://homecoming.wiki/wiki/Freedom%27s_Defender_Badge' },
    { title: `Freedom's Crusher Badge`, href: 'https://homecoming.wiki/wiki/Freedom%27s_Crusher_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SafeguardSteelCanyon.key, coords: [-4253, 122, -641], icon: 'badge', iconText: '1' } },
  ],
}
