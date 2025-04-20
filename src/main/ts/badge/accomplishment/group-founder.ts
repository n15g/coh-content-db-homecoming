import { BadgeData } from 'coh-content-db'
import { ANewDimensionANewTeam } from '../../mission/a-new-dimension-a-new-team'

export const GroupFounder: BadgeData = {
  type: 'accomplishment',
  key: 'group-founder',
  setTitleId: [2255],
  name: 'Group Founder',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You helped Provost Marchand form the New Praetorians.',
  links: [
    { title: 'Group Founder Badge', href: 'https://homecoming.wiki/wiki/Group_Founder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png',
  requirements: [
    { key: ANewDimensionANewTeam.key, type: 'mission', missionKey: ANewDimensionANewTeam.key },
  ],
}
