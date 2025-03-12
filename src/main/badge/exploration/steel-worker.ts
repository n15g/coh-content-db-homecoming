import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemSteelCanyon } from '../../map/mayhem-steel-canyon'

export const SteelWorker: BadgeData = {
  type: 'EXPLORATION',
  key: 'steel-worker',
  setTitle: { id: 558 },
  name: [{ value: 'Steel Worker' }],
  alignment: ['V'],
  mapKey: MayhemSteelCanyon.key,
  badgeText: [{
    alignment: 'H', value: 'Not even the hardened metal made in these factories of Steel Canyon was able to protect this city from determined villains.'
      + ' Good thing Paragon has you now to do it.',
  }, {
    alignment: 'V', value: 'Not even the hardened metal made in these factories of Steel Canyon can protect the city from you.',
  }],
  loc: [-4600, 0, 1497],
  notes: 'Located behind the police station, in a corner next to a garage door, about 66 yards south-southeast of the Jail entrance.\n'
    + '\n'
    + 'The marker might be hidden by packing crates and a dumpster.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'Steel Worker Badge', href: 'https://homecoming.wiki/wiki/Steel_Worker_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
