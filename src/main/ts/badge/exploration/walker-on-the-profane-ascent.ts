import { BadgeData } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const WalkerOnTheProfaneAscent: BadgeData = {
  type: 'exploration',
  key: 'walker-on-the-profane-ascent',
  setTitleId: [2183],
  name: 'Walker on the Profane Ascent',
  morality: 'all',
  badgeText: `
This was once Moth Cemetery, the hallowed ground within which Mot was sealed.
As Mot's titanic will battered against the bonds that have held it for centuries, the very soil of the cemetery has roiled in revolt at the emerging presence of this vile behemoth.
The seismic devastation of its passing causes the terrain to bloat, crack and surge skyward as it struggles to stand from below the ensnaring earthen edifice.
As appropriate offerings to the all-consuming manifestation of Death, the vainglorious memorials have been churned down into the earth, pulverized against its corrupting flesh,
as it twists and writhes to free himself; Mot abides no vanity but its own.`,
  notes: `Located in the Moth Cemetery neighborhood, 516 yards west-northwest of the Moth marker, between the two mausoleums at the end of the ridge.`,
  links: [
    { title: 'Walker on the Profane Ascent Badge', href: 'https://homecoming.wiki/wiki/Walker_on_the_Profane_Ascent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: DarkAstoria.key, coords: [2829, 193, 793], icon: 'badge', iconText: '5' } },
  ],
}
