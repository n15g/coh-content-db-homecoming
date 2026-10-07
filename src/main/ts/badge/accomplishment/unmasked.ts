import { BadgeData } from 'coh-content-db'
import { CitadelTaskForceRevamp } from '../../mission/citadel-task-force-revamp'

export const Unmasked: BadgeData = {
  type: 'accomplishment',
  key: 'unmasked',
  gameId: 'Citadel5thSecret',
  setTitleId: [2607],
  name: 'Unmasked',
  releaseDate: '2026-10-06',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `When assisting Citadel, you exposed Vandal's true allegiance to the 5th Column and his grand scheme to play the Council's resources off of them.` },
    { alignment: 'villain', value: `When assisting Citadel, you exposed Vandal's true allegiance to the 5th Column and his grand scheme to play the Council's resources off of them. Now, how do you suppose you can twist this information to your advantage?` },
  ],
  links: [
    { title: 'Unmasked Badge', href: 'https://homecoming.wiki/wiki/Unmasked_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/unmasked.png',
  requirements: [
    { key: CitadelTaskForceRevamp.key, type: 'mission', missionKey: CitadelTaskForceRevamp.key },
  ],
}
