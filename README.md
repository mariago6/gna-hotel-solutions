# GNA Hotel Solutions Landing Page

Landing page developed with **Vue 3** and **Vite** as part of a technical test. The project recreates a *responsive* hotel solutions landing page based on a provided design.

## Features

* Responsive landing page layout
* Hero section with dynamic navbar on scroll
* Custom dropdown filter
* Article cards filtered by category
* Reusable Vue components
* Static data separated from UI components
* Responsive styling using relative units
* Unit tests with Vitest and Vue Test Utils

## Tech Stack

* Vue 3
* Vite
* JavaScript
* CSS
* Vitest
* Vue Test Utils
* jsdom

## Project Structure

```txt
src/
├── assets/
│   ├── arrow.svg
│   ├── girona.jpg
│   ├── laptop.jpg
│   ├── meeting.jpg
│   └── logo-gnahs.png
├── components/
│   ├── ArticleCard.vue
│   ├── FilterBar.vue
│   ├── FooterSection.vue
│   ├── HeaderHero.vue
│   └── IntroSection.vue
├── data/
│   ├── articles.js
│   └── filterOptions.js
├── tests/
│   ├── App.spec.js
│   ├── ArticleCard.spec.js
│   ├── FilterBar.spec.js
│   ├── FooterSection.spec.js
│   ├── HeaderHero.spec.js
│   └── IntroSection.spec.js
├── App.vue
├── main.js
└── style.css
```

## Getting Started

### Prerequisites

Make sure you have **Node.js** installed.

Recommended version:

```bash
node -v
```

### Installation

Install project dependencies:

```bash
npm install
```

### Run the project locally

Start the development server:

```bash
npm run dev
```

The app will be available at:

```bash
http://localhost:5173
```

### Build for production

Generate a production build:

```bash
npm run build
```

### Preview production build

Preview the generated production build:

```bash
npm run preview
```

## Running Tests

Run unit tests in watch mode:

```bash
npm run test
```

## Components Overview

### `HeaderHero.vue`

Displays the main hero section with the background image, logo and navigation.
The navbar changes style when the user scrolls down the page.

### `IntroSection.vue`

Displays the main introduction text of the landing page.

### `FilterBar.vue`

Custom dropdown component used to filter the article cards by category.
It emits a `filter-change` event when the selected option changes.

### `ArticleCard.vue`

Reusable card component used to display article image, tags, title, text and link.

### `FooterSection.vue`

Displays the footer logo, navigation links and credits.

## Filtering Logic

The selected filter is managed in `App.vue`.

The dropdown emits an internal filter value:

```js
'all'
'tecnologia'
'marqueting'
```

The article cards use internal tags for filtering:

```js
tags: ['tecnologia']
tags: ['marqueting', 'tecnologia']
```

Visible tag labels are separated from the filtering values:

```js
tagLabels: ['Tecnologia']
tagLabels: ['Màrqueting', 'Tecnologia']
```

This keeps the filtering logic independent from the visible UI text.

## Styling Notes

The CSS is written with responsive design in mind:

* `rem` units are used for spacing and sizing
* `clamp()` is used for fluid typography and responsive spacing
* media queries handle mobile and large screen layouts
* the custom dropdown is styled to match the brand identity

## Accessibility Notes

Some accessibility details included:

* semantic HTML sections
* descriptive image `alt` attributes
* `aria-expanded` and `aria-haspopup` for the custom dropdown
* `focus-visible` styles for keyboard navigation

