# 京粉转链

^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) url script-response-body https://raw.githubusercontent.com/Fokit/Quantumult-X/main/scripts/jf_Convert.js
^https?:\/\/api\.m\.jd.com\/client\.action\?functionId=start url reject-200

hostname = api.m.jd.com

# 如果京粉转链不生效，请检查重写是否订阅了神机去广告，然后把该订阅打开资源解析器，在订阅后面加#out=functionId即可；
# 或者在本地重写[rewrite_local]添加一条 ^https?:\/\/api\.m\.jd.com\/client\.action\?functionId=start url reject-200
