<?php

namespace HexletBasics\Conditionals\IfElse;

function generateAmount($itemCount,$itemPrice){
    return $itemCount ?: $itemPrice * 3 ;
}

print_r(generateAmount(0, 2));