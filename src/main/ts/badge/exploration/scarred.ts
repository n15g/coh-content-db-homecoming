import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'

export const Scarred: BadgeData = {
  type: 'exploration',
  key: 'scarred',
  setTitleId: [756],
  name: 'Scarred',
  morality: 'all',
  badgeText: 'The Rikti mother ship ripped a path through this area when it crashed into the ground.',
  notes: `Located on a broken fragment of road next to a destroyed building, a wrecked car is pointing at it.`,
  links: [
    { title: 'Scarred Badge', href: 'https://homecoming.wiki/wiki/Scarred_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoRiktiCrashSite.key, coords: [3216.4, -137.3, -3198.1], icon: 'badge', iconText: '4' } },
  ],
}
