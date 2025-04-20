import { BadgeData } from 'coh-content-db'
import { GoodVillainsNeverDie } from '../../mission/good-villains-never-die'

export const ExplosiveFinale: BadgeData = {
  type: 'accomplishment',
  key: 'explosive-finale',
  setTitleId: [1586],
  name: 'Explosive Finale',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'Protean thought he could put an end to you by blowing you up - you proved him wrong.',
  links: [
    { title: 'Explosive Finale Badge', href: 'https://homecoming.wiki/wiki/Explosive_Finale_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/explosive-finale.png',
  requirements: [
    { key: GoodVillainsNeverDie.key, type: 'mission', missionKey: GoodVillainsNeverDie.key },
  ],
}
