import { BadgeData } from 'coh-content-db'
import { EchoRiktiCrashSite } from '../../zone/echo-rikti-crash-site'

export const Ace: BadgeData = {
  type: 'exploration',
  key: 'ace',
  setTitleId: [145],
  name: 'Ace',
  morality: 'all',
  badgeText: 'This statue honors Mustang, a valiant hero who fought during WWII.',
  notes: `On the outstretched hand of the statue of Mustang.`,
  links: [
    { title: 'Ace Badge', href: 'https://homecoming.wiki/wiki/Ace_Badge' },
    { title: 'Echo: Rikti Crash Site Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoRiktiCrashSite.key, coords: [1360, 292.5, -276.9], icon: 'badge', iconText: '1' } },
  ],
}
