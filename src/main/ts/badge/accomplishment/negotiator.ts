import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { GetTheClockworkOutOfTheWarehouseBeforeTheSkullsGetInvolved } from '../../mission/get-the-clockwork-out-of-the-warehouse-before-the-skulls-get-involved'

export const Negotiator: BadgeData = {
  type: 'accomplishment',
  key: 'negotiator',
  setTitleId: [71],
  name: 'Negotiator',
  morality: 'heroic',
  badgeText: 'You were instrumental in stopping a war between the Clockwork and the Skulls.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Break up the Clockwork and the Skulls" entry with number 0.01 in the 1-9 level range.`,
  links: [
    { title: 'Negotiator Badge', href: 'https://homecoming.wiki/wiki/Negotiator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/negotiator.png',
  requirements: [
    { key: GetTheClockworkOutOfTheWarehouseBeforeTheSkullsGetInvolved.key, type: 'mission', missionKey: GetTheClockworkOutOfTheWarehouseBeforeTheSkullsGetInvolved.key },
  ],
}
