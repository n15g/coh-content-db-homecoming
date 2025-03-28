import { BadgeData, zoneLink } from 'coh-content-db'
import { TheChantry } from '../../zone/the-chantry'

export const Dispossessed: BadgeData = {
  type: 'EXPLORATION',
  key: 'dispossessed',
  setTitle: { id: 1818 },
  name: [{ value: 'Dispossessed' }],
  alignment: ['H'],
  zoneKey: TheChantry.key,
  loc: [4612, 761, 3399],
  badgeText: [{
    value: 'Your life as a hero takes up so much of your time.'
      + ' Hours day and night patrolling the streets of Paragon City, casting down one villain after the next in your quest for glory and influence.'
      + ' Can nothing else in life command such devotion?'
      + ' The words of loved ones drowned out by the clamor of explosions and blasts of energy, the invitations of friends forgotten the moment a new crisis arises,'
      + ' competing interests shelved in preference for an assault upon just one more arch-villain\'s stronghold.'
      + ' Before you know it life has passed you by and moved on without you. Your loved ones have kindled romances with another.'
      + ' Your friends have crossed you off of their invite lists. Do you even remember what it was like before you became a hero?',
  }],
  notes: `Located in ${zoneLink(TheChantry)} 362 yards WNW from the Bastion of Regret marker, under the floating rock with the circling tablets.`,
  links: [
    { title: 'Dispossessed Badge', href: 'https://homecoming.wiki/wiki/Dispossessed_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '6',
}
