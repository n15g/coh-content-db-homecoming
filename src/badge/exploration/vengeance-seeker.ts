import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {FirstWard} from "../../map/first-ward";

export const VengeanceSeeker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "vengeance-seeker",
    setTitleId: 2054,
    names: [{value: "Vengeance Seeker"}],
    alignment: ALIGNMENT_ANY,
    mapKey: FirstWard.key,
    location: [1444.0, 219.0, 3459.0],
    badgeText: [{
        value: `You stand in the domain of the Talons of Vengeance, the elemental nature of their ancient anger permeates the very air.
Somewhere deep beneath your feet lurks the source of their power and agency on this world; you can feel it flow through you, but you're here to turn that vengeance back on its source.
The Talons must be stopped, they must be punished for their actions, and you shall be the instrument of that vengeance.`
    }],
    notes: `Located in [map:${FirstWard.key}] in the Forbidden Crags neighborhood, 149 yards southwest of the map marker atop a large hill.`,
    links: [
        {title: "Vengeance Seeker Badge", href: "https://paragonwiki.com/wiki/Vengeance_Seeker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "7"
};
