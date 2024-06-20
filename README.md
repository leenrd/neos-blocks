# neos-blocks-ui docs

🌟 A simple ui-blocks library built on components from https://ui.shadcn.com/docs/components

> [!Important]
>
> I'm currently adding more blocks and extend some components from shadcn-ui

### Usage

Import the component you wanna use.

```
import { Navbar } from "neos-blocks";
```

Render it on jsx.

```
<Navbar variant={"sticky"}>Neos</Navbar>
```

That's it! 🥸

### Features

- Tree-shakeable (components you don't use won't be included in your bundle)
- Dark mode support
- Override library styles with your own using tailwindcss or your own css

### Installation

Install the library as a module using NPM

```
npm i neos-blocks
```

Import the following in your app.tsx

```
import 'neos-blocks/dist/style.css'
```

That's it! 🔥, you can now start importing components from the neos-library : [docs links]
