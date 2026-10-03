# 世界国家与首都地图记忆手册

在线阅读：https://sii-herozhang.github.io/asia-capitals-handbook/

从亚洲版扩展为全球版：195个主条目（193个联合国会员国＋圣座、巴勒斯坦国2个观察员国），另有5个补充地区。六洲分册逐条提供国家／地区地图、大洲位置图、国家与首都详细背景、记忆钩子和易混提示，共400张网上已有地图。南极洲无主权国家。

首页支持中文／英文国家与首都检索、大洲筛选和首都抽卡自测；各分册可搜索、跳转、放大地图。手机和桌面均可阅读。所有交互本地执行，无后端、无外部运行依赖。

- index.html：全球目录与自测
- asia.html、europe.html、africa.html、north-america.html、south-america.html、oceania.html：六洲详细分册
- extensions.html：地位与统计口径不同的补充条目
- sources.html：统计口径、特殊首都与逐图作者／许可
- handbook.md：可编辑图文内容
- countries.json：结构化内容与资料链接
- map-sources.json：400张地图的逐图来源、作者、许可与校验值
- assets/、maps/：本地样式、脚本与地图

GitHub Pages从main分支根目录发布，.nojekyll启用普通静态托管。更新文件并推送后自动部署。下载完整仓库也可离线打开index.html；本地预览可运行python3 -m http.server 8000。

## 资料和许可

版本日期2026-10-03。分组参照UN M49，美洲拆为北美洲（含中美洲、加勒比）与南美洲。迁都、政府所在地与首都主张在对应条目明确说明，统计快照与官方更新分开处理。国家背景为中文概述，原亚洲记忆故事保留。

所有图像保留各自许可，原作者、来源、署名及许可链接在页面与map-sources.json中。原图预览只转换为WebP格式，未重绘地理内容，CC BY-SA副本沿用原许可。不为整份混合来源手册统一指定图片许可。
