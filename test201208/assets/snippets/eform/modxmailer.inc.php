<?php
/***************************************
 *
 * MODxMailer Class extends PHPMailer
 * 
 * Ver0.3 2007/04/09
 ***************************************
 */
include_once "manager/includes/controls/class.phpmailer.php";

class MODxMailer extends PHPMailer
{
var $mb_flg = false;
var $mb_CharSet;

	function MODxMailer()
	{
	global $modx;
	

			if (strstr($modx->config['manager_language'],"japanese"))
			{
				$this->mb_CharSet = 'iso-2022-jp';
				$this->Encoding = '7bit';
				//$this->LE ="\n";
				$this->mb_flg = true;
			}
	}

	function Send()
	{
	global $modx;
	
		if ($this->mb_flg==true)
		{	mb_language("japanese");
			$this->CharSet = $this->mb_CharSet;
			mb_internal_encoding($modx->config['modx_charset']);
			$this->FromName	= mb_encode_mimeheader($this->FromName,$this->CharSet,"B",$this->LE);
			$this->Subject	= mb_convert_encoding($this->Subject,$this->CharSet,$modx->config['modx_charset']);
			$this->Body= mb_convert_encoding($this->Body,$this->CharSet,$modx->config['modx_charset']);
		}
		return parent::Send();
	}
}

?>
