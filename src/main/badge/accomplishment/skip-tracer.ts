import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { BasseCroupier } from '../../contact/basse-croupier'

export const SkipTracer: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'skip-tracer',
  setTitle: { id: 342 },
  name: 'Skip Tracer',
  alignment: ['V'],
  badgeText: 'Nobody skips out on their debts to the Family. Not with you around.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "B4nKbUsTah" entry with number 6.77 in the 35-39 level range.`,
  links: [
    { title: 'Skip Tracer Badge', href: 'https://homecoming.wiki/wiki/Skip_Tracer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-7.png',
  requirements: [
    { key: 'ctfd', type: 'MISSION', missionName: 'Catch the Freakshow Debtor Before he Skips Town', contactKey: BasseCroupier.key },
  ],
}
