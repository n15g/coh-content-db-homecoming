import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const Vigorous: BadgeData = {
  type: 'exploration',
  key: 'vigorous',
  setTitleId: [124],
  name: 'Vigorous',
  morality: 'heroic',
  zoneKey: IndependencePort.key,
  loc: [-1615, 80, -1872],
  badgeText: 'Sister Psyche\'s greatest nemesis was the insane Malaise.'
    + ' When she finally apprehended him, she found a confused soul in search of release.'
    + ' Using her mental powers, she switched Malaise\'s dual personalities, bringing the benevolent one to dominance.'
    + ' Then she took him under her wing for observation.',
  notes: 'The Vigorous Badge is located in the Crey Cove neighborhood of Independence Port.'
    + '\n\nThe badge marker is in the center of the roof of a large warehouse approximately 310 yards southwest of the Kings Row tunnel and directly south of Icon at 187 yards.',
  links: [
    { title: 'Vigorous Badge', href: 'https://homecoming.wiki/wiki/Vigorous_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '3',
}
