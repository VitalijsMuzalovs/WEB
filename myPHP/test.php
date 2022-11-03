<?php

function makeItFunny($str,$n){
    $i = 0;
    $rez = '';
    while($i < strlen($str)){
        if(($i+1) % $n === 0){
            $rez .= strtoupper($str[$i]);
        }else{$rez .= $str[$i];}
        $i++;
    }
    return $rez;
}

$text = 'hello';
print_r(makeItFunny($text, 2));