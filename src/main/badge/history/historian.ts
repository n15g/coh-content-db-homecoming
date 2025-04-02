import { BadgeData, zoneLink } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'
import { IndependencePort } from '../../zone/independence-port'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'
import { TerraVolta } from '../../zone/terra-volta'

export const Historian: BadgeData = {
  type: 'HISTORY',
  key: 'historian',
  setTitle: { id: 154 },
  name: [
    { value: 'Historian' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history of the U.N. Special Council on Superhuman Activities.` },
  ],
  links: [
    { title: 'Historian Badge', href: 'https://homecoming.wiki/wiki/Historian_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  requirements: [
    {
      key: 'hist-0',
      type: 'PLAQUE',
      zoneKey: TalosIsland.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-1528, 168, 7554],
      plaqueInscription: `After the devastating 1999 terrorist attack on the Midnight Squad, Rebecca Foss spoke here in favor of the creation of a United Nations Special Council on Super Human Activities. She said, 'Paragon City has suffered a great loss. Someone must step up to take the reins. Hero Corps puts its faith firmly in the proposed U.N. council, and pledges to support all its actions.'`,
      notes: `This plaque is in ${zoneLink(TalosIsland)}, 226 yards East of the Paragon City Monorail marker.`,
      vidiotMapKey: '4',
    },
    {
      key: 'hist-1',
      type: 'PLAQUE',
      zoneKey: IndependencePort.key,
      plaqueType: 'MONUMENT',
      loc: [-1080, 6, 2312],
      plaqueInscription: `In January 2000, a ceremony was held at this site to celebrate the creation of the United Nations Special Council on Super Human Activities. Among the attendees was the Freedom Phalanx's Statesman, who said, 'The world has become too large for me to watch over alone. I am happy to welcome the United Nations to the battle.'`,
      notes: `This plaque is in ${zoneLink(IndependencePort)}, located on the southeast rock outcropping of Power Island. It's 742 yards from the Justice Quay marker and 843 yards southeast from the Terra Volta marker.`,
      vidiotMapKey: '4',
    },
    {
      key: 'hist-2',
      type: 'PLAQUE',
      zoneKey: EchoDarkAstoria.key,
      plaqueType: 'MONUMENT',
      loc: [2493, 92, 486],
      plaqueInscription: `This tomb houses the remains of several members of the Midnight Squad, who were murdered during a sneak attack on their secret Terra Volta facility. It was this action that prompted the creation of the United Nations Special Council on Super Human Activities.`,
      notes: `This plaque is in ${zoneLink(EchoDarkAstoria)}, approximately 456 yds NW of Moth marker and 586 NE of Barca Plaza marker.`,
      vidiotMapKey: '4',
    },
    {
      key: 'hist-3',
      type: 'PLAQUE',
      zoneKey: TerraVolta.key,
      plaqueType: 'MONUMENT',
      loc: [2875, 100, -3972],
      plaqueInscription: `In the late 1990's, super-powered mercenary groups had become active all over the world. The situation had clearly gotten out of hand, but it was a mercenary activity right here in Paragon City that spurred the creation of the U.N. Special Council on Super Human Activities. Late one night in September of 1999, 6 super-powered mercenaries slipped into this factory complex and made off with several canisters of lethal gas, a byproduct of the factory's machinery. The Freedom Phalanx bested several of the mercenaries, but they were too late to stop one fo the villains from getting away with the gas. Aghast, the city waited and watched. Something bad was about to happen. But nobody knew what.`,
      notes: `This plaque is in ${zoneLink(TerraVolta)}, approximately 156 yds East of Rogers Industries marker along fence south side of road.`,
      vidiotMapKey: '3',
    },
    {
      key: 'hist-4',
      type: 'PLAQUE',
      zoneKey: TerraVolta.key,
      plaqueType: 'MONUMENT',
      loc: [-636, 5, -6188],
      plaqueInscription: `In the late 1990's, super-powered mercenary groups had become active all over the world. The situation had clearly gotten out of hand, but it was a mercenary activity right here in Paragon City that spurred the creation of the U.N. Special Council of Super Human Activities. In September 1999, super-powered mercenaries stole poisonous gas from a Terra Volta factory. Days later, they struck. They attacked the complex that once rested on this site, gassing the people within. When the Freedom Phalanx investigated, it was discovered that the facility had been a front for an undercover Midnight Squad operation. Several of the Squad's more secretive researchers had been living in this facilty, under the belief that this subterfuge would keep them safe. Forty-seven men and women died in the attack; to this day, no one knows who the perpetrators were.`,
      notes: `This plaque is in ${zoneLink(TerraVolta)}, approximately 366 yds NW of Challanger Technology marker.`,
      vidiotMapKey: '4',
    },
  ],
}
