import { BadgeData } from 'coh-content-db'
import { MsLibertyTaskForce } from '../../mission/ms-liberty-task-force'

export const SavedTheWorld: BadgeData = {
  type: 'accomplishment',
  key: 'saved-the-world',
  setTitleId: [733],
  name: [
    { alignment: 'hero', value: 'Saved the World' },
    { alignment: 'villain', value: 'Saved the World... for Later' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `After defeating Lord Recluse's plan to steal the powers of all the heroes on the planet, you have been recognized as a true world-savior.` },
    { alignment: 'villain', value: `Defeating Lord Recluse's plan to steal the powers of all the heroes on the planet was necessary at the time. After all, it wasn't YOU at the helm.` },
  ],
  links: [
    { title: 'Saved the World Badge', href: 'https://homecoming.wiki/wiki/Saved_the_World_Badge' },
    { title: 'Saved the World... For Later Badge', href: 'https://homecoming.wiki/wiki/Saved_the_World..._For_Later_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/defeatrecluse.png',
  requirements: [
    { key: MsLibertyTaskForce.key, type: 'mission', missionKey: MsLibertyTaskForce.key },
  ],
}
