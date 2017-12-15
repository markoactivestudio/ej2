<?php
// error_reporting(0);
	$filePath 	  = $_SERVER["PHP_SELF"];

	$fileArr 	  = explode("/", $filePath);
	$fileNameFull = $fileArr[count($fileArr) - 1];
	$fileNameArr  = explode(".", $fileNameFull);
	$fileName 	  = strtoupper($fileNameArr[0]);
	
	include "lib/helpers/constants.php";
	include "lib/controllers/cookie.inc.php";
	include "lib/controllers/language.inc.php";
	include "lib/controllers/os_detector.inc.php";
	
	$os_detector 	= new OS_Detector();
	$os 			= $os_detector->GetOS();
	$is_mobile 		= $os_detector->IsMobile();
	


	function isMobile() {
		return preg_match("/(android|webos|avantgo|iphone|ipad|ipod|blackbe‌​rry|iemobile|bolt|bo‌​ost|cricket|docomo|f‌​one|hiptop|mini|oper‌​a mini|kitkat|mobi|palm|phone|pie|tablet|up\.browser|up\.link|‌​webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
	}






	$language = new Language();
	// echo $language->GetLanguage();
	if (isset($_GET["lng"])) {
		$lng = $_GET["lng"];
		$language->SetLanguage($lng);
		// echo $lng;

	} else
		$lng = $language->GetLanguage();
		// echo $lng."aaa";
	
	$res = @include "lib/lngs/" . $lng . "/" . $lng . ".php";
	if (!$res)
		die(ERROR_LANGUAGE . "<br /><a href=\"" . SITE_URL . "?lng=eng\">" . SITE_URL . "</a>");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="description" content="Easy Joker online casino, join our online betting and casino. We provide the best odds for casino games, bingo, sports and more. We Bet you’ll enjoy it.">
    <meta name="keywords" content="online casino, games, live casino, sports, bingo, play online casino games, online betting, online gambling">
    <meta name="author" content="EasyJoker">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="apple-touch-icon" sizes="180x180" href="./assets/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/img/favicon-16x16.png">
    <link rel="mask-icon" href="./assets/img/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="stylesheet" type="text/css" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/plugins.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/main.css">
    <title>Easy Joker - Online Betting and Casino</title>
	<script type="text/javascript">
		function readCookiez(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
		}
		var x = readCookiez('ppkcookie')

		if( document.cookie.indexOf("ppkcookie=") < 0) {
	   
		// location.href = "./welcomescr.html";
		}
	</script>

	<script type="text/javascript" src="js/jQuery.js"></script>
	<script type="text/javascript" src="js/jQuery_ui.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/integration.js"></script>
	<script type="text/javascript" src="js/side_bar.js"></script>
	<script type="text/javascript" src="js/main_error.js"></script>
	<script type="text/javascript" src="js/cookies.js"></script>	


     <script src="./js/jquery.nivo.slider.pack.js" type="text/javascript"></script>

<?php

	if($_GET['bet']&&$_GET['bet']=='1'){
		echo '</script><script type="text/javascript">Integration.checkBetKioskStatus();</script>';
	}

	if (is_array($scripts)) {
		if (count($scripts) > 0) {
			for ($j = 0; $j < count($scripts); $j++) {
				echo "<script type=\"text/javascript\" src=\"js/" . $scripts[$j] . ".js\"></script>";
			}
		}
	}
	
	if (!isset($no_image)) {
?><script type="text/javascript" src="js/registrationIFrameController.js"></script>
<!-- MOBILE JS -->
<!-- <script type="text/javascript" src="mobilejs/cookies.js"></script> -->
     <script src="./lobbyJs/ajax.js"></script>
   <script src="./lobbyJs/controller.js"></script>
   <script src="./lobbyJs/lobby.js" ></script>

<!-- END OF MOBILE JS -->

<?php } ?>

<title><?php echo SITE_NAME . " - " . constant("TITLE_" . $fileName); ?></title>
</head>

<body>



<?php
$player_data = $session->GetParameter("player");
$status 	 = $player_data["player_verif_status"];

if(isset($player_data["game_limits"]["game_limit"])){
	$games_enable_status = $player_data["game_limits"]["game_limit"];
}
else {
	$games_enable_status = 'E';
}

if ($status == NOT_VERIFIED) {
?>
<script type="text/javascript">
	showTopInfo();
</script>
<?php } ?>
<!-- top info line ends -->



<!-- wrapper -->
