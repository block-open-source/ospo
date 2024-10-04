# Block Open Source Projects Dashboard

It's a static generated dashboard to list our maintained open source projects and their health status.

Visit the [live dashboard](https://block-open-source.github.io/projects-dashboard/).

## Ready to open source your project?

Add your project to the `src/content/projects` directory.

TODO: add description of each field in the config file. For now use one of the existing projects as an example:

- [example-java-kotlin-maven-multimodule](./src/content/project/block-open-source_example-java-kotlin-maven-multimodule.md)
- [tbdex-rs](./src/content/project/TBD54566975_tbdex-rust.md)
- [web5-js](./src/content/project/TBD54566975_web5-js.md)

## Development

Requirements: Node.js 20+ and pnpm

```sh
pnpm i
pnpm dev
```

And to preview the built version that is going to be deployed:

```sh
pnpm build
pnpm preview
```

## Deployment

This project is deployed automatically when a change is merged into the `main` branch.
