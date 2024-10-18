import type { BadgeType } from "../content/config";

interface Repo {
  owner: string;
  name: string;
}

function getDefaultBadgeSource(
  type: string,
  label: string,
  value: string
): string {
  return `https://img.shields.io/${type}/${label}-${value}-purple?style=flat-square`;
}

function getGithubActionsBadge(
  repo: Repo,
  value = "ci.yml",
  label = "ci"
): [string, string] {
  const badgeSrc = `https://img.shields.io/github/actions/workflow/status/${repo.owner}/${repo.name}/${value}?style=flat-square&branch=main&logo=github&label=${label}&logoColor=FFFFFF`;
  const href = `https://github.com/${repo.owner}/${repo.name}/actions/workflows/${value}`;
  return [badgeSrc, href];
}

function getGithubLicenseBadge(repo: Repo): [string, string] {
  const badgeSrc = `https://img.shields.io/github/license/${repo.owner}/${repo.name}?style=flat-square&logo=github&color=4c1&label=gh`;
  const href = `https://github.com/${repo.owner}/${repo.name}/blob/main/LICENSE`;
  return [badgeSrc, href];
}

function getGithubTagBadge(repo: Repo, value?: string): [string, string] {
  let badgeSrc = `https://img.shields.io/github/v/release/${repo.owner}/${repo.name}?logo=github&label=tag&style=flat-square&color=4c1`;
  if (value) {
    badgeSrc += `&filter=${value}`;
  }
  const href = `https://github.com/${repo.owner}/${repo.name}/releases`;
  return [badgeSrc, href];
}

function getFossaBadge(repo: Repo, issueType: string): [string, string] {
  const badgeSrc = `https://app.fossa.com/api/projects/custom%2B588%2Fgithub.com%2F${repo.owner}%2F${repo.name}.svg?type=shield&issueType=${issueType}`;
  const href = `https://app.fossa.com/projects/custom%2B588%2Fgithub.com%2F${repo.owner}%2F${repo.name}?ref=badge_shield&issueType=${issueType}`;
  return [badgeSrc, href];
}

function getOssfBadge(repo: Repo): [string, string] {
  const badgeSrc = `https://img.shields.io/ossf-scorecard/github.com/${repo.owner}/${repo.name}?label=ossf&style=flat-square`;
  const href = `https://securityscorecards.dev/viewer/?uri=github.com/${repo.owner}/${repo.name}`;
  return [badgeSrc, href];
}

function getCodecovBadge(repo: Repo): [string, string] {
  const badgeSrc = `https://img.shields.io/codecov/c/gh/${repo.owner}/${repo.name}/main?label=codecov&style=flat-square&token=YI87CKF1LI`;
  const href = `https://codecov.io/github/${repo.owner}/${repo.name}`;
  return [badgeSrc, href];
}

function getTbdVectorsBadge(repo: Repo): [string, string] {
  const badgeSrc = `https://tbd54566975.github.io/sdk-report-runner/${repo.name}.svg`;
  const href = "https://tbd54566975.github.io/sdk-report-runner/";
  return [badgeSrc, href];
}

function getNpmBadge(value?: string): [string, string] {
  if (!value) {
    throw new Error("NPM package artifact value is required for badge");
  }
  const badgeSrc = `https://img.shields.io/npm/v/${value}.svg?style=flat-square&logo=npm&label=npm ${value}&logoColor=FFFFFF&color=4c1`;
  const href = `https://www.npmjs.com/package/${value}`;
  return [badgeSrc, href];
}

function getMavenBadge(value?: string): [string, string] {
  if (!value) {
    throw new Error("Maven package artifact value is required for badge");
  }
  const artifactName = value.split("/")[1];
  const badgeSrc = `https://img.shields.io/maven-central/v/${value}?color=b07219&label=mvn ${artifactName}&logo=apachemaven&style=flat-square`
  const href = `https://central.sonatype.com/artifact/${value}`;
  return [badgeSrc, href];
}

function getReferenceDocsBadge(value?: string): [string, string] {
  if (!value) {
    throw new Error("Reference docs URL is required for badge");
  }
  const badgeSrc = `https://img.shields.io/badge/API Reference Docs-purple?style=flat-square`;
  const href = value;
  return [badgeSrc, href];
}

export function getBadgeInfo(
  repo: Repo,
  type: BadgeType,
  label?: string,
  value?: string
): [string, string] {
  switch (type) {
    case "github-actions":
      return getGithubActionsBadge(repo, value, label);
    case "github-license":
      return getGithubLicenseBadge(repo);
    case "github-tag":
      return getGithubTagBadge(repo, value);
    case "fossa-license":
      return getFossaBadge(repo, "license");
    case "fossa-security":
      return getFossaBadge(repo, "security");
    case "ossf":
      return getOssfBadge(repo);
    case "codecov":
      return getCodecovBadge(repo);
    case "tbd-vectors":
      return getTbdVectorsBadge(repo);
    case "npm":
      return getNpmBadge(value);
    case "maven":
      return getMavenBadge(value);
    case "reference-docs":
      return getReferenceDocsBadge(value);
    default:
      return [
        getDefaultBadgeSource(type, label ?? "badge", value ?? "value"),
        "",
      ];
  }
}
