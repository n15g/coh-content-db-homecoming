import { BadgeData } from 'coh-content-db'

export const GerminatorTerminator: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'germinator-terminator',
  setTitle: { id: 2062 },
  name: [
    { value: 'Germinator Terminator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'The Praetorian Hamidon should know by now that sending one colonizing Seed isn\'t enough to '
        + 'retake First Ward. You dread the day it does... You have taken down the Seed of Hamidon to '
        + 'earn this badge.',
    },
  ],
  acquisition: 'Defeat The Seed of Hamidon in First Ward',
  links: [
    { title: 'Germinator Terminator Badge', href: 'https://homecoming.wiki/wiki/Germinator_Terminator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/germinator-terminator.png' },
  ],
}
