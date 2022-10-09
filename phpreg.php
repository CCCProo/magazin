<?
// err1 - Такой аккаунт уже существует
// err2 - Такого аккаунта не существует
// err3 - Неверный пароль
// err4 - Аккаунт в бане
function ca($an,$ap){
  if(file_exists('accounts/'.$an.'.json')){
    $j = json_decode(file('accounts/'.$an.'.json')[0]);
    if(md5($ap) == $j[1]){
      if($j[2] == true){
        echo "err4";
      } else {
        echo "ok";
      }
    } else {
      echo "err3";
    }
  } else {
    echo "err2";
  }
}
$accname = $_GET['accname'];
$accpass = $_GET['accpass'];
if(file_exists('accounts/'.$accname.'.json')){
  echo "err1";
} else {
  $fp = fopen('accounts/'.$accname.'.json', "w+");
  $j[0] = $accname; // никнейм
  $j[1] = md5($accpass); // пароль
  $j[2] = false; // бан
  $j[3] = "member"; // права
  fwrite($fp, json_encode($j));
  fclose($fp);
  echo "ok";
}
?>