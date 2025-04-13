import { MissionData } from 'coh-content-db'
import { BrotherHammond } from '../contact/brother-hammond'

export const WhatSchemesMayCome: MissionData = {
  key: 'what-schemes-may-come',
  name: 'What Schemes May Come',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: BrotherHammond.key,
  levelRange: [15, 24],
  links: [
    { title: 'What Schemes May Come', href: 'https://homecoming.wiki/wiki/Brother_Hammond#What_Schemes_May_Come' },
  ],
  flashback: {
    id: '22.04',
    levelRange: [20, 24],
  },
}
