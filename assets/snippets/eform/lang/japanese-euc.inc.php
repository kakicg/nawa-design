<?php
/**
* snippets/eform/japanese-utf8.inc.php
* ���ܸ� language file for eForm
*/


$_lang["ef_thankyou_message"] = "<h3>���꤬�Ȥ�!</h3><p>���Ϥ��줿�����̵����������ޤ�����</p>";
$_lang["ef_no_doc"] = "�ƥ�ץ졼�ȤΥɥ�����Ȥޤ��ϥ���󥯤����Ĥ���ޤ��� id=";
$_lang["ef_validation_message"] = "<div class=\"errors\"><strong>�����Ĥ��Υ��顼�����Ĥ���ޤ���</strong><br />[+ef_wrapper+]</div>";
$_lang["ef_required_message"] = "{fields}�ϡ�ɬ�ܹ��ܤǤ�<br />";
$_lang["ef_invalid_number"] = "�ϡ�ͭ���ʿ����ǤϤ���ޤ���";
$_lang["ef_invalid_date"] = "�ϡ�ͭ�������շ����ǤϤ���ޤ���";
$_lang["ef_invalid_email"] = "�ϡ�ͭ���ʥ᡼�륢�ɥ쥹�����ǤϤ���ޤ���";
$_lang["ef_upload_exceeded"] = "�ϡ����åץ��ɤξ�¤�Ķ���Ƥ��ޤ�.";
$_lang["ef_failed_default"] = "̵�����ͤǤ�";
$_lang["ef_failed_vericode"] = "ͭ���ʥ����ɤǤϤ���ޤ���";
$_lang["ef_failed_range"] = "ͭ���ϰϳ��Ǥ�";
$_lang["ef_failed_list"] = "ͭ���ʥꥹ�ȹ��ܤǤϤ���ޤ���";
$_lang["ef_failed_eval"] = "ͭ�����ͤǤϤ���ޤ���";
$_lang["ef_failed_ereg"] = "ͭ�����ͤǤϤ���ޤ���";
$_lang["ef_failed_upload"] = "ͭ���ʥե����륿���פǤϤ���ޤ���";
$_lang["ef_error_validation_rule"] = "�롼�뤬����������ޤ���";
$_lang["ef_tamper_attempt"] = "�������ѹ��λ�ߤ�ȯ�����ޤ���!";
$_lang["ef_error_formid"] = "�ե�����ID�ޤ��ϥե�����̾��̵���Ǥ�";
$_lang["ef_debug_info"] = "Debug info: ";
$_lang["ef_is_own_id"] = "<span class=\"ef-form-error\">Form template set to id of page containing snippet call! You can not have the form in the same document as the snippet call.</span> id=";
$_lang["ef_sql_no_result"] = " silently passed validation. <span style=\"color:red;\"> SQL returned no result!</span> ";
$_lang['ef_regex_error'] = 'error in regular expression ';
$_lang['ef_debug_warning'] = '<p style="color:red;"><span style="font-size:1.5em;font-weight:bold;">WARNING - DEBUGGING IS ON</span> <br />Make sure you turn debugging off before making this form live!</p>';
$_lang['ef_mail_abuse_subject'] = 'Potential email form abuse detected for form id';
$_lang['ef_mail_abuse_message'] = '<p>A form on your website may have been the subject of an email injection attempt. The details of the posted values are printed below. Suspected text has been embedded in \[..]\ tags.  </p>';
$_lang['ef_mail_abuse_error'] = '<strong>Invalid or insecure entries were detected in your form</strong>.';
$_lang['ef_eval_deprecated'] = 'The #EVAL rule is deprecated and may not work in future versions. Use #FUNCTION instead.';
?>
