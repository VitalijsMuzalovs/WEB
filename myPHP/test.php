<?php

function swap(&$a,&$b){
    $tempA = $a;
    $tempB = $b;
    $a = $tempB;
    $b = $tempA;
}

$a = 1;
$b = 5;

swap($a, $b);

echo $a;
echo $b;