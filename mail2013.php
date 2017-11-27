<?php
/*************
$hostname = "localhost";
	$database = "nawa_modx";
	$username = "nawa_modx";
	$password = "cgkojo";
	  
	$conn = mysql_connect($hostname, $username, $password) or die(mysql_error());  
	mysql_select_db($database) or die(mysql_error());  
	  
	$query_recordset1 = sprintf("INSERT INTO mail (name,tantou,phone,fax,address,mail,body) VALUES ( '%s','%s','%s','%s','%s','%s','%s')",
	addslashes($_REQUEST['name']),
	addslashes($_REQUEST['tantou']),
	addslashes($_REQUEST['phone']),
	addslashes($_REQUEST['fax']),
	addslashes($_REQUEST['address']),
	addslashes($_REQUEST['email']),
	addslashes($_REQUEST['body']));
	$res = mysql_query($query_recordset1) or die(mysql_error());
mysql_close($conn);
****************/
include 'assets/snippets/mail/OME.php';

mb_language("ja");
mb_internal_encoding('UTF-8');
mb_http_input('UTF-8');
mb_http_output('UTF-8');

$body = "会社名または個人名：";
$body .= $_REQUEST['name']."\n" ;
if(isset($_REQUEST['tantou'])) {
	$body .= "担当者名：";
	$body .= $_REQUEST['tantou'] ."\n";
}
if(isset($_REQUEST['phone'])) {
	$body .= "電話番号：";
	$body .= $_REQUEST['phone'] ."\n";
}
if(isset($_REQUEST['fax'])) {
	$body .= "FAX番号：";
	$body .= $_REQUEST['fax'] ."\n";
}
if(isset($_REQUEST['address'])) {
	$body .= "住所：";
	$body .= $_REQUEST['address']."\n";
}
$body .= "メールアドレス：";
$body .= $_REQUEST['email'] ."\n\n";
$body .= $_REQUEST['body'] ;



$oneMail = new OME;
$oneMail->setFromField("no-reply@nawa-design.com", "名和デザインスタジオサイト");
$oneMail->setToField("c.n@nawa-design.com");
$oneMail->setToField("kakicg@me.com");
//$oneMail->setReplyToField("c.n@nawa-design.com", '名和デザインスタジオ');
$oneMail->setSubject("名和デザインスタジオサイトからのコンタクトメール");
$oneMail->setBody($body);
$oneMail->setBodyWidth(0);
if ( ! $oneMail->send() ) {
		//echo $oneMail->getErrorMessage();
		echo "メールは送信できませんでした。もう一度送信していただくかc.n@nawa-design.comへ直接メールをお送り下さい。";
} else  {
   echo "名和デザインスタジオへメールが送信されました。\n名和デザインスタジオへコンタクトメールを送信いただきありがとうございます。追って担当者より返信メールを差し上げます。しばらくお待ち下さいませ。";
}
?>