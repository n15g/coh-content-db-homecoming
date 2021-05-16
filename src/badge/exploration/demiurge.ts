import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheChantry} from "../../map/the-chantry";

export const Demiurge: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "demiurge",
    setTitleId: 1820,
    names: [{value: "Demiurge"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheChantry.key,
    location: [0.0, 2677.0, -4.0],
    badgeText: [{
        value: "At last you have arrived." +
            " Every challenge faced you have cast down with blood and sweat, never once succumbing to despair or defeat." +
            " The Shadow Shard has tested you countless times and each time you have triumphed." +
            " No mind games or violations to your person could prevent you from reaching this point and now you stand at the pinnacle of the Chantry," +
            " the lord of this realm in spirit, if not in actuality."
    }],
    notes: "Located in [map:the-chantry] at The Chantry marker, directly atop the Chantry itself.",
    links: [
        {title: "Demiurge Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Demiurge_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
