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
packages:
  - packageName: "java-kotlin-maven-example-api"
    repoPath: "api"
    language: "java"
    artifacts:
      - type: "maven"
        value: "xyz.block/java-kotlin-maven-example-api"
  - packageName: "java-kotlin-maven-example-impl"
    repoPath: "impl"
    language: "java"
    artifacts:
      - type: "maven"
        value: "xyz.block/java-kotlin-maven-example-impl"
  - packageName: "java-kotlin-maven-example-parent"
    language: "java"
    artifacts:
      - type: "maven"
        value: "xyz.block/java-kotlin-maven-example-parent"
---
