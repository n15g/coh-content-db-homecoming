import { BadgeData } from 'coh-content-db'
import { ProvostMarchandPrimal } from '../../contact/provost-marchand-primal'

export const BrickstownsKeeper: BadgeData = {
  type: 'accomplishment',
  key: 'brickstowns-keeper',
  setTitleId: [2256],
  name: `Brickstown's Keeper`,
  morality: 'heroic',
  badgeText: 'You worked with the New Praetorians to stop the biggest breakout that Brickstown has ever seen.',
  acquisition: 'Complete the second story arc from Provost Marchand (Primal Earth)',
  links: [
    { title: `Brickstown's Keeper Badge`, href: 'https://homecoming.wiki/wiki/Brickstown%27s_Keeper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png',
  requirements: [
    { key: 'a-new-war', type: 'ARC', missionName: 'A New War', contactKey: ProvostMarchandPrimal.key },
  ],
}
