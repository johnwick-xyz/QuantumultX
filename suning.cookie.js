[MITM]
hostname = passport.suning.com, luckman.suning.com, sign.suning.com, gameapi.suning.com

[Script]
# 注意有4条获取 Cookie 脚本
http-request ^https:\/\/passport.suning.com\/ids\/login$ script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js, requires-body=true
http-request ^https:\/\/luckman.suning.com\/luck-web\/sign\/api\/clock_sign.do script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
http-request ^https:\/\/sign.suning.com\/sign-web\/m\/promotion\/sign\/doSign.do script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
http-request ^https:\/\/gameapi.suning.com\/sngame-web\/(api\/signin\/private\/customerSignOperation.do|gateway\/api\/queryPrize.do) script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
