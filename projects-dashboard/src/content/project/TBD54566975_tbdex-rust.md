---
title: "tbDEX Rust"
repo:
  owner: "TBD54566975"
  name: "tbdex-rs"
description: "The tbDEX Rust implementation"
ciChecks:
  - type: "github-actions"
    label: "ci"
    value: "ci.yml"
licenses:
  - type: "github-license"
securityScans:
  - type: "github-actions"
    label: "scan"
    value: "security.yml"
  - type: "fossa-license"
  - type: "fossa-security"
tests:
  - type: "codecov"
packages:
  - packageName: "xyz.block.tbdex"
    repoPath: "packages/common"
    language: "kotlin"
    artifacts:
      - type: "maven"
        value: "xyz.block.tbdex"
      - type: "reference-docs"
        value: "https://tbd54566975.github.io/tbdex-rs/kt/v4.0.0/" # TODO: get version dynamically
---
