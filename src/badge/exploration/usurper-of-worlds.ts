import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CascadeArchipelago} from "../../map/cascade-archipelago";

export const UsurperOfWorlds: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "usurper-of-worlds",
    setTitleId: 1810,
    names: [{value: "Usurper of Worlds"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CascadeArchipelago.key,
    location: [946.0, 4833.0, -6690.0],
    badgeText: [{
        value: "The briefing listed this area as \"Tyrant's Rock,\" though you are not sure why." +
            " Perhaps it is the growing sense of duty and entitlement that fills your chest with unbidden pride." +
            " You cast your gaze across this shattered landscape and are struck by a sudden feeling that it is yours, by might or by right." +
            " Your heart thuds with a martial drumbeat and you nod at the truth of it—yes, it could all be yours." +
            " You will find the one who rules this land and take their throne by force." +
            " But you shake off this irrational notion and the realization of where you are slaps you in the face." +
            " These thoughts are a trap meant to distract you from your real purpose here."
    }],
    notes: "Located in [map:cascade-archipelago] 134 yards NW of the Tyrant's Rock marker, in the NW section of the island.",
    links: [
        {title: "Usurper of Worlds Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Usurper_of_Worlds_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
