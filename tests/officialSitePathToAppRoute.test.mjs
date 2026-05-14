import assert from "node:assert/strict";
import test from "node:test";

import {
  normalizeAppRoute,
  officialSitePathToAppRoute,
} from "../src/lib/officialSitePathToAppRoute.ts";

test("maps official PHP source pages to the intended app routes", () => {
  assert.equal(
    officialSitePathToAppRoute("/about/educational-standards.php"),
    "/about/educational-standarts",
  );
  assert.equal(
    officialSitePathToAppRoute("/about/material-support/dormitory.php"),
    "/about/material-support/dormitory",
  );
  assert.equal(
    officialSitePathToAppRoute("/about/material-support/employment.php"),
    "/about/material-support/employment",
  );
});

test("normalizes PHP suffixes passed as app routes", () => {
  assert.equal(
    normalizeAppRoute("/about/material-support/dormitory.php"),
    "/about/material-support/dormitory",
  );
  assert.equal(
    normalizeAppRoute("/about/material-support/employment.php"),
    "/about/material-support/employment",
  );
});
