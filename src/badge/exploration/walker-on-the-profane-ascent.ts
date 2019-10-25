import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {DarkAstoria} from "../../map/dark-astoria";

export const WalkerOnTheProfaneAscent: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "walker-on-the-profane-ascent",
    setTitleId: 2183,
    names: [{value: "Walker on the Profane Ascent"}],
    alignment: ALIGNMENT_ANY,
    mapKey: DarkAstoria.key,
    location: [2829.0, 193.0, 793.0],
    badgeText: [{
        value: `This was once Moth Cemetery, the hallowed ground within which Mot was sealed.
As Mot's titanic will battered against the bonds that have held it for centuries, the very soil of the cemetery has roiled in revolt at the emerging presence of this vile behemoth.
The seismic devastation of its passing causes the terrain to bloat, crack and surge skyward as it struggles to stand from below the ensnaring earthen edifice.
As appropriate offerings to the all-consuming manifestation of Death, the vainglorious memorials have been churned down into the earth, pulverized against its corrupting flesh,
 as it twists and writhes to free himself; Mot abides no vanity but its own.`
    }],
    notes: `Located in [map:${DarkAstoria.key}] in the Moth Cemetery neighborhood, 516 yards west-northwest of the Moth marker, between the two mausoleums at the end of the ridge.`,
    links: [
        {title: "Walker on the Profane Ascent Badge", href: "https://paragonwiki.com/wiki/Walker_on_the_Profane_Ascent_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
