import { BadgeData, contactLink } from 'coh-content-db'
import { MayhemSteelCanyon } from '../../zone/mayhem-steel-canyon'
import { LordSchweinzer } from '../../contact/lord-schweinzer'

export const SteelWorker: BadgeData = {
  type: 'exploration',
  key: 'steel-worker',
  setTitleId: [558],
  name: 'Steel Worker',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `Not even the hardened metal made in these factories of Steel Canyon was able to protect this city from determined villains. Good thing Paragon has you now to do it.` },
    { alignment: 'villain', value: 'Not even the hardened metal made in these factories of Steel Canyon can protect the city from you.' },
  ],
  notes: `Located behind the police station, in a corner next to a garage door, about 66 yards south-southeast of the Jail entrance.

The marker might be hidden by packing crates and a dumpster.

Out-levelled Mayhem missions can be accessed via ${contactLink(LordSchweinzer)}.`,
  links: [
    { title: 'Steel Worker Badge', href: 'https://homecoming.wiki/wiki/Steel_Worker_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemSteelCanyon.key, coords: [-4600, 0, 1497], icon: 'badge', iconText: '1' } },
  ],
}
