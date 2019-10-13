import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {DarkAstoria} from "../../map/dark-astoria";

export const OfThingsUnclean: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "of-things-unclean",
    names: [{value: "Of Things Unclean"}],
    alignment: ALIGNMENT_ANY,
    mapKey: DarkAstoria.key,
    location: [936.0, -1.0, 4321.0],
    badgeText: [{
        value: `The dead have always cavorted through the streets of Dark Astoria, praying and making sacrifice to their mute master, and for good reason.
Even after its fall, Mot's shadow has terrorized the dreams of mankind through all of history, for it is the embodiment of all that is unnatural and vile; death most unclean.`
    }],
    notes: `Located in [map:${DarkAstoria.key}], in the Dido's View neighborhood, 324 yards SE of the Dido's View marker.`,
    links: [
        {title: "Of Things Unclean Badge", href: "https://paragonwiki.com/wiki/Of_Things_Unclean_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
