# monorepo-starter
monorepo 脚手架

monorepo脚手架，具体工作流参考 https://github.com/hardfist/stackoverflow/issues/24


## 发布操作流程

yarn release 是总的，可选项 https://segmentfault.com/a/1190000015376832

yarn test -> yarn build -> yarn commit -> yarn run version -> yarn run publish

## pkg.json

https://www.lljj.me/2020/06/18/%E7%BB%93%E5%90%88lerna%E5%92%8Cyarn-workspace%E7%AE%A1%E7%90%86%E5%A4%9A%E9%A1%B9%E7%9B%AE%E5%B7%A5%E4%BD%9C%E6%B5%81/


lerna publish from-git
lerna publish from-package


## lerna.json

"version": "independent", // 独立版本

