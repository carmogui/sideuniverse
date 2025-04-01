import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET /api/v1/status", () => {
  describe("anonymous user", () => {
    test("retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");

      expect(response.status).toBe(200);

      const responseBody = await response.json();

      const { updated_at, dependencies } = responseBody;
      const { version, max_connections, opened_connections } =
        dependencies.database;

      const parsedUpdatedAt = new Date(updated_at).toISOString();

      expect(updated_at).toEqual(parsedUpdatedAt);
      expect(version).toEqual("16.0");
      expect(max_connections).toEqual(100);
      expect(opened_connections).toEqual(1);
    });
  });
});
