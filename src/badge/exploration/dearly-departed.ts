import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {FirstWard} from "../../map/first-ward";

export const DearlyDeparted: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dearly-departed",
    setTitleId: 2048,
    names: [{value: "Dearly Departed"}],
    alignment: ALIGNMENT_ANY,
    mapKey: FirstWard.key,
    location: [-2188.0, 77.0, 486.0],
    badgeText: [{
        value: `When the Devouring Earth struck First Ward the attack came suddenly and without warning.
Thousands lost their lives on that terrible day.
Though they knew they would likely never return to First Ward, the survivors laid the victims to rest in the Mercyview Cemetery believing the dead would wish to be close to
the city they helped build.
The survivors believed too that one day they would return and reclaim First Ward in the name of the fallen.`
    }],
    notes: `Located in [map:${FirstWard.key}] 83 yards NNE of the map marker; at the base of a small mausoleum..
It is on the west side of the eastern-most island of Lock of Torment.`,
    links: [
        {title: "Dearly Departed Badge", href: "https://paragonwiki.com/wiki/Dearly_Departed_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "1"
};
