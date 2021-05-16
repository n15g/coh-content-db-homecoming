import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {TheStormPalace} from "../../map/the-storm-palace";

export const LordOfStorms: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "lord-of-storms",
    setTitleId: 1861,
    names: [
        {type: Alternate.M, value: "Lord of Storms"},
        {type: Alternate.F, value: "Lady of Storms"}
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: TheStormPalace.key,
    location: [1.0, 3637.0, -3.0],
    badgeText: [{
        value: `Now you stand upon the apex of the Storm Palace, at the center of a vortex of destiny and mystical energy.
So few have come as far, so many have fallen in the attempt that you deserve to be recognized as a master, of a sort, of this distant and inhospitable place.
By now, words of your deeds have spread to even Rularuu itself and the threat you and your fellows represent should be apparent.
Go now and strike the final blow that will confirm, once and for all, that the defenders of Primal Earth are not to be trifled with.`
    }],
    notes: `Located in [map:${TheStormPalace.key}] at the Storm Palace marker, at the highest point atop the Palace itself.`,
    links: [
        {title: "Lord of Storms Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Lord_of_Storms_Badge"},
        {title: "Lady of Storms Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Lady_of_Storms_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
