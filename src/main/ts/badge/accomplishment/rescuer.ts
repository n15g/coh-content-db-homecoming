import { BadgeData } from 'coh-content-db'
import { ILostMyDaddy } from '../../mission/i-lost-my-daddy'

export const Rescuer: BadgeData = {
  type: 'accomplishment',
  key: 'rescuer',
  setTitleId: [696],
  name: [
    { alignment: 'hero', value: 'Rescuer' },
    { alignment: 'villain', value: 'Big Softie' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You saved Penelope Yin's father from the Lost, and now a thankful Mr. Yin has re-opened Yin's Market in Faultline. You can now shop there whenever you want.` },
    { alignment: 'villain', value: 'Having saved Penelope Yin brings you no end of scorn from other villains. Before you smash them into oblivion, they call you a Big Softie.' },
  ],
  links: [
    { title: 'Rescuer Badge', href: 'https://homecoming.wiki/wiki/Rescuer_Badge' },
    { title: 'Big Softie Badge', href: 'https://homecoming.wiki/wiki/Big_Softie_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/rescuer.png',
  requirements: [
    { key: ILostMyDaddy.key, type: 'mission', missionKey: ILostMyDaddy.key },
  ],
}
