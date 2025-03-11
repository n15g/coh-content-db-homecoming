import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../map/steel-canyon'
import { SkywayCity } from '../../map/skyway-city'
import { Boomtown } from '../../map/boomtown'
import { Faultline } from '../../map/faultline'

export const Scholar: BadgeData = {
  type: 'HISTORY',
  key: 'scholar',
  setTitle: { id: 151 },
  name: [
    { value: 'Scholar' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history of Back Alley Brawler's war on drugs in Paragon City.` },
  ],
  links: [
    { title: 'Scholar Badge', href: 'https://homecoming.wiki/wiki/Scholar_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  partials: [
    {
      key: 'schr-0',
      type: 'PLAQUE',
      mapKey: SteelCanyon.key,
      plaqueType: 'MONUMENT',
      loc: [-4525, 4, 2067],
      inscription: `On this spot, the Back Alley Brawler formed his Super Group, the Regulators, in August of 1972. They were a group dedicated to wiping out the drug problems that had begin to ravage Paragon City's neighborhoods. The Brawler's friend Blue Steel coined their motto, 'That no power shall triumph over the human mind.'`,
      notes: `This plaque is in [map:${SteelCanyon.key}], near the South Monorail station.`,
      vidiotMapKey: '4',
    },
    {
      key: 'schr-1',
      type: 'PLAQUE',
      mapKey: SkywayCity.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-1468, 24, -2346],
      inscription: `This was the site of one of the Regulators' first major victories in their War on Drugs. Led by the Back Alley Brawler, the Regulators surprised a group of thugs who were dealing in heavy narcotics. One of the villains, Harry Frost, later said, 'They may have got the best of me. But mark my words, my Family will rule this town.'`,
      notes: `This plaque is in [map:${SkywayCity.key}] at a rest stop just west of the Talos Island gate. It is on the wall, facing north, hidden in the shadows next to the restrooms. It is 158 yards west-southwest of the Talos Island gate.`,
      vidiotMapKey: '3',
    },
    {
      key: 'schr-2',
      type: 'PLAQUE',
      mapKey: SkywayCity.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [1400, -110, -1148],
      inscription: `On this site, the Regulators and the Dawn Patrol first came together, joining forces to bring the Back Alley Brawler's War on Drugs to a conclusion. Unable to make a dent in crime by arresting petty thugs, they resolved to go after the drug problem at its root: the drug farms that produced the evil substances.`,
      notes: `This plaque is in [map:${SkywayCity.key}]. It is facing south, on a wall along a road that is going down hill to the west. It is approximately 250 yards west of the Land of the Lost neighborhood marker.`,
      vidiotMapKey: '4',
    },
    {
      key: 'schr-3',
      type: 'PLAQUE',
      mapKey: Boomtown.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-1667.1, 5.6, 4522.5],
      inscription: `It was here that the Back Alley Brawler arrested Harry Frost for the second time. Frost was peddling a strange substance to a group of street thugs. After a lengthy court battle, the charges stuck. It seemed that the War on Drugs had achieved a critical victory.`,
      notes: `This plaque is in [map:${Boomtown.key}], 195 yards due east of the The Fuse neighborhood marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'schr-4',
      type: 'PLAQUE',
      mapKey: Faultline.key,
      plaqueType: 'MONUMENT',
      loc: [866, 31, -1673],
      inscription: `This plaque commemorates the death of Mina Horne, known to her comrades as the Illustrated Woman. She was killed when the Frost drug cartel, otherwise known as the Family, ambushed the Regulators as revenge for the brief imprisonment of Harry Frost. At her funeral, a shaken Back Alley Brawler said, 'Mina was a person who believed in the human spirit. We can best honor her by living the life she fought for.'`,
      notes: `This plaque is in [map:${Faultline.key}], 436 yards West of the Overbrook Medical Center.`,
      vidiotMapKey: '4',
    },
  ],
}
