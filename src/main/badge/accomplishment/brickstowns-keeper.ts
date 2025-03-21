import { BadgeData } from 'coh-content-db'

export const BrickstownsKeeper: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'brickstowns-keeper',
  setTitle: { id: 2256 },
  name: [
    { value: 'Brickstown\'s Keeper' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You worked with the New Praetorians to stop the biggest breakout that Brickstown has ever seen.' },
  ],
  acquisition: 'Complete the second story arc from Provost Marchand (Primal Earth)',
  links: [
    { title: 'Brickstown\'s Keeper Badge', href: 'https://homecoming.wiki/wiki/Brickstown%27s_Keeper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png' },
  ],
}
