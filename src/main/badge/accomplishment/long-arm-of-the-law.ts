import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { ProvostMarchandPrimal } from '../../contact/provost-marchand-primal'
import { Ouroboros } from '../../zone/ouroboros'

export const LongArmOfTheLaw: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'long-arm-of-the-law',
  setTitle: { id: 2262 },
  name: 'Long Arm of the Law',
  alignment: ['H'],
  badgeText: 'You were able to stop all of the chaos that was running rampant around the bank in Brickstown.',
  acquisition: `Properly assign the New Praetorians to handle the side missions in the first mission of the second story arc from ${contactLink(ProvostMarchandPrimal)}.`,
  notes: `
* Pendragon handles the Freakshow
* Aurora Pena handles the Hellions
* Grant Creston handles Nemesis

To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "A New War" entry with number 24.07 at level 50.`,
  links: [
    { title: 'Long Arm of the Law Badge', href: 'https://homecoming.wiki/wiki/Long_Arm_of_the_Law_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png',
}
