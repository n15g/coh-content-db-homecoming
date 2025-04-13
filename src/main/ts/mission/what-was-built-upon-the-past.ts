import { MissionData } from 'coh-content-db'
import { SisterSolaris } from '../contact/sister-solaris'

export const WhatWasBuiltUponthePast: MissionData = {
  key: 'what-was-built-upon-the-past',
  name: 'What Was Built Upon the Past',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: SisterSolaris.key,
  levelRange: [50],
  links: [
    { title: 'What Was Built Upon the Past', href: 'https://homecoming.wiki/wiki/Sister_Solaris#What_Was_Built_Upon_the_Past' },
  ],
  flashback: {
    id: '22.18',
    levelRange: [50],
  },
}
