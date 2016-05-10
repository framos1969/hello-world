<?php

$result = 0;


$two = function() use ($result)
{ var_dump($result); };

$three = function() use (&$result)
{ var_dump($result); };

$result++;


$two();    // outputs int(0): $result was copied
$three();    // outputs int(1)
?>