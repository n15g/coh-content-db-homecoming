import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Croatoa} from "../../map/croatoa";

export const BarrierHolder: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "barrier-holder",
    setTitleId: 1540,
    names: [{value: "Barrier Holder"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Croatoa.key,
    location: [386.0, 0.0, 1689.0],
    badgeText: [{
        value: "Croatoa's own little Stonehenge has been the site of several battles against the supernatural powers who seek to consume this small town." +
            " Each attack has been foiled, though nearby residents still can't help but look at this site with some uneasiness."
    }],
    notes: "Located in the Salamanca neighborhood of [map:croatoa].\n" +
        "\n" +
        "It is in the middle of a small pond 135 yards west of the neighborhood marker.",
    links: [
        {title: "Barrier Holder Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Barrier_Holder_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "4"
};
