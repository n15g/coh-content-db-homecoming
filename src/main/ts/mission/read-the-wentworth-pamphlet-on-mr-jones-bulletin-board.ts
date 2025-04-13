import { MissionData } from 'coh-content-db'
import { GuidanceCounselorJones } from '../contact/guidance-counselor-jones'

export const ReadTheWentworthPamphletOnMrJonesBulletinBoard: MissionData = {
  key: 'read-the-wentworth-pamphlet-on-mr-jones-bulletin-board',
  name: `Read the Wentworth pamphlet on Mr. Jones' bulletin board`,
  type: 'mission',
  morality: 'heroic',
  contactKeys: GuidanceCounselorJones.key,
  levelRange: [10, 50],
  links: [
    { title: `Read the Wentworth pamphlet on Mr. Jones' bulletin board`, href: `https://homecoming.wiki/wiki/Guidance_Counselor_Jones#Read_the_Wentworth_pamphlet_on_Mr._Jones'_bulletin_board` },
  ],
}
