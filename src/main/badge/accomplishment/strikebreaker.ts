import { BadgeData, zoneLink } from 'coh-content-db'
import { LorenzAnsaldo } from '../../contact/lorenz-ansaldo'
import { Ouroboros } from '../../zone/ouroboros'

export const Strikebreaker: BadgeData = {
  type: 'accomplishment',
  key: 'strikebreaker',
  setTitleId: [336],
  name: 'Strikebreaker',
  morality: 'villainous',
  badgeText: 'The Scrapyarders of Sharkhead Isle have been put back to work thanks to you.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Bust Up the Dockworker's Strike" entry with number 6.30 in the 20-24 level range.`,
  links: [
    { title: 'Strikebreaker Badge', href: 'https://homecoming.wiki/wiki/Strikebreaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-4.png',
  requirements: [
    { key: 'butds', type: 'MISSION', missionName: `Bust up the dockworker's strike`, contactKey: LorenzAnsaldo.key },
  ],
}
