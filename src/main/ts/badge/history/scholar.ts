import { BadgeData, zoneLink } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'
import { SkywayCity } from '../../zone/skyway-city'
import { Boomtown } from '../../zone/boomtown'
import { Faultline } from '../../zone/faultline'
import { TalosIsland } from '../../zone/talos-island'

export const Scholar: BadgeData = {
  type: 'history',
  key: 'scholar',
  setTitleId: [151],
  name: 'Scholar',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history of Back Alley Brawler's war on drugs in Paragon City.`,
  links: [
    { title: 'Scholar Badge', href: 'https://homecoming.wiki/wiki/Scholar_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'schr-0',
      type: 'monument',
      location: { zoneKey: SteelCanyon.key, coords: [-4525, 4, 2067], icon: 'pedestal', iconText: '4' },
      monumentText: `On this spot, the Back Alley Brawler formed his Super Group, the Regulators, in August of 1972.
They were a group dedicated to wiping out the drug problems that had begin to ravage Paragon City's neighborhoods.
The Brawler's friend Blue Steel coined their motto, 'That no power shall triumph over the human mind.'`,
      notes: `Located near the South Monorail station.`,
    },
    {
      key: 'schr-1',
      type: 'monument',
      location: { zoneKey: SkywayCity.key, coords: [-1468, 24, -2346], icon: 'plaque', iconText: '3' },
      monumentText: `This was the site of one of the Regulators' first major victories in their War on Drugs.
Led by the Back Alley Brawler, the Regulators surprised a group of thugs who were dealing in heavy narcotics.
One of the villains, Harry Frost, later said, 'They may have got the best of me. But mark my words, my Family will rule this town.'`,
      notes: `Located at a rest stop approx. 158 yards west-southwest of the ${zoneLink(TalosIsland)} gate, hidden in the shadows next to the restrooms.`,
    },
    {
      key: 'schr-2',
      type: 'monument',
      location: { zoneKey: SkywayCity.key, coords: [1400, -110, -1148], icon: 'plaque', iconText: '4' },
      monumentText: `On this site, the Regulators and the Dawn Patrol first came together, joining forces to bring the Back Alley Brawler's War on Drugs to a conclusion.
Unable to make a dent in crime by arresting petty thugs, they resolved to go after the drug problem at its root: the drug farms that produced the evil substances.`,
      notes: `Located approx. 250 yards west of the Land of the Lost neighborhood marker, on the wall along a road that is going down hill to the west.`,
    },
    {
      key: 'schr-3',
      type: 'monument',
      location: { zoneKey: Boomtown.key, coords: [-1667.1, 5.6, 4522.5], icon: 'plaque', iconText: '5' },
      monumentText: `It was here that the Back Alley Brawler arrested Harry Frost for the second time.
Frost was peddling a strange substance to a group of street thugs. After a lengthy court battle, the charges stuck.
It seemed that the War on Drugs had achieved a critical victory.`,
      notes: `Located 195 yards due east of the The Fuse neighborhood marker.`,
    },
    {
      key: 'schr-4',
      type: 'monument',
      location: { zoneKey: Faultline.key, coords: [866, 31, -1673], icon: 'pedestal', iconText: '4' },
      monumentText: `This plaque commemorates the death of Mina Horne, known to her comrades as the Illustrated Woman.
She was killed when the Frost drug cartel, otherwise known as the Family, ambushed the Regulators as revenge for the brief imprisonment of Harry Frost.
At her funeral, a shaken Back Alley Brawler said, 'Mina was a person who believed in the human spirit. We can best honor her by living the life she fought for.'`,
      notes: `Located 436 yards West of the Overbrook Medical Center.`,
    },
  ],
}
