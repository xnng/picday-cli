# Picday-cli

[English](./README.md) | 简体中文

>一个基于 node 的命令行工具。能从必应或谷歌插件 Momentum 上获取今日壁纸，并将其设置为桌面壁纸。支持 macOS 10.12+, Linux, 和 Windows 10+。


<p align="center">
    <img alt="从必应上获取并设置今日壁纸" src="https://user-images.githubusercontent.com/38936252/54072130-4b363880-42b1-11e9-80d3-7039635d26bb.gif" width="750">
</p>
<h6 align="center">从必应上获取并设置今日壁纸</h6>

<p align="center">
    <img alt="从谷歌插件 Momentum 上获取并设置今日壁纸" src="https://user-images.githubusercontent.com/38936252/54072131-4b363880-42b1-11e9-97c6-41a1c03dd304.gif" width="750">
</p>
<h6 align="center">从谷歌插件 Momentum 上获取并设置今日壁纸</h6>

## 安装

```bash
$ npm install -g picday-cli
```

如果网络不好可以从淘宝镜像源上下载：

```bash
$ npm install -g picday-cli --registry=https://registry.npm.taobao.org
```

## 使用

- 更改桌面壁纸为必应今日壁纸

```bash
$ picday use bing
```

- 更改桌面壁纸为 Momentum 今日壁纸

```bash
$ picday use momentum
```

- 重置桌面壁纸为系统原来的

```bash
$ picday reset
```

- 删除今天的今日壁纸

```bash
$ picday clean
```

- 在资源管理器中打开壁纸文件夹

```bash
$ picday open
```

## 设置

### 必应今日壁纸

不同地区的今日壁纸可能不一样，默认的地区是 `zh-cn`，如果你发现你所获取的今日壁纸跟当天必应首页的不一样，那么你需要从下表中找到你所在的地区代码：

| 地区/代码 | 地区/代码 | 地区/代码 |
| :-- | :------ | :----- |
| 阿根廷 (es-ar) | 芬兰(fi-fi) | 瑞士-法语 (fr-ch) |
| 阿拉伯联合酋长国 (ar-ae) | 韩国 (ko-kr) |沙特阿拉伯 (ar-sa) |
| 埃及 (ar-eg) | 荷兰 (nl-nl) | 中国-台湾 (zh-tw) |
| 爱尔兰 (en-ie) | 加拿大-法语 (fr-ca) | 土耳其 (tr-tr) |
| 奥地利 (de-at) | 加拿大-英语 (en-ca) | 西班牙 (en-es) |
| 澳大利亚 (en-au) | 马来西亚 (en) | 中国-香港 (zh-hk) |
| 巴西 (pt-br) | 美国-西班牙语 (es-us) | 新加坡 (en-sg) |
| 比利时-法语 (fr-be) | 美国-英语 (en-us) | 新西兰 (en-nz) |
| 比利时-荷兰语 (nl-be) | 墨西哥 (es-mx) | 意大利 (it-it) |
| 波兰 (pl-pl) | 南非 (en-za) | 印度 (en-in) |
| 丹麦 (da-dk) | 挪威 (nb-no) | 印度尼西亚 (en-id) |
| 德国 (de-de) | 葡萄牙 (pt-pt) | 英国 (en-gb) |
| 俄罗斯 (ru-ru) | 日本 (ja-jp) | 智利 (en-cl) |
| 法国 (fr-fr) | 瑞典 (sv-se) | 中国 (zh-cn) |
| 菲律宾 (en-ph) | 瑞士-德语 (de-ch) | ...... |

然后使用命令 `picday set-area <area-code>` 把地区改成你的, 例如:

```
$ picday set-area en-us
```

设置完成之后，别忘了运行命令 `picday clean` 删除掉错误的壁纸，然后重新获取新壁纸。

### Momentum 今日壁纸

如果你有使用 chrome 插件 Momentum 的话，你可能会发现你所获取的壁纸跟插件中的不一样，这是因为每个人的插件都有一个不同的 `client_uuid`，你需要将这个在此工具中设置成你自己的。

打开 chrome 新标签页，在此页打开控制台，输入 `localStorage.client_uuid` 后你会得到你的 `client_uuid`，将它复制下来然后粘贴到下面这条命令中就能完成设置。

```bash
$ picday set-id client_uuid
```

<p align="center">
    <img alt="Momentum setting" src="https://user-images.githubusercontent.com/38936252/54081842-9ea69600-4346-11e9-97e9-4e17c106c6e5.png" width="750">
</p>

设置完成之后，别忘了运行命令 `picday clean` 删除掉错误的壁纸，然后重新获取新壁纸。

## License

MIT