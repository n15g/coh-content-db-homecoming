import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'
import { IndependencePort } from '../../zone/independence-port'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'
import { TerraVolta } from '../../zone/terra-volta'

export const Researcher: BadgeData = {
  type: 'history',
  key: 'researcher',
  setTitleId: [156],
  name: 'Researcher',
  morality: 'paragon-city-access',
  badgeText: `You have learned the sordid history of former mayor of Paragon City, Spanky Rabinowitz.`,
  links: [
    { title: 'Researcher Badge', href: 'https://homecoming.wiki/wiki/Researcher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'rese-0',
      type: 'monument',
      location: { zoneKey: TalosIsland.key, coords: [-3680, 128, 1519], icon: 'pedestal', iconText: '2' },
      monumentText: `After his fourth re-election as mayor, 'Spanky' Rabinowitz threw an enormous gala in this meadow.
Brightly colored tents dotted the grass, and the Paragon City Philharmonic turned out to play the event.
It is rumored that such shady characters as Al Capone and Nathaniel Frost attended the event.`,
      notes: `Located 47 feet due west of the Ithaca Island marker.`,
    },
    {
      key: 'rese-1',
      type: 'monument',
      location: { zoneKey: TalosIsland.key, coords: [-1147, 228, 5688], icon: 'pedestal', iconText: '3' },
      monumentText: `Mayor 'Spanky' Rabinowitz was born on this very street, in 1878 to Aaron and Maria Rabinowitz.
Those who knew the mayor well say that he often returned to this area when troubled,
to walk the streets he grew up on and contemplate the city's future.`,
      notes: `Located 118 yards due east of the New Corinth marker.`,
    },
    {
      key: 'rese-2',
      type: 'monument',
      location: { zoneKey: IndependencePort.key, coords: [-1626, 5, 5252], icon: 'pedestal', iconText: '3' },
      monumentText: `In the 1920's, it was considered most unlucky not to have your ship christened by Mayor 'Spanky' Rabinowitz.
His services were so greatly in demand that he was often to be found in the shipyard on a weekday afternoon,
playing poker with the dock hands and awaiting the next opportunity to discharge his duties.`,
      notes: `Located 263 yards south by southeast of the Justice Quay marker.`,
    },
    {
      key: 'rese-3',
      type: 'monument',
      location: { zoneKey: EchoDarkAstoria.key, coords: [5218, 8, 129], icon: 'plaque', iconText: '2' },
      monumentText: `While Mayor 'Spanky' Rabinowitz was no paragon of virtue, it cannot be argued that Paragon City prospered under his guidance.
Historians cannot account for this.
Some have theorized that Spanky had some sort of mystical power on his side;
it has even been theorized that he sold his soul to a demon in exchange for the city's well-being.
After his death, a number of old relics were found in a secret compartment in his private office,
including a map of Dark Astoria.`,
      notes: `Located 533 yards due north of the Romero Heights marker.`,
    },
    {
      key: 'rese-4',
      type: 'monument',
      location: { zoneKey: EchoDarkAstoria.key, coords: [5888, 8, 1543], icon: 'plaque', iconText: '3' },
      monumentText: `Though the details remain unclear, it is rumored that Mayor 'Spanky' Rabinowitz often met with Nathaniel Frost here.
Some historians have theorized that Frost paid Spanky to keep the police from investigating the Frost crime ring.
Others have posited that Spanky paid Frost to keep the crime ring's activities from becoming violent.
The real purpose of these visits may never be known.`,
      notes: `Located 242 yards west of the Romero Heights marker.`,
    },
    {
      key: 'rese-5',
      type: 'monument',
      location: { zoneKey: TerraVolta.key, coords: [2090, 8, -6055], icon: 'plaque', iconText: '2' },
      monumentText: `Years after his death, many of the Mayor 'Spanky' Rabinowitz's secret dealings were still coming to light.
Though his heirs have yet to piece together the entire picture,
it seems that Spanky had money secretly invested in numerous businesses within Paragon City, including this factory.
His heirs cannot quite account for the money's origin.`,
      notes: `Located 352 yards west-southwest of the Coroman Manufacturing marker.`,
    },
  ],
}
