module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "refactor",
        "test",
        "chore",
        "build",
        "ci",
        "style",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      ["component", "feature", "api", "ui", "fix", "chore", "build"],
    ],
    "subject-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never"],
    "body-max-line-length": [2, "always", 80],
    "body-empty": [2, "never"],
    "footer-max-line-length": [2, "always", 80],
    "header-max-line-length": [2, "always", 80],
  },
};
