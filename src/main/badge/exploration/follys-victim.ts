import { BadgeData } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const FollysVictim: BadgeData = {
  type: 'exploration',
  key: 'follys-victim',
  setTitleId: [2179],
  name: `Folly's Victim`,
  morality: 'all',
  zoneKey: DarkAstoria.key,
  loc: [2228, 176, 4896],
  badgeText: `Ever watchful of the sleeping god Mot, the Circle of Thorns have stood vigil on these grounds since its imprisonment.
Even as the last of Mot's bonds were shattered, the Circle sought to contain its terrible power.
Fools or heroes, the Circle's casualties were tremendous as they defied the wrath of the resurgent deity.
It is said that the Demon-Prince Stolas was the first to confront the manifestations of Mot.
When the Demon-Prince was broken and devoured, the ranks of his minions broke and fled into the streets of Dark Astoria.`,
  notes: `Located in the Raimi Arcade neighborhood, 176 yards south of the marker for Flicker.`,
  links: [
    { title: `Folly's Victim Badge`, href: 'https://homecoming.wiki/wiki/Folly%27s_Victim_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '1',
}
