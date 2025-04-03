import { BadgeData, zoneLink } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const GerminatorTerminator: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'germinator-terminator',
  setTitle: { id: 2062 },
  name: 'Germinator Terminator',
  alignment: ['H', 'V', 'P'],
  badgeText: `The Praetorian Hamidon should know by now that sending one colonizing Seed isn't enough to retake First Ward. You dread the day it does... You have taken down the Seed of Hamidon to earn this badge.`,
  acquisition: `Defeat The Seed of Hamidon in ${zoneLink(FirstWard)}.`,
  links: [
    { title: 'Germinator Terminator Badge', href: 'https://homecoming.wiki/wiki/Germinator_Terminator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/germinator-terminator.png',
}
