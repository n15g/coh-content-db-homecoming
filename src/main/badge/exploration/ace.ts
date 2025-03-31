import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Ace: BadgeData = {
  type: 'EXPLORATION',
  key: 'ace',
  setTitle: { id: 145 },
  name: [{ value: 'Ace' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: EchoRiktiCrashSite.key,
  loc: [1360, 292.5, -276.9],
  badgeText: [{ value: 'This statue honors Mustang, a valiant hero who fought during WWII.' }],
  notes: `**Moved from ${zoneLink(RiktiWarZone)} in Issue 25.**

On the outstretched hand of the statue of Mustang.`,
  links: [
    { title: 'Ace Badge', href: 'https://homecoming.wiki/wiki/Ace_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '1',
}
