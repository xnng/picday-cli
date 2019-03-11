# Picday-cli 

![npm](https://img.shields.io/npm/v/picday-cli.svg)
![plateform](https://img.shields.io/badge/palteform-win%2010%20%7C%20linux%20%7C%20macOS-lightgrey.svg)
![node](https://img.shields.io/badge/node-%3E%3D8.9.0-brightgreen.svg)
![npm](https://img.shields.io/npm/dm/picday-cli.svg?logo=npm)
![GitHub](https://img.shields.io/github/license/xnng/picday-cli.svg?logo=github)

English | [简体中文](./README-zh_CN.md)

>A command line tool based on node. Get and set today's wallpaper from bing.com and Momentum chrome extension. Works on macOS 10.12+, Linux, and Windows 10+.


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

- Change the wallpaper to bing

```bash
$ picday use bing
```

- Change the wallpaper to momentum

```bash
$ picday use momentum
```

- Reset to the original wallpaper

```bash
$ picday reset
```

- Delete today's wallpaper

```bash
$ picday clean
```

- Open wallpapers folder in explorer

```bash
$ picday open
```

## Setting

### Bing wallpaper

Different regions of the today's wallpaper may not be the same, the default region is `zh-cn`.

Find your area code in the table below:

| Area/Code  | Area/Code | Area/Code  |
| :-- | :---- | :---- |
| Argentina (es-ar) | Finland (fi-fi) | Switzerland (fr-ch) |
| United Arab emirates (ar-ae) | South Korea (ko-kr) | Saudi Arabia (ar-sa) |
| Egypt (ar-eg) | Netherlands (nl-nl) | China - Taiwan (zh-tw) |
| Ireland (en-ie) | Canada - French (fr-ca) | Turkey (tr-tr) |
| Austria (de-at) | Canada - English (en-ca) | Spain (en-es) |
| Australia (en-au) | Malaysia (en) | China - Hong Kong (zh-hk) |
| Brazil (pt-br) | America - Spanish (es-us) | Singapore (en-sg) |
| Belgium - French (fr-be) | America - English (en-us) | New Zealand (en-nz) |
| Belgium - Dutch (nl-be) | Mexican (es-mx) | Italian (it-it) |
| Poland (pl-pl), | South Africa (en-za) | India (en-in) |
| Denmark (dk-da) | Norway (nb-no) | Indonesia (en-id) |
| Germany (de-de) | Portugal (pt-pt) | England (en-gb) |
| Russia (ru-ru) | Japan (ja-jp) | Chile (en-cl) |
| France (fr-fr) | Sweden (sv-se) | China (zh-cn) |
| Philippines (en-ph) | Switzerland - German (de-ch) |... |

Then use the command `picday set-area <area-code>` to set it to your own, like this:

```
$ picday set-area en-us
```

After that, don't forget to run `picday clean` to remove old wallpapers and obtain a new.

### Momentum wallpaper

You may find that your momentum wallpaper is different from the chrome extension. Because everyone's `client_uuid` is different. So you need to set your own `client_uuid`.

Open chrome's new tab and console, enter `localStorage.client_uuid`, then just paste your `client_uuid` into the following command:

```bash
$ picday set-id client_uuid
```

<p align="center">
    <img alt="Momentum setting" src="https://user-images.githubusercontent.com/38936252/54081842-9ea69600-4346-11e9-97e9-4e17c106c6e5.png" width="750">
</p>

After that, don't forget to run `picday clean` to remove old wallpapers and obtain a new.

## License

MIT