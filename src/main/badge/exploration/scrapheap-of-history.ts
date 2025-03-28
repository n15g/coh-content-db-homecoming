import { BadgeData } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'

export const ScrapheapOfHistory: BadgeData = {
  type: 'EXPLORATION',
  key: 'scrapheap-of-history',
  setTitle: { id: 1839 },
  name: [{ value: 'Scrapheap of History' }],
  alignment: ['H'],
  zoneKey: TerraVolta.key,
  loc: [-1588, 188, -2299],
  badgeText: [{
    value: `Here lie the ruins of the Number 6 Titration Plant, the first of a new design meant to streamline the process of fuel waste reconstitution.
It was hoped that the new plant design would improve waste recapture efforts by over 13%.
Unfortunately the shiny new installation was too tempting a target for the Freakshow, who saw the effective reuse of fuel waste as somehow offensive.
They brought the plant down with a concentrated assault that took the city workers completely by surprise.
Since its destruction, that new technique the Number 6 plant was designed to test has since been abandoned in favor of a newer, more efficient recapture method.`,
  }],
  notes: `194 yards SSW of the Carter Engineering marker, between two destroyed walls in the southeast corner of the zone.`,
  links: [
    { title: 'Scrapheap of History Badge', href: 'https://homecoming.wiki/wiki/Scrapheap_of_History_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '6',
}
