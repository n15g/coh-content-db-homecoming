import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { PenelopeYinFaultline } from '../../contact/penelope-yin-faultline'

export const Rescuer: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'rescuer',
  setTitle: { id: 696 },
  name: [
    { alignment: 'H', value: 'Rescuer' },
    { alignment: 'V', value: 'Big Softie' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `You saved Penelope Yin's father from the Lost, and now a thankful Mr. Yin has re-opened Yin's Market in Faultline. You can now shop there whenever you want.` },
    { alignment: 'V', value: 'Having saved Penelope Yin brings you no end of scorn from other villains. Before you smash them into oblivion, they call you a Big Softie.' },
  ],
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "I lost my Daddy!" entry with number 8.02 in the 20-24 level range.`,
  links: [
    { title: 'Rescuer Badge', href: 'https://homecoming.wiki/wiki/Rescuer_Badge' },
    { title: 'Big Softie Badge', href: 'https://homecoming.wiki/wiki/Big_Softie_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/rescuer.png',
  requirements: [
    { key: 'rmy', type: 'MISSION', missionName: 'Rescue Mr. Yin', contactKey: PenelopeYinFaultline.key },
  ],
}
