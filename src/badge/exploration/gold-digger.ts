import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";

export const GoldDigger: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "gold-digger",
    setTitleId: 1630,
    names: [{value: "Gold Digger"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ImperialCity.key,
    location: [280.0, 28.0, -2288.0],
    badgeText: [{
        value: "In Aureas, ground is being broken on new office towers to support Praetoria's ever burgeoning economy." +
            " Witness the tireless Clockwork who labor continuously to bring the dream of Praetoria to life."
    }],
    notes: "Located in [map:imperial-city] on top of a building under construction 460 yards N of the Aureas marker.",
    links: [
        {title: "Gold Digger Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Gold_Digger_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "1"
};
