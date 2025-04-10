import { BadgeData, zoneLink } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'
import { IndependencePort } from '../../zone/independence-port'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'
import { TerraVolta } from '../../zone/terra-volta'

export const Historian: BadgeData = {
  type: 'history',
  key: 'historian',
  setTitleId: [154],
  name: 'Historian',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history of the U.N. Special Council on Superhuman Activities.`,
  links: [
    { title: 'Historian Badge', href: 'https://homecoming.wiki/wiki/Historian_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'hist-0',
      type: 'monument',
      location: { zoneKey: TalosIsland.key, coords: [-1528, 168, 7554], icon: 'plaque', iconText: '4' },
      monumentText: `After the devastating 1999 terrorist attack on the Midnight Squad, Rebecca Foss spoke here in favor of the creation of a United Nations Special Council on Super Human Activities.
She said, 'Paragon City has suffered a great loss. Someone must step up to take the reins. Hero Corps puts its faith firmly in the proposed U.N. council, and pledges to support all its actions.'`,
      notes: `Located 226 yards East of the Paragon City Monorail marker.`,
    },
    {
      key: 'hist-1',
      type: 'monument',
      location: { zoneKey: IndependencePort.key, coords: [-1080, 6, 2312], icon: 'pedestal', iconText: '4' },
      monumentText: `In January 2000, a ceremony was held at this site to celebrate the creation of the United Nations Special Council on Super Human Activities.
Among the attendees was the Freedom Phalanx's Statesman, who said, 'The world has become too large for me to watch over alone.
I am happy to welcome the United Nations to the battle.'`,
      notes: `Located on the southeast rock outcropping of Power Island, 742 yards from the Justice Quay marker and 843 yards southeast from the ${zoneLink(TerraVolta)} marker.`,
    },
    {
      key: 'hist-2',
      type: 'monument',
      location: { zoneKey: EchoDarkAstoria.key, coords: [2493, 92, 486], icon: 'pedestal', iconText: '4' },
      monumentText: `This tomb houses the remains of several members of the Midnight Squad, who were murdered during a sneak attack on their secret Terra Volta facility.
It was this action that prompted the creation of the United Nations Special Council on Super Human Activities.`,
      notes: `Located approx. 456 yds NW of Moth marker and 586 NE of Barca Plaza marker.`,
    },
    {
      key: 'hist-3',
      type: 'monument',
      location: { zoneKey: TerraVolta.key, coords: [2875, 100, -3972], icon: 'pedestal', iconText: '3' },
      monumentText: `In the late 1990's, super-powered mercenary groups had become active all over the world.
The situation had clearly gotten out of hand, but it was a mercenary activity right here in Paragon City that spurred the creation of the U.N. Special Council on Super Human Activities.
Late one night in September of 1999, 6 super-powered mercenaries slipped into this factory complex and made off with several canisters of lethal gas, a byproduct of the factory's machinery.
The Freedom Phalanx bested several of the mercenaries, but they were too late to stop one fo the villains from getting away with the gas. Aghast, the city waited and watched.
Something bad was about to happen. But nobody knew what.`,
      notes: `Located approx. 156 yds East of Rogers Industries marker along fence south side of road.`,
    },
    {
      key: 'hist-4',
      type: 'monument',
      location: { zoneKey: TerraVolta.key, coords: [-636, 5, -6188], icon: 'pedestal', iconText: '4' },
      monumentText: `In the late 1990's, super-powered mercenary groups had become active all over the world.
The situation had clearly gotten out of hand, but it was a mercenary activity right here in Paragon City that spurred the creation of the U.N. Special Council of Super Human Activities.
In September 1999, super-powered mercenaries stole poisonous gas from a Terra Volta factory. Days later, they struck.
They attacked the complex that once rested on this site, gassing the people within.
When the Freedom Phalanx investigated, it was discovered that the facility had been a front for an undercover Midnight Squad operation.
Several of the Squad's more secretive researchers had been living in this facilty, under the belief that this subterfuge would keep them safe.
Forty-seven men and women died in the attack; to this day, no one knows who the perpetrators were.`,
      notes: `Located approx. 366 yds NW of the Challanger Technology marker.`,
    },
  ],
}
