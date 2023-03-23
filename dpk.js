const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  // Determine candidate partition key
  let candidate;
  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else if (event) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  // Ensure candidate partition key is a string
  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  // Handle trivial and long partition keys
  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  } else if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};

