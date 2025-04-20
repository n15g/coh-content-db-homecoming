import { BadgeData, zoneLink } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'
import { SkywayCity } from '../../zone/skyway-city'
import { Boomtown } from '../../zone/boomtown'
import { Faultline } from '../../zone/faultline'
import { IndependencePort } from '../../zone/independence-port'

export const JustSaidNoToSuperadine: BadgeData = {
  type: 'history',
  key: 'just-said-no-to-superadine',
  setTitleId: [152],
  name: 'Just Said No to Superadine',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history of Superadine, the newest designer drug to plague Paragon City.`,
  links: [
    { title: 'Just Said No to Superadine Badge', href: 'https://homecoming.wiki/wiki/Just_Said_No_to_Superadine_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'just-0',
      type: 'monument',
      location: { zoneKey: SteelCanyon.key, coords: [-1761, 8, -1277], icon: 'plaque', iconText: '2' },
      monumentText: `This statue honors John Knox of the Midnight Squad, otherwise known as the Crimson Fist.
Knox was among the many heroes to give their lives in the Rikti War, but he is best remembered for his efforts to keep Superadine off the streets.
Using his powers of telepathy and divination, it was he who first linked the sale of Superadine to the Family.`,
      notes: `Located at the base of the statue near the ${zoneLink(IndependencePort)} gate.`,
    },
    {
      key: 'just-1',
      type: 'monument',
      location: { zoneKey: SteelCanyon.key, coords: [-2178, 8, 751], icon: 'plaque', iconText: '3' },
      monumentText: `This was the site of the first Superadine drug bust. Michael White, otherwise known as the Back Alley Brawler, was patrolling the area when he discovered a pair of thugs haggling over a strange green liquid.
He arrested the villains, confiscated the drug, and brought it to the Freedom Phalanx for analysis.
The Phalanx's top researcher, Dr. Brian Webb, confirmed the Brawler's worst fears: a new drug had been discovered, and its potency was unprecedented.`,
      notes: `Located on the side of a building, 129 yard east of the Magic Store.`,
    },
    {
      key: 'just-2',
      type: 'monument',
      location: { zoneKey: SkywayCity.key, coords: [509, 90, -5511], icon: 'plaque', iconText: '2' },
      monumentText: `This site marks the first known sighting of the strange creatures known colloquially as 'Trolls.'
John Knox of the Midnight Squad was the first to observe these grotesque mutations. Afterward, he had this to say, 'I couldn't help but pity them.
In a very real way, these are the people we're working to save.'`,
      notes: `Located just northeast of the northern Paragon City Monorail station on the corner of an elevated highway.`,
    },
    {
      key: 'just-3',
      type: 'monument',
      location: { zoneKey: Boomtown.key, coords: [1140, 4, -135], icon: 'pedestal', iconText: '4' },
      monumentText: `In March of 1986, with the mystical aid of the Midnight Squad, the Back Alley Brawler managed to track local Superadine distribution to a secret lab beneath this building.
Little is known about the lab's contents. It is simply known that the Back Alley Brawler and the Statesman swore their comrades to secrecy after the battle.`,
      notes: `Located 179 yds west-southwest of the Grenadier Village marker.`,
    },
    {
      key: 'just-4',
      type: 'monument',
      location: { zoneKey: Faultline.key, coords: [-920, 7, -640], icon: 'plaque', iconText: '3' },
      monumentText: `In late 1982, the Back Alley Brawler and his Regulators were trying to mop up the last traces of Superadine on the city streets.
A tip led them to this building, a front company for the Family. During the raid, Harry Frost, the Family's leader, was accidentally killed, leaving his young son Sebastian to oversee his business.
Since then, Superadine sales have inexplicably increased, despite the best efforts of the Brawler and his comrades.`,
      notes: `Located just north of Yin's Market, 78 yards Southeast of Freight Lift A.`,
    },
  ],
}
