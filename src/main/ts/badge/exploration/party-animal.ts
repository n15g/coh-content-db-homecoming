import { BadgeData, zoneLink } from 'coh-content-db'
import { PocketD } from '../../zone/pocket-d'
import { Studio55 } from '../../zone/studio-55'
import { ParagonDanceParty } from '../../zone/paragon-dance-party'

export const PartyAnimal: BadgeData = {
  type: 'exploration',
  key: 'party-animal',
  setTitleId: [2522],
  name: 'Party Animal',
  morality: 'paragon-city-access',
  badgeText: `You've always sought out the biggest parties, where you're certain to make a splash, and now you've become truly unparalleled.
Having been to dance clubs from entirely different dimensions you are, without any doubt, a Party Animal.`,
  acquisition: `Visit ${zoneLink(PocketD)}, ${zoneLink(Studio55)}, and ${zoneLink(ParagonDanceParty)}.`,
  links: [
    { title: 'Party Animal Badge', href: 'https://homecoming.wiki/wiki/Party_Animal_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'pd', type: 'task', notes: `Visit ${zoneLink(PocketD)}.` },
    { key: 's55', type: 'task', notes: `Visit ${zoneLink(Studio55)}.` },
    { key: 'pdp', type: 'task', notes: `Visit ${zoneLink(ParagonDanceParty)}.` },
  ],
}
