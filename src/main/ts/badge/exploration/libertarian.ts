import { BadgeData, contactLink } from 'coh-content-db'
import { MayhemFoundersFalls } from '../../zone/mayhem-founders-falls'
import { LordSchweinzer } from '../../contact/lord-schweinzer'

export const Libertarian: BadgeData = {
  type: 'exploration',
  key: 'libertarian',
  setTitleId: [562],
  name: [
    { alignment: 'hero', value: 'Libertarian' },
    { alignment: 'villain', value: 'Anarchist' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `It is here that the Devouring Earth nearly set off a biological bomb to infect the citizens of Founder's Falls.`,
  notes: `Located under the edge of a fountain, approximately 140 yards east of the bank.

Out-levelled Mayhem missions can be accessed via ${contactLink(LordSchweinzer)}.`,
  links: [
    { title: 'Libertarian Badge', href: 'https://homecoming.wiki/wiki/Libertarian_Badge' },
    { title: 'Anarchist Badge', href: 'https://homecoming.wiki/wiki/Anarchist_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemFoundersFalls.key, coords: [-3802, 4, 2687], icon: 'badge', iconText: '1' } },
  ],
}
