import { BadgeData, zoneLink } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'
import { StrigaIsle } from '../../zone/striga-isle'

export const GhostHunter: BadgeData = {
  type: 'history',
  key: 'ghost-hunter',
  setTitleId: [191],
  name: 'Ghost Hunter',
  morality: 'paragon-city-access',
  badgeText: `You have learned the rumors behind the fabled Ghost Ship.`,
  links: [
    { title: 'Ghost Hunter Badge', href: 'https://homecoming.wiki/wiki/Ghost_Hunter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'ghos-0',
      type: 'monument',
      location: { zoneKey: TalosIsland.key, coords: [1776, 37, 5179], icon: 'pedestal', iconText: '5' },
      monumentText: `This plaque marks the first sighting of a mysterious ghostly vessel filled with a crew of gibbering spirits.
Many people theorize that the vessel is Striga Isle's lost ship, the Moraine, which never returned to port after setting sail in the early 1930's.
Some even believe that the crew is still trying to get home.`,
      notes: `Located on the dock next to the ferry to ${zoneLink(StrigaIsle)}.`,
    },
    {
      key: 'ghos-1',
      type: 'monument',
      location: { zoneKey: StrigaIsle.key, coords: [-271, 104, -2517], icon: 'plaque', iconText: '1' },
      monumentText: `In 1932, the wives of the sailors on the good ship Moraine would gather on this little island.
In the shadow of the lighthouse, they would wait, sometimes all night, for any sign of their husbands' homecoming.`,
      notes: `Located 707 yards due north of the Port Noble neighborhood marker.`,
    },
    {
      key: 'ghos-2',
      type: 'monument',
      location: { zoneKey: StrigaIsle.key, coords: [-2534, -24, -2113], icon: 'plaque', iconText: '2' },
      monumentText: `This tomb honors the sailors lost on the oil tanker Moraine, which set sail in 1932 and was never heard from again.
Rumors indicate that the tanker was being used to smuggle ne'er-de-wells onto Striga Isle.
It has been theorized that these illicit passengers caused the ship's sinking.`,
      notes: `Located 137 yards east-southeast from the Bonny Morass neighborhood marker and 254 yards from The Wolf's Throat neighborhood marker on a straight line between them.`,
    },
    {
      key: 'ghos-3',
      type: 'monument',
      location: { zoneKey: StrigaIsle.key, coords: [-2667, 8, -414], icon: 'plaque', iconText: '3' },
      monumentText: `In 1932, the oil tanker Moraine was first launched from this site.
Many people have claimed that the ship's misfortune was due to Captain Renyard Kale failing to ask Mayor Spanky Rabinowitz to christen the ship on its first voyage.`,
      notes: `Located 330 yards due west of Ravenstorm.`,
    },
    {
      key: 'ghos-4',
      type: 'monument',
      location: { zoneKey: StrigaIsle.key, coords: [-3383, 88, 1002], icon: 'pedestal', iconText: '4' },
      monumentText: `In 1932, an oil tanker known as the Moraine set off from this point.
It was expected to remain at sea for several weeks; however, to this day, no one on Striga Isle has seen any sign of it.`,
      notes: `Located 490 yards due south of Ravenstorm.`,
    },
  ],
}
