import { MissionData } from 'coh-content-db'
import { TamiBaker } from '../contact/tami-baker'

export const DestroyingTheDestroyers: MissionData = {
  key: 'destroying-the-destroyers',
  name: 'Destroying the Destroyers',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: TamiBaker.key,
  levelRange: [8, 15],
  links: [
    { title: 'Destroying the Destroyers', href: 'https://homecoming.wiki/wiki/Tami_Baker#Destroying_the_Destroyers' },
  ],
  flashback: {
    id: '18.24',
    levelRange: [15, 19],
    morality: 'all',
  },
}
