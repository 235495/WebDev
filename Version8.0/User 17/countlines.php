<?php
$file = basename($_SERVER['PHP_SELF']); 
$no_of_lines = count(file($file)); 
echo "There are $no_of_lines lines in $file"."\n";
echo "<a href='WebDevUser17_Php.html'>Click here to continue</a>"."\n";
?>