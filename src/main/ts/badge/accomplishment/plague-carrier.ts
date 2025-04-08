import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { TheRadio } from '../../contact/the-radio'

export const PlagueCarrier: BadgeData = {
  type: 'accomplishment',
  key: 'plague-carrier',
  setTitleId: [332],
  name: 'Plague Carrier',
  morality: 'villainous',
  badgeText: 'The radio told you to steal the Outbreak virus and bring it back to Port Oakes.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Steal the Outbreak virus" entry with number 6.13 in the 10-14 level range.`,
  links: [
    { title: 'Plague Carrier Badge', href: 'https://homecoming.wiki/wiki/Plague_Carrier_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-2.png',
  requirements: [
    { key: 'softl', type: 'MISSION', missionName: `Steal 'outbreak' drug from the Lost and then take it to the drop-off point`, contactKey: TheRadio.key },
  ],
}
