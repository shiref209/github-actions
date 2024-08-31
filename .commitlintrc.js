module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ["#"],
    },
  },
  rules: {
    "references-empty": [2, "never"], // Validate for issue/ticket numbers
    "subject-case": [2, "always", ["lower-case"]],
    "scope-enum": [
      2,
      "always",
      ["wip", "configs", "formatting", "code", "deployment", "tests"],
    ],
  },
};
