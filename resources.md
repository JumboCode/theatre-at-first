# Resources

## Git
- [Oh Shit, Git!](https://ohshitgit.com/)
- [Learn Git Branching](https://learngitbranching.js.org/)
- [lazygit](https://github.com/jesseduffield/lazygit?tab=readme-ov-file#elevator-pitch)

## React
- [React Reference](https://react.dev/reference/react)
- [React Tutorial](https://react.dev/learn)
- [Next.js Docs](https://nextjs.org/docs)

## NextJS
### App Router
+ [Official Documentation](https://nextjs.org/docs/app/building-your-application/routing) (Can be a little tricky to understand at times)
+ [Amitav's Blurb on Routing (WIP)](https://www.eecs.tufts.edu/~anott01/jumbocode/routing.html)

## CSS
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Tailwind Docs](https://tailwindcss.com/docs/installation)
    - these are good not only just to learn tailwind specifics, but also if you want to
    know more about a CSS property in general.
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
    - Another good place to learn the ins and outs of a given property

## VS Code Extensions
- [Typescript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

The typescript extension provides VS Code the tools it needs to analyze typescript code and
give you accurate type errors (most of you probably already have this installed). ESLint
and Prettier are used to enforce code style/practice, and will make sure all the code in our
codebase follows certain guidelines.

## Installing Node and `npm`
- We are going to use NVM (node version manager) to deal with node installations. You
can get it [here](https://github.com/nvm-sh/nvm#installing-and-updating)
    - after you have run the install script, run `nvm install node` to install the latest
    version of node.
- To manage node packages, we will be using `pnpm`, which you can install by running `npm
i -g pnpm`. `i` is short for install, and the `-g` flag installs it globally rather than
on a per-project basis.
