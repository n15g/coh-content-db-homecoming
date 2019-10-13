import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";

export const TheSleeperBelow: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-sleeper-below",
    names: [{value: "The Sleeper Below"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoDarkAstoria.key,
    location: [1431.0, -77.0, 673.0],
    badgeText: [{
        value: "Behold the God Mot, roused from His slumber!" +
            " Behold the power of his faithful adherents, their prayers strong enough to stir Him from His dreaming!" +
            " Behold the crucible of undoing, the maw through which all life shall soon pass so that all shall be unmade;" +
            " an end to life, an end to hope, an end to all that respires in this corrupt and fallen world!"
    }],
    notes: "Located in [map:echo-dark-astoria] 212 yards north of the Moth Cemetery marker, near the base of the ramp beneath the ziggurat.\n" +
        "\n" +
        "You'll find the entrance to the ramp on the south-west side, in the deep trench surrounding the ziggurat, at (1470.1, -80.0, 851.7).",
    links: [
        {title: "The Sleeper Below Badge", href: "https://paragonwiki.com/wiki/The_Sleeper_Below_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
