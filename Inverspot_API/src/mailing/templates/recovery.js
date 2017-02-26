module.exports = (params, config) => {
  return `<style>

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
      margin-top: 30px;
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
                                              <img src="${config.mailing.logoImg}" border="0" style="width: 170%; display: block;" />
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
                      <tr>
                         <td align="center">
                          <!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>
                          <div style="line-height: 44px;">
                              <font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">
                              <span style="font-family: AvenirNext-Bold; font-size: 30px; color: #4B118E;">
                                  ¡Hola <span style="color: #FF3C00;">${params.name}</span>, recupera tu contraseña!
                              </span></font>
                          </div>
                          <!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>
                          </td>
                      </tr>
                  </table>
                  <table width="90%" border="0" cellspacing="0" cellpadding="0" style="">
                      <tr>
                          <td align="center">
                              <div style="line-height: 24px;">
                                              <font face="AvenirNext-Regular" size="4" color="#000" style="font-size: 22px;">
                                              <span style="font-family: AvenirNext-Regular; font-size: 22px; color: black;">
                                                  <b>Para recuperar tu contraseña deberás<br>dar click en el botón de abajo.</b>
                                              </span></font>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td align="center">
                              <div style="line-height: 24px;">
                                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 22px;">
                                              <strong style="font-family: AvenirNext-Bold; font-size: 22px; color: black;">
                                                <a href="${(params.level === 'admin' || params.level== 'asesor') ? config.mailing.recoveryUrlAdmin : config.mailing.recoveryURL}${params.verifyUrl}" >
                                                   <button class="button large-invertion" style="width: 80%;">RECUPERAR CONTRASEÑA</button>
                                                </a>
                                              </strong></font>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td align="center">
                              <div style="line-height: 24px;">
                                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 22px;">
                                              <strong style="font-family: AvenirNext-Bold; font-size: 22px; color: black;">
                                                  <a style="color: black;">¡Queremos ayudarte a invertir!</a>
                                              </strong></font>
                              </div>
                              <div style="height: 40px;"> </div>
                          </td>
                      </tr>
                  </table>
              </td></tr>
              <!--content 1 END-->

              <tr><td class="iage_footer" align="center" bgcolor="#ffffff">
                  <!-- padding --><div style="height: 40px; line-height: 80px; font-size: 10px;"> </div>
                  <hr style="width: 90%">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <td align="center">
                              <div style="line-height: 24px;">
                                              <font face="AvenirNext-Regular" size="4" color="#000" style="font-size: 18px;">
                                              <span style="font-family: AvenirNext-Regular; font-size: 18px; color: black;">
                                                  <b>Encuentra la propiedad que mejor se acomode a tus necesidades.</b>
                                              </span></font><br>
                                              <font face="AvenirNext-Regular" size="4" color="#000" style="font-size: 18px;">
                                              <span style="font-family: AvenirNext-Regular; font-size: 18px; color: red;">
                                                  <b>Contacta con un asesor</b><br>
                                              </span></font>
                              </div>
                          </td>
                  </table>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr><td align="center">
                          <font face="Arial, Helvetica, sans-serif" size="3" color="#96a5b5" style="font-size: 11px; margin:2px;">
                          <span style="font-family: AvenirNext-Regular; font-size: 11px; color: gray;"><br>
                              Este mensaje se envió a <span>correo de usuario</span>. Si no quieres recibir estos mensajes de Inverspot en el futuro,<br> cancela tu suscripción.Si no creaste una cuenta de Inverspot con esta dirección de correo electrónico, avisanos.<br> Inverspot Inc., Atención: Community Support, hola@inverspot.mx.<br>
                              Revisa nuestro aviso de privacidad dando click <a href="http://inverspot.com/aviso-de-privacidad.html" style="text-decoration: none; color: gray;">AQUI</a>.
                          </span></font>
                      </td></tr>
                  </table>
                  <hr style="width: 90%;">
              </td></tr>


              <!--footer -->
              <tr><td class="iage_footer" align="center" bgcolor="#ffffff">
                  <!-- padding --><div style="height: 40px; line-height: 80px; font-size: 10px;"> </div>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr><td align="center">
                          <font face="Arial, Helvetica, sans-serif" size="3" color="#96a5b5" style="font-size: 13px;">
                          <span style="font-family: AvenirNext-Regular; font-size: 13px; color: #96a5b5;">
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
