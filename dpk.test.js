 const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  test("returns trivial partition key if no event provided", () => {
    expect(deterministicPartitionKey(null)).toBe("0");
  });

  test("returns partition key if provided in event", () => {
    const event = { partitionKey: "my-key" };
    expect(deterministicPartitionKey(event)).toBe("my-key");
  });

  test("returns hash of event as partition key if no partition key provided", () => {
    const event = { id: 123, name: "test" };
    expect(deterministicPartitionKey(event)).toBe(
      "aec12e4735a1865d7d84b61bd007c52888aa7e01b1bbc966fdf5d90df4d0a8cdb1ddfdd1b56dccdfab982cdbdac4b96e97fe806eee5883d0000cfd8712a744c3"
    );
  });

  test("returns truncated hash of long partition key", () => {
    const longKey = "a".repeat(300);
    expect(deterministicPartitionKey({ partitionKey: longKey })).toBe(
      "7350d99d1a20435c283070f3613302edb7027fced163086b048bd3ded530c5cb7a8ced83d1c6fda78f8832c61fb02698d14252c6b4ecf6989b81b04ca99a6302"
    );
  });
});
