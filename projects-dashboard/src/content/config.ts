import { defineCollection, z } from "astro:content";

const repoSchema = z.object({
  owner: z.string(),
  name: z.string(),
});

export type Repo = z.infer<typeof repoSchema>;

const languageSchema = z.enum([
  "javascript",
  "typescript",
  "kotlin",
  "swift",
  "rust",
  "go",
  "java",
  "python",
  "rust",
]);

export type Language = z.infer<typeof languageSchema>;

const artifactTypeSchema = z.enum(["npm", "maven", "reference-docs"]);

export type ArtifactType = z.infer<typeof artifactTypeSchema>;

const artifactSchema = z.object({
  type: artifactTypeSchema,
  value: z.string(),
});

export type Artifact = z.infer<typeof artifactSchema>;
const packageSchema = z.object({
  packageName: z.string(),
  repoPath: z.string().optional(),
  language: languageSchema,
  artifacts: z.array(artifactSchema),
  ghTagFilter: z.string().optional(),
});

const badgeTypeSchema = z.enum([
  "github-actions",
  "github-license",
  "github-tag",
  "fossa-license",
  "fossa-security",
  "ossf",
  "codecov",
  "tbd-vectors",
  "npm",
  "maven",
  "reference-docs",
]);

export type BadgeType = z.infer<typeof badgeTypeSchema>;
const badgeSchema = z.object({
  type: badgeTypeSchema,
  label: z.string().optional(),
  value: z.string().optional(),
});

export type Badge = z.infer<typeof badgeSchema>;

const projectSchema = z.object({
  repo: repoSchema,
  description: z.string().optional(),
  title: z.string().optional(),
  packages: z.array(packageSchema).optional(),
  ciChecks: z.array(badgeSchema).optional(),
  licenses: z.array(badgeSchema).optional(),
  securityScans: z.array(badgeSchema).optional(),
  scoreCards: z.array(badgeSchema).optional(),
  sastChecks: z.array(badgeSchema).optional(),
  tests: z.array(badgeSchema).optional(),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = { project: projectsCollection };
