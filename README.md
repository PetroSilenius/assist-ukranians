# Assist Ukrainians 🇺🇦

This is a site for getting information on how to give help to Ukrainians or seek help as a person affected by the war.

The site crowdsources managing listed causes, translating the site and developing it further.

![A screenshot of the assistukranians site showing list of resources for giving help](https://i.imgur.com/l3B2hZql.png)

## Crowdsourcing 👥

The project relies on the community to maintain the project and develop it further. You can take part here in Github, by sharing the site or if you want to be more involved you can contact the maintainers✌🏻

The easiest way to take action is to vote on the most valuable causes straight in the site. Other options are suggesting new causes through Google Forms or Pull Request or providing new translations.

The context and plans of the site are explained in [the Figjam file](https://www.figma.com/file/iOKKfVYC4YMgrUfDyewCYN/Assist-Ukrainians) which is used for collaborating on the project. The Figjam file is open for comments!

### Adding a new cause to the site

All new causes are reviewed by a maintainer to provide a credible experience for all users.

#### Google Forms

Suggest a new cause by submitting [a Google Forms](https://forms.gle/1Uy4vwChDVUeRpSx6). The Forms submissions are reviewed regularly by maintainers. You can see and comment all submissions at [Google Sheets](https://docs.google.com/spreadsheets/d/1b-25e61JefrkBG99KtdgbnbH9fcbPlcoDtigu2R7QAs/edit?usp=sharing).

#### Pull request

Add a new object to either [give_causes.json](data/give_causes.json) or [seek_causes.json](data/seek_causes.json) depending on who the cause is meant for.

`nameId` is used in translation files for defining that causes name. `descriptionId` is used to define a one or two sentence explanation of the cause. `link` is a direct link to the cause.

Add translations for the cause `nameId` and `descriptionId` by adding text content for each present translation file in [lang](lang) folder.

### Adding a new language to the site

Add a new locale to [next.config.js](next.config.js). The locale format [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) should be used.

Add a `json` file with the name of the locale to [lang](lang). Copy the `json` content from [en.json](lang/en.json) and translate the text content for the new language.

The reaction counts are stored in Firebase [Firestore Database](https://cloud.google.com/firestore). The reactions are prefetched on server and refetched in the browser once a change to the database occurs.

## Tech Stack 💻

The application is built with [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/) and [Next.js](https://nextjs.org/).

The user interface of the application is styled using [tailwindcss](https://tailwindcss.com/).

The data is stored in json files under [data](data) and [lang](lang). This allows saving the data in a transparent way compared to a CMS or database. It also allows collaboration on those data sources without much prerequisites.

## How to run

### Installation

Clone the repository

```bash
  git clone https://github.com/PetroSilenius/assist-ukrainians
```

Change to the project directory

```bash
  cd assist-ukrainians
```

### Application

Install project dependencies based on lockfile

```bash
  npm ci
```

Run the development server

```bash
  npm run dev
```

Open http://localhost:3000 with your browser to see the result.

### Linting

Run linter on all files

```bash
  npm run lint
```
