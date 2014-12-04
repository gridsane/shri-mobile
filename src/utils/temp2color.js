var colors = [
    "519fdd", "56a2dd", "5ba5de", "60a7de", "66aadf", "6bade0", "70afe0",
    "76b2e1", "7bb5e2", "80b7e2", "86bae3", "8bbde3", "90bfe4", "95c2e5",
    "9bc5e5", "a0c7e6", "a0c7e6", "abcde7", "b0cfe8", "b5d2e9", "bbd5e9",
    "c0d7ea", "c5daea", "caddeb", "d0dfec", "d5e2ec", "dae5ed", "e0e7ee",
    "e5eaee", "eaedef", "f0eff0", "f0f0ec", "f1f0e9", "f2f0e6", "f3f1e3",
    "f4f1e0", "f5f2dc", "f5f2d9", "f6f3d6", "f7f3d3", "f8f4d0", "f8f1c8",
    "f9eec0", "f9ebb9", "f9e8b1", "fae5aa", "fae3a3", "fae09c", "fbde96",
    "fbdb8f", "fbd988", "fcd682", "fcd47b", "fcd174", "fdcf6e", "fdcc67",
    "fdca60", "fec759", "fec553", "fec24c", "ffc045"];

module.exports = function (temp) {
    var index = Math.ceil(temp / 2) + 30;

    return "#" + colors[Math.min(60, Math.max(index, 0))];
};
