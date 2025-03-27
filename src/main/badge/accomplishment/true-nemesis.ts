import { BadgeData, mapLink } from 'coh-content-db'
import { FoundersFalls } from '../../map/founders-falls'

export const TrueNemesis: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'true-nemesis',
  setTitle: { id: 2387 },
  name: [
    { value: 'True Nemesis' },
  ],
  alignment: ['H'],
  badgeText: [{ value: `You have stopped Nemesis Rex's incursion into Primal Earth.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/true_nemesis.png' }],
  acquisition: `Complete the task set 'Nemesis Rex'.`,
  notes: `The task set 'Nemesis Rex' begins with the 'Stop the battle between Nemesis Army factions and make sure no innocents get hurt' mission from level 40-44 contact Maxwell Christopher in ${mapLink(FoundersFalls)}.
          It is also available via Ouroboros, level 40-49, mission 1.07 'Nemesis Rex'.`,
  links: [
    { title: 'True Nemesis Badge', href: 'https://homecoming.wiki/wiki/True_Nemesis_Badge' },
  ],
}
