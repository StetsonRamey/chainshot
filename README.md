# Pool Simple

## Clone it:

`git clone git@github.com:StetsonRamey/chainshot.git`

## Install the deps

`npm i`

## Run the Dev Server

`npm run dev`

## Using Magic.Link

You'll need to get some keys from Magic.  [https://dashboard.magic.link/signup](Create an account) with Magic.  Once you have an account, [https://dashboard.magic.link/](go to your dashboard) and you'll be able to access your Test Public/Private Keys.

Now, copy `.env.local.example` in the root of this directory and rename to `.env.local` (I've got this setup in .gitignore already).

```bash
cp .env.local.example .env.local
```

Then set your variables in `.env.local`
