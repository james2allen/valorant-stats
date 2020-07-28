import { isValidId } from "./Validation";

describe("Searchbox validation component", () => {
  test("it validates that Riot IDs in the correct format return truthy", () => {
    expect(isValidId("newName#NA1")).toBeTruthy();
    expect(isValidId("new Name#2345")).toBeTruthy();
  });

  test("it validates that Riot IDs with incorrect formats return falsy", () => {
    expect(isValidId("newName1")).toBeFalsy();
    expect(isValidId("#")).toBeFalsy();
    expect(isValidId("#sdf")).toBeFalsy();
    expect(isValidId("name ##1")).toBeFalsy();
    expect(isValidId("newName#23423SDF JSDBF")).toBeFalsy();
  });
});
