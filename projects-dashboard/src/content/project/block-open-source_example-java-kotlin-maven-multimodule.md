---
repo:
  owner: "block-open-source"
  name: "example-java-kotlin-maven-multimodule"
description: "Example to bootstrap new Java Kotlin Maven Projects"
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
scoreCards:
  - type: "ossf"
sastChecks:
  - type: "github-actions"
    label: "CodeQL"
    value: "codeql.yml"
tests:
  - type: "codecov"
---
