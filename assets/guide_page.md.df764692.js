import{_ as s,o as a,c as n,j as l}from"./app.78a71fbc.js";const C=JSON.parse('{"title":"\u9875\u9762\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6587\u7AE0 Posts","slug":"\u6587\u7AE0-posts","link":"#\u6587\u7AE0-posts","children":[]},{"level":2,"title":"\u5F52\u6863 Archives","slug":"\u5F52\u6863-archives","link":"#\u5F52\u6863-archives","children":[]},{"level":2,"title":"\u5206\u7C7B Categories","slug":"\u5206\u7C7B-categories","link":"#\u5206\u7C7B-categories","children":[]},{"level":2,"title":"\u6807\u7B7E tags","slug":"\u6807\u7B7E-tags","link":"#\u6807\u7B7E-tags","children":[]},{"level":2,"title":"\u53CB\u94FE Links","slug":"\u53CB\u94FE-links","link":"#\u53CB\u94FE-links","children":[]},{"level":2,"title":"\u5173\u4E8E About","slug":"\u5173\u4E8E-about","link":"#\u5173\u4E8E-about","children":[]},{"level":2,"title":"404 Not Found","slug":"_404-not-found","link":"#_404-not-found","children":[]}],"relativePath":"guide/page.md","lastUpdated":1666534653000}'),o={name:"guide/page.md"},p=l(`<h1 id="\u9875\u9762\u914D\u7F6E" tabindex="-1">\u9875\u9762\u914D\u7F6E <a class="header-anchor" href="#\u9875\u9762\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u672C\u4E3B\u9898\u9ED8\u8BA4\u652F\u6301\u5E76\u4F7F\u7528\u4EE5\u4E0B\u9875\u9762\u7C7B\u578B\u3002</p><h2 id="\u6587\u7AE0-posts" tabindex="-1">\u6587\u7AE0 Posts <a class="header-anchor" href="#\u6587\u7AE0-posts" aria-hidden="true">#</a></h2><ul><li><code>keywords</code>\uFF1A\u5173\u952E\u5B57\uFF0C\u7528\u4E8E meta \u6807\u7B7E</li><li><code>description</code>\uFF1A\u63CF\u8FF0\uFF0C\u7528\u4E8E meta \u6807\u7B7E</li><li><s><code>photos</code>\uFF1A\u6587\u7AE0\u5C01\u9762\u56FE (\u4E0B\u4E2A\u7248\u672C\u5F03\u7528)</s></li><li><code>cover</code>\uFF1A\u6587\u7AE0\u5C01\u9762\u56FE</li><li><s><code>top</code>\uFF1A\u9996\u9875\u6392\u5E8F\u503C</s></li><li><code>sticky</code>\uFF1A\u9996\u9875\u6392\u5E8F\u503C</li><li><code>banner</code>\uFF1A\u6587\u7AE0\u9875\u6A2A\u5E45\u80CC\u666F\uFF0C\u5B57\u6BB5\u53C2\u8003 <a href="/guide/config.html#\u6A2A\u5E45-banner">\u6A2A\u5E45 banner.default</a> \u5B57\u6BB5\u3002</li><li><code>toc</code>\uFF1A\u662F\u5426\u663E\u793A\u76EE\u5F55\uFF0C\u4EC5\u5F53\u503C\u4E3A false \u751F\u6548\u3002\u9ED8\u8BA4\u901A\u8FC7 <code>_config.async.yaml</code> \u7684 <code>is_toc</code> \u63A7\u5236\u3002</li><li><code>single_column</code>\uFF1A\u5355\u680F\u663E\u793A\u8BE6\u60C5\u9875\uFF0C\u4E3A true \u65F6\u751F\u6548\u3002</li></ul><p>\u5185\u7F6E\u7684\u7F6E\u9876\u811A\u672C\u5DF2\u5220\u9664\uFF0C\u5C06 <code>hexo-generator-index</code> \u5347\u7EA7\u5230 <code>2.0.0+</code> \u4EE5\u4E0A\u7248\u672C\u5373\u53EF\u3002</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u4ECE\u96F6\u5F00\u59CB\u642D\u5EFA\u4E00\u4E2A\u540E\u53F0\u6A21\u677F</span></span>
<span class="line"><span style="color:#F07178;">keywords</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin-template,vue,element,\u540E\u53F0\u6A21\u677F</span></span>
<span class="line"><span style="color:#F07178;">cover</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">https://www.logosc.cn/uploads/resources/2018/11/29/1543459457_thumb.jpg</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F07178;">sticky</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#F07178;">banner</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">img</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bgurl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://pic1.zhimg.com/v2-b3c2c6745b9421a13a3c4706b19223b3_r.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bannerText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Hi my new friend!</span></span>
<span class="line"><span style="color:#F07178;">toc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u65E0\u9700\u663E\u793A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F52\u6863-archives" tabindex="-1">\u5F52\u6863 Archives <a class="header-anchor" href="#\u5F52\u6863-archives" aria-hidden="true">#</a></h2><p>Hexo \u9ED8\u8BA4\u652F\u6301\u3002</p><h2 id="\u5206\u7C7B-categories" tabindex="-1">\u5206\u7C7B Categories <a class="header-anchor" href="#\u5206\u7C7B-categories" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u5C1A\u672A\u5B89\u88C5 <code>hexo-generator-category</code>\uFF0C\u8BF7\u8F93\u5165 <code>npm install hexo-generator-category</code>\u3002</p><p>\u65B0\u5EFA <code>categories</code> \u9875\u9762\uFF0C\u5728\u535A\u5BA2\u6839\u76EE\u5F55\u4E0B\u8F93\u5165\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">hexo new page categories</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539 <code>source/categories/index.md</code> \u7684 <code>Front Matter</code></p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u5206\u7C7B</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2019-11-16 10:46:27</span></span>
<span class="line highlighted"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">category</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><blockquote><p><a href="https://hexo.io/zh-cn/docs/front-matter.html#%E5%88%86%E7%B1%BB%E5%92%8C%E6%A0%87%E7%AD%BE" target="_blank" rel="noreferrer">\u5206\u7C7B\u548C\u6807\u7B7E</a></p></blockquote><p>\u5C3D\u7BA1 Hexo \u652F\u6301\u4E86\u4E3A\u4E00\u7BC7\u6587\u7AE0\u8BBE\u7F6E\u591A\u4E2A\u5206\u7C7B\uFF0C\u4F46\u6211\u4E2A\u4EBA\u66F4\u5EFA\u8BAE\u4F60\u4E00\u7BC7\u6587\u7AE0\u53EA\u653E\u5728\u4E00\u4E2A\u5206\u7C7B\u4E0B\uFF0C\u800C\u4F7F\u7528\u6807\u7B7E\u6765\u4E3A\u5B83\u8FDB\u884C\u591A\u4E2A\u63CF\u8FF0\u3002</p><p>\u540C\u65F6\u592A\u591A\u7684\u5206\u7C7B\u4E0E\u6807\u7B7E\uFF0C\u65E2\u4E0D\u65B9\u4FBF\u6574\u7406\uFF0C\u4E5F\u4E0D\u5229\u4E8E\u79FB\u52A8\u7AEF\u7684\u5C55\u793A\u3002</p></div><h2 id="\u6807\u7B7E-tags" tabindex="-1">\u6807\u7B7E tags <a class="header-anchor" href="#\u6807\u7B7E-tags" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u5C1A\u672A\u5B89\u88C5 <code>hexo-generator-tag</code>\uFF0C\u8BF7\u8F93\u5165 <code>npm install hexo-generator-tag</code>\u3002</p><p>\u65B0\u5EFA <code>tags</code> \u9875\u9762\uFF0C\u5728\u535A\u5BA2\u6839\u76EE\u5F55\u4E0B\u8F93\u5165\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">hexo new page tags</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539 <code>source/tags/index.md</code> \u7684 <code>Front Matter</code></p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u6807\u7B7E</span></span>
<span class="line"><span style="color:#F07178;">date</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 2019-11-16 10:46:27</span></span>
<span class="line highlighted"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53CB\u94FE-links" tabindex="-1">\u53CB\u94FE Links <a class="header-anchor" href="#\u53CB\u94FE-links" aria-hidden="true">#</a></h2><p>\u65B0\u5EFA\u53CB\u94FE\u9875\u9762\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">hexo new page links</span></span>
<span class="line"></span></code></pre></div><p>\u8FDB\u5165 <code>source/links/index.md</code>\uFF0C\u8BBE\u7F6E <code>layout</code> \u5B57\u6BB5\u3002</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u53CB\u60C5\u94FE\u63A5</span></span>
<span class="line highlighted"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">links</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><p>\u5728 <code>_config.async.yml</code> \u4E2D\u7684 <code>links</code> \u6DFB\u52A0\u53CB\u94FE\u5217\u8868\u4FE1\u606F\u3002</p><ul><li><code>name</code>\uFF1A\u7AD9\u70B9\u540D\u79F0</li><li><code>url</code>\uFF1A\u535A\u5BA2\u94FE\u63A5</li><li><code>image</code>\uFF1A\u5934\u50CF\u56FE\u7247\u94FE\u63A5</li><li><code>desc</code>\uFF1A\u4E00\u53E5\u8BDD\u63CF\u8FF0</li></ul><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">links</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u767D\u4E91\u82CD\u72D7</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//www.imalun.com/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//www.imalun.com/images/avatar.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">desc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u9192\uFF0C\u4EA6\u5728\u4EBA\u95F4\uFF1B\u68A6\uFF0C\u4EA6\u5728\u4EBA\u95F4</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u60A8\u7684\u53CB\u94FE\u6BD4\u8F83\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4 <code>_config.async.yml</code> \u8FC7\u957F\uFF0C\u60A8\u53EF\u4EE5\u5C06 links \u914D\u7F6E\u62C6\u5206\u51FA\u6765\u3002\u5728 Hexo \u5DE5\u4F5C\u76EE\u5F55\u4E0B\u65B0\u5EFA <code>source/_data/links.yml</code> \u6587\u4EF6\uFF0C\u5B57\u6BB5\u548C <code>_config.async.yml</code> \u4E2D\u7684\u4E00\u81F4\uFF0C\u53EA\u662F\u4E0D\u518D\u9700\u8981 <code>links</code> \u5B57\u6BB5\u3002</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u767D\u4E91\u82CD\u72D7</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//www.imalun.com/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//www.imalun.com/images/avatar.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">desc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u9192\uFF0C\u4EA6\u5728\u4EBA\u95F4\uFF1B\u68A6\uFF0C\u4EA6\u5728\u4EBA\u95F4</span></span>
<span class="line"></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u662F <code>source/_data/links.json</code> \u6587\u4EF6</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u767D\u4E91\u82CD\u72D7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//www.imalun.com/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//www.imalun.com/images/avatar.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">desc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u9192\uFF0C\u4EA6\u5728\u4EBA\u95F4\uFF1B\u68A6\uFF0C\u4EA6\u5728\u4EBA\u95F4</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5173\u4E8E-about" tabindex="-1">\u5173\u4E8E About <a class="header-anchor" href="#\u5173\u4E8E-about" aria-hidden="true">#</a></h2><p>\u65B0\u5EFA\u5173\u4E8E\u9875\u9762\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">hexo new page about</span></span>
<span class="line"></span></code></pre></div><p>\u8FDB\u5165 <code>source/about/index.md</code>\uFF0C\u8BBE\u7F6E <code>layout</code> \u5B57\u6BB5\u3002</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u5173\u4E8E</span></span>
<span class="line highlighted"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">about</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F7F\u7528\u5185\u7F6E\u6A21\u677F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>_config.async.yml</code> \u4E2D\u7684 <code>about</code>\u3002</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">about</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># \u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">introduction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u4E2A\u4EBA\u7B80\u5355\u63CF\u8FF0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">blog</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;"># \u535A\u5BA2\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">privacy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;"># \u9690\u79C1\u6743\u8BF4\u660E    </span></span>
<span class="line"></span></code></pre></div><p>\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728 <code>source/about/index.md</code> \u7F16\u5199\u4F60\u7684\u5173\u4E8E\u9875\u9762\uFF0C \u5982\u679C <code>about/index.md</code> \u6709\u5185\u5BB9\u5219\u4F18\u5148\u4F7F\u7528\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5426\u5219\u4F7F\u7528\u914D\u7F6E\u9879\u5185\u5BB9\u3002</p><h2 id="_404-not-found" tabindex="-1">404 Not Found <a class="header-anchor" href="#_404-not-found" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u76F4\u63A5\u5728 <code>source</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>404.md</code>\u3002</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">404</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u672C\u5730\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE <code>/404.html</code> \u67E5\u770B\u6548\u679C\u3002\u53EA\u6709\u5F53\u4F60\u5C06\u5176\u90E8\u7F72\u5230 <code>GitHub Pages</code> \u4E0A\uFF0C\u4F60\u8BBF\u95EE\u4E0D\u5B58\u5728\u7684\u9875\u9762\u624D\u4F1A\u663E\u793A\u3002</p>`,45),e=[p];function c(t,r,i,y,d,D){return a(),n("div",null,e)}const u=s(o,[["render",c]]);export{C as __pageData,u as default};