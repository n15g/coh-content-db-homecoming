import { BadgeData } from 'coh-content-db'
import { Patroller } from '../day-job/patroller'
import { MonitorDuty } from '../day-job/monitor-duty'

export const RapidResponseMember: BadgeData = {
  type: 'ACCOLADE',
  key: 'rapid-response-member',
  setTitle: { id: 1076 },
  name: [
    { alignment: 'H', value: 'Rapid Response Member' },
    { alignment: 'V', value: 'Trouble Maker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: `Your reputation of your work with your Super Group and in the field has earned you the Rapid Response Member Accolade.
While logged out near a Super Group Base portal you will earn charges of your Rapid Response Portal power.`,
    },
    {
      alignment: 'V', value: `Your reputation of your work with your Super Group and causing havok in the streets of the Rogue Isles has earned you the Trouble Maker Accolade.
While logged out near a Super Group Base portal you will earn charges of your Rapid Response Portal power.`,
    },
  ],
  links: [
    { title: 'Rapid Response Member Badge', href: 'https://homecoming.wiki/wiki/Rapid_Response_Member_Badge' },
    { title: 'Trouble Maker Badge', href: 'https://homecoming.wiki/wiki/Trouble_Maker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/rapid-response-member.png' },
  ],
  requirements: [
    { key: Patroller.key, type: 'BADGE', badgeKey: Patroller.key },
    { key: MonitorDuty.key, type: 'BADGE', badgeKey: MonitorDuty.key },
  ],
}
