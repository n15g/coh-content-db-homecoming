import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { Leonard } from '../../contact/leonard'
import { Ouroboros } from '../../zone/ouroboros'

export const ArmyOfMe: BadgeData = {
  type: 'defeat',
  key: 'army-of-me',
  setTitleId: [1591],
  name: 'Army of Me',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You don't understand the math behind it, but you're pretty sure you're equal to or greater than eight of yourself.`,
  acquisition: `Defeat eight clones of yourself in the "Good Villains Never Die" story arc from ${contactLink(Leonard)}.`,
  notes: `During the "Test Out Your Clones" mission of the "Good Villains Never Die" (Level 25-29, Arc 17.04 in ${zoneLink(Ouroboros)}, Villain) story arc from ${contactLink(Leonard)}, speak with Dr. Higgins.
From his dialogue tree, select "Send out all eight clones", verify your choice, and then defeat all eight clones.`,
  links: [
    { title: 'Army of Me Badge', href: 'https://homecoming.wiki/wiki/Army_of_Me_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/army-of-me.png',
}
