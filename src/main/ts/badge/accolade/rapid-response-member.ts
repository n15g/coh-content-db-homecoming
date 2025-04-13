import { BadgeData } from 'coh-content-db'
import { Patroller } from '../day-job/patroller'
import { MonitorDuty } from '../day-job/monitor-duty'

export const RapidResponseMember: BadgeData = {
  type: 'accolade',
  key: 'rapid-response-member',
  setTitleId: [1076],
  name: [
    { alignment: 'hero', value: 'Rapid Response Member' },
    { alignment: 'villain', value: 'Trouble Maker' },
  ],
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `Your reputation of your work with your Super Group and in the field has earned you the Rapid Response Member Accolade.
While logged out near a Super Group Base portal you will earn charges of your Rapid Response Portal power.`,
    },
    {
      alignment: 'villain', value: `Your reputation of your work with your Super Group and causing havok in the streets of the Rogue Isles has earned you the Trouble Maker Accolade.
While logged out near a Super Group Base portal you will earn charges of your Rapid Response Portal power.`,
    },
  ],
  links: [
    { title: 'Rapid Response Member Badge', href: 'https://homecoming.wiki/wiki/Rapid_Response_Member_Badge' },
    { title: 'Trouble Maker Badge', href: 'https://homecoming.wiki/wiki/Trouble_Maker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/rapid-response-member.png',
  requirements: [
    { key: Patroller.key, type: 'badge', badgeKey: Patroller.key },
    { key: MonitorDuty.key, type: 'badge', badgeKey: MonitorDuty.key },
  ],
}
