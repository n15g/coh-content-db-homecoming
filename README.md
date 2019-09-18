# coh-content-db-homecoming
CoH Content DB - Homecoming data

### Build
`npm run build`

### Deploy
`npm package`

Initialize the database, then load the homecoming data pack:
```
import {CohContentDb} from "coh-content-db";
import {Homecoming, HomecomingBadges} from "coh-content-db-homecoming";

const contentDb = new CohContentDb();
contentDb.load(new Homecoming());
contentDb.load(new HomecomingBadges());
```
