import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'

export const InTheirPrime: BadgeData = {
  type: 'exploration',
  key: 'in-their-prime',
  setTitleId: [2450],
  name: 'In Their Prime',
  releaseDate: '2025-06-17',
  morality: 'all',
  badgeText: `Padma Wadkar was not only a brilliant doctor but also moonlit as the heroine 'Brightshield', who selflessly sacrificed herself during the Rikti War to keep a portal open for survivors as long as she could.
Brightshield herself did not use the portal, even as bombs fell and buildings nearby collapsed.
Her body was recovered days later, and her identity was revealed to the public a few weeks afterward.
The new hospital built here is dedicated to her memory`,
  links: [
    { title: 'In Their Prime Badge', href: 'https://homecoming.wiki/wiki/In_Their_Prime_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [6465.4, 50.2, 1732.1], icon: 'badge', iconText: '2' } },
  ],
}
