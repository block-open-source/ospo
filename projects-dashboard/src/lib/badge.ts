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
  value: string,
  label: string
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

export function getBadgeInfo(
  repo: Repo,
  type: string,
  label?: string,
  value?: string
): [string, string] {
  switch (type) {
    case "github-actions":
      return getGithubActionsBadge(repo, value ?? "ci.yml", label ?? "gh");
    case "github-license":
      return getGithubLicenseBadge(repo);
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
    default:
      return [
        getDefaultBadgeSource(type, label ?? "badge", value ?? "value"),
        "",
      ];
  }
}
