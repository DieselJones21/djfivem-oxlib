# Rebel Roleplay ox_lib

Drop-in `ox_lib` **v3.39.0** branded for Rebel Roleplay: black steel panels, chrome script, silver edges, and red accents from the server logo.

This is a modified [Overextended ox_lib](https://github.com/overextended/ox_lib) v3.39.0 build (meets `ox_inventory`'s `3.36.4` requirement). Lua APIs stay the same, so existing menus, progress bars, notifications, and dialogs keep working.

## Install

1. Remove or stop any existing `ox_lib` resource.
2. Clone or copy this repo into `resources` as **`ox_lib`** (the folder name must stay `ox_lib`).
3. Make sure `ensure ox_lib` is in `server.cfg` before resources that import it.
4. Restart the server.

```cfg
ensure ox_lib
```

Optional colour convars (defaults already point at the Rebel palette):

```cfg
setr ox:primaryColor rebel
setr ox:primaryShade 5
```

`rebel` is a custom Mantine palette shipped in this build (`envy` still maps to the same reds). Stock names such as `blue` still work if you want to override it.

## What changed in the UI

Every ox_lib NUI surface is restyled:

- Selection menu
- Context menu
- Notifications
- TextUI
- Linear progress bar
- Circle progress bar
- Skill check
- Radial menu
- Alert dialog
- Input dialog, including text, password, number, checkbox, select, slider, colour, date, time, and textarea fields

## Rebuild the UI

Built files live in `web/build` so the resource runs without extra tooling. To edit the look:

```bash
cd web
pnpm i
pnpm start          # browser preview at http://localhost:3000
pnpm start -- --open # then add ?showcase=1 for a layered demo
pnpm build          # writes web/build for in-game use
```

Open `http://localhost:3000/?showcase=1` for menus, notifications, TextUI, and the linear progress bar. Use the wrench drawer to preview the circle progress, skill check, radial menu, and input/alert dialogs.

## License

LGPL-3.0-or-later. Original copyright remains with Overextended / Community Ox. UI restyle changes are documented in `NOTICE.md`.
