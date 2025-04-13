import { BadgeData } from 'coh-content-db'
import { Architect } from '../day-job/architect'
import { Professor } from '../day-job/professor'

export const MasterArchitect: BadgeData = {
  type: 'accolade',
  key: 'master-architect',
  setTitleId: [1082],
  name: 'Master Architect',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `Your extensive study of the Mission Architect technology has earned you the Master Architect Day Job.
Earning this Accolade grants you the Invigorate power which will allow you to revive yourself, should you be defeated, while on Architect missions.`,
    },
    {
      alignment: 'villain',
      value: `Your extensive study of the Mission Architect technology has earned you the Master Architect Day Job.
Earning this Accolade grants you the Vitalize power which will allow you to revive yourself once every 10 minutes, should you be defeated, while on Architect missions.`,
    },
  ],
  links: [
    { title: 'Master Architect Badge', href: 'https://homecoming.wiki/wiki/Master_Architect_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/master-architect.png',
  requirements: [
    { key: Architect.key, type: 'badge', badgeKey: Architect.key },
    { key: Professor.key, type: 'badge', badgeKey: Professor.key },
  ],
}
