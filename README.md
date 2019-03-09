# Picday-cli

Get and set today's wallpaper from bing.com and Momentum chrome extension.


<p align="center">
    <img alt="today's wallpaper with Bing" src="https://user-images.githubusercontent.com/38936252/54072130-4b363880-42b1-11e9-80d3-7039635d26bb.gif" width="750">
</p>
<h6 align="center">today's wallpaper with Bing</h6>

<p align="center">
    <img alt="today's wallpaper with Momentum" src="https://user-images.githubusercontent.com/38936252/54072131-4b363880-42b1-11e9-97c6-41a1c03dd304.gif" width="750">
</p>
<h6 align="center">today's wallpaper with Momentum</h6>

## Installation

```bash
$ npm install -g picday-cli
```

## Usage

- change wallpaper to Bing

```bash
$ picday use bing
```

- change wallpaper to momentum

```bash
$ picday use momentum
```

- reset origin wallpaper

```bash
$ picday reset
```

- delete today's wallpaper

```bash
$ picday clean
```

- open wallpaper folder in explorer

```bash
$ picday open
```

## Momentum setting

You may find that your momentum wallpaper is different from the chrome extension. Because everyone's `client_uuid` is different. So you need to set your own `client_uuid`.

Open chrome's new tab and console, enter `localStorage.client_uuid`, then just paste your `client_uuid` into the following command:

```bash
$ picday set client_uuid
```

<p align="center">
    <img alt="Momentum setting" src="https://user-images.githubusercontent.com/38936252/54071888-01981e80-42ae-11e9-88e8-0fb1f7f15f08.png" width="750">
</p>

After than, don't forget to run `picday clean` to remove old wallpapers and retrieve your own.

## License

MIT
