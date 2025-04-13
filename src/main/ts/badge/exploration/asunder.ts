import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'

export const Asunder: BadgeData = {
  type: 'exploration',
  key: 'asunder',
  setTitleId: [757],
  name: 'Asunder',
  morality: 'all',
  badgeText: `This fort is the prime location to be for surveilling Rikti activity. Unfortunately, it's also the furthest from the Vanguard base and, thus, a big target for the Rikti.`,
  notes: `On top of the pillbox.`,
  links: [
    { title: 'Asunder Badge', href: 'https://homecoming.wiki/wiki/Asunder_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoRiktiCrashSite.key, coords: [3969.7, 34.3, -3851.5], icon: 'badge', iconText: '5' } },
  ],
}
