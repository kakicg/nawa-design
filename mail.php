<?php
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
//$oneMail->setToField("kakicg@me.com");
//$oneMail->setReplyToField("c.n@nawa-design.com", '名和デザインスタジオ');
$oneMail->setSubject("名和デザインスタジオサイトからのコンタクトメール");
$oneMail->setBody($body);
$oneMail->setBodyWidth(0);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja"><!-- InstanceBegin template="/Templates/otoiawase.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="ja" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<title>お問い合わせ | 名和デザインスタジオ</title>
<link href="mail.css" rel="stylesheet" type="text/css" media="all">
</head>
<body>
<div class="main-body">
<?php if ( ! $oneMail->send() ) {
		//echo $oneMail->getErrorMessage();
		echo "メールは送信できませんでした。もう一度送信していただくかc.n@nawa-design.comへ直接メールをお送り下さい。";
} else  {
   echo "名和デザインスタジオへメールが送信されました。\n名和デザインスタジオへコンタクトメールを送信いただきありがとうございます。追って担当者より返信メールを差し上げます。しばらくお待ち下さい。";
}
?> 
<p><a href="http://nawa-design.com/index2">名和デザインスタジオサイトにもどる</a></p>    
</div>
</body>
</html>
