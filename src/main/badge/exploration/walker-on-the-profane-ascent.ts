import { BadgeData, mapLink } from 'coh-content-db'
import { DarkAstoria } from '../../map/dark-astoria'

export const WalkerOnTheProfaneAscent: BadgeData = {
  type: 'EXPLORATION',
  key: 'walker-on-the-profane-ascent',
  setTitle: { id: 2183 },
  name: [{ value: 'Walker on the Profane Ascent' }],
  alignment: ['H', 'V', 'P'],
  mapKey: DarkAstoria.key,
  loc: [2829, 193, 793],
  badgeText: [{
    value: `This was once Moth Cemetery, the hallowed ground within which Mot was sealed.
            As Mot's titanic will battered against the bonds that have held it for centuries, the very soil of the cemetery has roiled in revolt at the emerging presence of this vile behemoth.
            The seismic devastation of its passing causes the terrain to bloat, crack and surge skyward as it struggles to stand from below the ensnaring earthen edifice.
            As appropriate offerings to the all-consuming manifestation of Death, the vainglorious memorials have been churned down into the earth, pulverized against its corrupting flesh,
            as it twists and writhes to free himself; Mot abides no vanity but its own.`,
  }],
  notes: `Located in ${mapLink(DarkAstoria)} in the Moth Cemetery neighborhood, 516 yards west-northwest of the Moth marker, between the two mausoleums at the end of the ridge.`,
  links: [
    { title: 'Walker on the Profane Ascent Badge', href: 'https://homecoming.wiki/wiki/Walker_on_the_Profane_Ascent_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
