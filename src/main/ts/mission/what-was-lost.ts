import { MissionData } from 'coh-content-db'
import { MatthewHabashy } from '../contact/matthew-habashy'

export const WhatWasLost: MissionData = {
  key: 'what-was-lost',
  name: 'What Was Lost',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: MatthewHabashy.key,
  levelRange: [1, 7],
  links: [
    { title: 'What Was Lost', href: 'https://homecoming.wiki/wiki/Matthew_Habashy#What_Was_Lost' },
  ],
  flashback: {
    id: '21.01',
    levelRange: [1, 9],
  },
}
