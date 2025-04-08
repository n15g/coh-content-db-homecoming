import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const ScrapheapOfHistory: BadgeData = {
  type: 'exploration',
  key: 'scrapheap-of-history',
  setTitleId: [1839],
  name: 'Scrapheap of History',
  morality: 'paragon-city-access',
  badgeText: `Here lie the ruins of the Number 6 Titration Plant, the first of a new design meant to streamline the process of fuel waste reconstitution.
It was hoped that the new plant design would improve waste recapture efforts by over 13%.
Unfortunately the shiny new installation was too tempting a target for the Freakshow, who saw the effective reuse of fuel waste as somehow offensive.
They brought the plant down with a concentrated assault that took the city workers completely by surprise.
Since its destruction, that new technique the Number 6 plant was designed to test has since been abandoned in favor of a newer, more efficient recapture method.`,
  notes: `Located 194 yards SSW of the Carter Engineering marker, between two destroyed walls in the southeast corner of the zone.`,
  links: [
    { title: 'Scrapheap of History Badge', href: 'https://homecoming.wiki/wiki/Scrapheap_of_History_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TerraVolta.key, coords: [-1588, 188, -2299] }, vidiotMapKey: '6' },
  ],
}
