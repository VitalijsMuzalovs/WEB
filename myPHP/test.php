<?php

namespace HexletBasics\Conditionals\IfElse;

function normalizeUrl($url){
    if (strpos($url,"http") === 0){
        $pos = strpos($url,'/') ;
        $url = substr_replace($url,'https://',0,$pos + 2);
        return $url;
    }else{
        return "https://{$url}";
    }
}

//$myURL = "www.yandex.ru";
$myURL = "http://www.yandex.ru";
print_r(normalizeUrl($myURL));