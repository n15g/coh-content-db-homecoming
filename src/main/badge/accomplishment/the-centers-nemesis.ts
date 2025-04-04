import { BadgeData, zoneLink } from 'coh-content-db'
import { ProvostMarchandPrimal } from '../../contact/provost-marchand-primal'
import { Ouroboros } from '../../zone/ouroboros'

export const TheCentersNemesis: BadgeData = {
  type: 'accomplishment',
  key: 'the-centers-nemesis',
  setTitleId: [2257],
  name: `The Center's Nemesis`,
  morality: 'heroic',
  badgeText: `You stopped Calvin Scott and the Center's plans for Paragon City. The public of Paragon consider you to be the one hero who can stop the Council.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Tipping the Scales" entry with number 24.08 at level 50.`,
  links: [
    { title: `The Center's Nemesis Badge`, href: 'https://homecoming.wiki/wiki/The_Center%27s_Nemesis_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png',
  requirements: [
    { key: 'tts', type: 'ARC', missionName: 'Tipping the Scales', contactKey: ProvostMarchandPrimal.key },
  ],
}
