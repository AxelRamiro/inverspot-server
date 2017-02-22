module.exports = (params, config) => {
  return `
  <style>

  @font-face {
      font-family: "AvenirNext-Regular";
      font-style: normal;
      font-weight: normal;
      src: url(style/fonts/AvenirNext-Regular.ttf);
  }

  @font-face {
      font-family: "AvenirNext-Medium";
      font-style: normal;
      font-weight: normal;
      src: url(style/fonts/AvenirNext-Medium.ttf);
    }

  @font-face {
      font-family: "AvenirNext-Bold";
      font-style: normal;
      font-weight: normal;
      src: url(style/fonts/AvenirNext-Bold.ttf);
    }

  .body{
      font-family: AvenirNext-Regular;
      padding: 0;
      margin: 0;
  }
  .large-invertion {
      margin-top: 10px;
      margin-bottom: 12px;
      background-color: #FF3C00;
      border: 1px solid #FF3C00;
      width: 100%;
      padding: 10px;
      font-weight: 700;
      font-size: 20px;
      font-family: AvenirNext-Bold;
      color: white;
  }

  .large-invertion:hover {
      background-color: #ff513c;
  }
  a:link {
      text-decoration: none;
  }

  a:visited {
      text-decoration: none;
  }

  a:hover {
      text-decoration: none;;
  }

  a:active {
      text-decoration: none;
  }

  html { -webkit-text-size-adjust:none; -ms-text-size-adjust: none;}
  @media only screen and (max-device-width: 680px), only screen and (max-width: 680px) {
      *[class="table_width_100"] {
  		width: 96% !important;
  	}
  	*[class="border-right_mob"] {
  		border-right: 1px solid #dddddd;
  	}
  	*[class="mob_100"] {
  		width: 100% !important;
  	}
  	*[class="mob_center"] {
  		text-align: center !important;
  	}
  	*[class="mob_center_bl"] {
  		float: none !important;
  		display: block !important;
  		margin: 0px auto;
  	}
  	.iage_footer a {
  		text-decoration: none;
  		color: #929ca8;
  	}
  	img.mob_display_none {
  		width: 0px !important;
  		height: 0px !important;
  		display: none !important;
  	}
  	img.mob_width_50 {
  		width: 40% !important;
  		height: auto !important;
  	}
  }
  .table_width_100 {
  	width: 680px;
  }
  </style>


  <div id="mailsub" class="notification" align="center">

      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width: 320px;">
          <tr><td align="center" bgcolor="#eff3f8">

          <table border="0" cellspacing="0" cellpadding="0" class="table_width_100" width="100%" style="max-width: 680px; min-width: 300px;">
              <tr><td>
              <!-- padding --><div style="height: 25px;"> </div>
              </td></tr>
              <!--header -->
              <tr><td align="center" bgcolor="#4B118E">
                  <!-- padding --><div style="height: 30px; line-height: 30px; font-size: 10px;"> </div>
                  <table width="90%" border="0" cellspacing="0" cellpadding="0">
                      <tr><td align="center">
                          <div class="mob_center_bl" style="float: left; display: inline-block; width: 115px;">
                              <table class="mob_center" width="115" border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse: collapse;">
                                  <tr><td align="center" valign="middle">
                                      <!-- padding --><div style="height: 20px; line-height: 20px; font-size: 10px;"> </div>
                                      <table width="115" border="0" cellspacing="0" cellpadding="0" >
                                          <tr><td align="center" valign="top" class="mob_center">
                                              <img src="style/images/inverspot.png" border="0" style="width: 170%; display: block;" />
                                          </td></tr>
                                      </table>
                                  </td></tr>
                              </table>
                          </div>
                          </td>
                      </tr>
                  </table>
                  <!-- padding --><div style="height: 50px; line-height: 50px; font-size: 10px;"> </div>
              </td></tr>
              <!--header END-->

              <!--content 1 -->
              <tr><td align="center" bgcolor="#fbfcfd">
                  <table width="90%" border="0" cellspacing="0" cellpadding="0">
                      <tr><td align="center">
                          <!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>
                          <div style="line-height: 44px;">
                              <font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">
                              <span style="font-family: AvenirNext-Bold; font-size: 34px; color: #4B118E;">
                                  ¡Te damos la bienvenida a Inverspot!
                              </span></font>
                          </div>
                          <!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>
                      </td></tr>
                      <tr>
                          <td align="center">
                              <div style="line-height: 24px;">
                                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 22px;">
                                              <strong style="font-family: AvenirNext-Bold; font-size: 22px; color: black;">
                                                  <a style="color: black;">Estos son tus datos de acceso</a>
                                              </strong></font>
                              </div>
                              <div style="height: 40px;"> </div>
                          </td>
                      </tr>
                      <tr>
                          <td align="center">
                              <div style="line-height: 24px;">
                                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 22px;">
                                              <strong style="font-family: AvenirNext-Bold; font-size: 22px; color: black;">
                                                  <a style="color: black;">Correo: </a>
                                              </strong></font>

                                              <font face="AvenirNext-Regular" size="4" color="#000" style="font-size: 22px;">
                                              <span style="font-family: AvenirNext-Regular; font-size: 22px; color: black;">
                                                  <b>${params.email}</b>
                                              </span></font>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td align="center">
                              <div style="line-height: 24px;">
                                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 22px;">
                                              <strong style="font-family: AvenirNext-Bold; font-size: 22px; color: black;">
                                                  <a style="color: black;">Contraseña: </a>
                                              </strong></font>

                                              <font face="AvenirNext-Regular" size="4" color="#000" style="font-size: 22px;">
                                              <span style="font-family: AvenirNext-Regular; font-size: 22px; color: black;">
                                                  <b>${params.password}</b>
                                              </span></font>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td align="center">
                            <div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>
                              <div style="line-height: 24px;">
                                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 22px;">
                                              <strong style="font-family: AvenirNext-Bold; font-size: 22px; color: black;">
                                                 <a href="${config.mailing.domain}" class="button large-invertion" style="width: 60%;">Iniciar sesión en Inverspot</a>
                                              </strong></font>
                              </div>
                              <div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>
                          </td>
                      </tr>
                      <tr>
                          <td align="center">
                              <div style="line-height: 24px;">
                                              <font face="AvenirNext-Regular" size="4" color="#000" style="font-size: 16px;">
                                              <span style="font-family: AvenirNext-Regular; font-size: 16px; color: black;">
                                                  <b>Un administrador registro tus datos, te recomenadmos cambiar tu contraseña lo antes posible por seguridad.</b>
                                              </span></font>
                              </div>
                          </td>
                      </tr>
                  </table>
              </td></tr>
              <!--content 1 END-->

              <!--footer -->
              <tr><td class="iage_footer" align="center" bgcolor="#ffffff">
                  <!-- padding --><div style="height: 40px; line-height: 80px; font-size: 10px;"> </div>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr><td align="center">
                          <font face="Arial, Helvetica, sans-serif" size="3" color="#96a5b5" style="font-size: 13px;">
                          <span style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #96a5b5;">
                              1999-2015 © Inverspot. All Rights Reserved.
                          </span></font>
                      </td></tr>
                  </table>

                  <!-- padding --><div style="height: 20px; line-height: 30px; font-size: 10px;"> </div>
              </td></tr>
              <!--footer END-->
              <tr><td>
              <!-- padding --><div style="height: 25px;"> </div>
              </td></tr>
          </table>

          </td></tr>
      </table>

  </div>
`
}
