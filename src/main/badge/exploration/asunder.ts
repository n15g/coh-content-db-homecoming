import { BadgeData, zoneLink } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Asunder: BadgeData = {
  type: 'EXPLORATION',
  key: 'asunder',
  setTitle: { id: 757 },
  name: [{ value: 'Asunder' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: EchoRiktiCrashSite.key,
  loc: [3969.7, 34.3, -3851.5],
  badgeText: [{ value: 'This fort is the prime location to be for surveilling Rikti activity. Unfortunately, it\'s also the furthest from the Vanguard base and, thus, a big target for the Rikti.' }],
  notes: `**Moved from ${zoneLink(RiktiWarZone)} in Issue 25.**

          On top of the pillbox.`,
  links: [
    { title: 'Asunder Badge', href: 'https://homecoming.wiki/wiki/Asunder_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' },
  ],
  vidiotMapKey: '5',
}
