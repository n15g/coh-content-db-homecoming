import { BadgeData, zoneLink } from 'coh-content-db'
import { TheStormPalace } from '../../zone/the-storm-palace'

export const HateMachine: BadgeData = {
  type: 'EXPLORATION',
  key: 'hate-machine',
  setTitle: { id: 1858 },
  name: [{ value: 'Hate Machine' }],
  alignment: ['H'],
  zoneKey: TheStormPalace.key,
  loc: [-5825, 1628, 2814],
  badgeText: [{
    value: `The hatred Rularuu feels is infectious.
It radiates from him in waves, and coming from such a powerful and otherworldly mind you have to struggle to keep it from overwhelming you.
Rularuu's minions are thought to be extensions of his will; it is easy to understand how that could be as you feel the urge to comply with that will creeping up on you in moments
of distraction or weakness.
Rularuu has engineered his minions into an engine geared towards releasing him from his prison, you must be mindful you do not become a cog in that machine.`,
  }],
  notes: `Located in ${zoneLink(TheStormPalace)} 444 yards due west of the Lock of Hatred marker, in the middle of the small island on the west side of the neighborhood.`,
  links: [
    { title: 'Hate Machine Badge', href: 'https://homecoming.wiki/wiki/Hate_Machine_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
