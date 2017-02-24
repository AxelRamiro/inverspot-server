module.exports = (params, config, currency) => {
  return `
  <style>

  @font-face {
      font-family: "AvenirNext-Regular";
      font-style: normal;
      font-weight: normal;
      src: url(style/fonts/AvenirNext-Regular.ttf);
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




  <!--<style>

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
  </style>-->


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
              <tr>
                 <td align="center" bgcolor="#fbfcfd">


                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                             <td align="center">
                              <!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>
                              <div style="line-height: 44px;">
                                  <font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">
                                  <span style="font-family: AvenirNext-Bold; font-size: 50px; color: #FF3C00;">
                                      ¡Felicidades!
                                  </span></font>
                              </div><br>
                              <div style="line-height: 24px;">
                                  <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 22px;">
                                  <strong style="font-family: AvenirNext-Bold; font-size: 22px; color: #4B118E;">
                                      <a style="color: #4B118E;">Por tu participación en ésta propiedad</a>
                                  </strong></font>
                              </div>
                              <!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>
                              </td>
                          </tr>
                      </table>

                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                             <td align="center">
                                  <div style="line-height: 24px;">
                                      <br>
                                      <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 26px;">
                                          <strong style="font-family: AvenirNext-Bold; font-size: 26px; color: #4B118E;">
                                              <a style="color: #4B118E;">${params.title}</a>
                                          </strong>
                                      </font>
                                      <br><br>
                                  </div>
                              </td>
                          </tr>
                      </table>

                      <table width="90%" border="0" cellspacing="0" cellpadding="0" style="">
                          <tr>
                              <td align="center" style="width: 60%;">
                                  <div style="line-height: 24px;">
                                      <font face="AvenirNext-Regular" size="4" color="#000" style="font-size: 16px;">
                                          <span style="font-family: AvenirNext-Regular; font-size: 16px; color: black;">
                                              <img src="${config.mailing.imagesUrl}${params.image}" border="0" style="width: 90%; display: block;"/>
                                          </span>
                                      </font>
                                  </div>
                              </td>
                          </tr>
                      </table>

                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                             <td align="center">
                                  <div style="line-height: 24px;">
                                      <br>
                                      <font face="AvenirNext-Regular" size="4" color="#000" style="font-size: 22px;">
                                          <span style="font-family: AvenirNext-Bold; font-size: 22px; color: #4B118E;">
                                              <b>Características:</b>
                                          </span>
                                      </font>
                                      <br><br>

                                      <font face="AvenirNext-Regular" size="4" color="#000" style="font-size: 16px;">
                                          <span style="font-family: AvenirNext-Regular; font-size: 18px; color: #4B118E;">
                                              Monto a invertir: <b>${currency(params.amount)}</b><br>
                                              Plazo estimado: <b>${params.estimatedTerm} meses</b><br>
                                              Rendimiento estimado: <b>${params.yieldInTime}%</b><br>
                                          </span>
                                      </font>
                                  </div>
                              </td>
                          </tr>
                      </table>


                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                             <td align="center">
                                 <div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>
                                  <div align="center" style="line-height: 24px;">
                                      <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 22px;">
                                          <strong style="font-family: AvenirNext-Bold; font-size: 22px; color: black;">
                                              <a href="${config.mailing.adminUserUrl}" class="button large-invertion" style="width: 60%;">Administrar</a>
                                          </strong>
                                      </font>
                                  </div>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              <!--content 1 END-->

              <tr>
                 <td class="iage_footer" align="center" bgcolor="#ffffff">
                  <!-- padding --><div style="height: 40px; line-height: 80px; font-size: 10px;"> </div>

                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgb(216, 216, 216);">
                          <tr>
                             <td align="center">
                                  <div style="line-height: 24px;">
                                      <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 14px;">
                                      <strong style="font-family: AvenirNext-Bold; font-size: 14px; color: #FF3C00;">
                                          <a style="color: #FF3C00;">Propiedad</a>
                                      </strong></font>
                                  </div>
                              </td>
                             <td align="center">
                                  <div style="line-height: 24px;">
                                      <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 14px;">
                                      <strong style="font-family: AvenirNext-Bold; font-size: 14px; color: #FF3C00;">
                                          <a style="color: #FF3C00;">Acciones totales</a>
                                      </strong></font>
                                  </div>
                             </td>
                             <td align="center">
                                  <div style="line-height: 24px;">
                                      <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 14px;">
                                      <strong style="font-family: AvenirNext-Bold; font-size: 14px; color: #FF3C00;">
                                          <a style="color: #FF3C00;">Monto requerido</a>
                                      </strong></font>
                                  </div>
                              </td>
                             <td align="center">
                                  <div style="line-height: 24px;">
                                      <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 14px;">
                                      <strong style="font-family: AvenirNext-Bold; font-size: 14px; color: #FF3C00;">
                                          <a style="color: #FF3C00;">Inversión total</a>
                                      </strong></font>
                                  </div>
                              </td>
                          </tr>
                      </table>


                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                         <td align="left" style="background-color: #e8e8e8;">
                          <div style="">
                              <font face="AvenirNext-Bold" size="1" color="#000" style="font-size: 16px;">
                              <strong style="font-family: AvenirNext-Bold; font-size: 16px; color: #4B118E;">
                                  <a style="color: #4B118E;">${params.title}</a>
                              </strong></font>
                          </div>
                          </td>
                         <td align="center" style="background-color: white;">
                          <div style="">
                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 16px;">
                              <strong style="font-family: AvenirNext-Bold; font-size: 16px; color: #4B118E;">
                                  <a style="color: #4B118E;">${params.sharesNumber}</a>
                              </strong></font>
                          </div>
                          </td>
                         <td align="center" style="background-color: #e8e8e8;">
                          <div style="">
                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 16px;">
                              <strong style="font-family: AvenirNext-Bold; font-size: 16px; color: #4B118E;">
                                  <a style="color: #4B118E;">${currency(params.investAmount)}</a>
                              </strong></font>
                          </div>
                          </td>
                         <td align="right" style="background-color: white;">
                          <div style="">
                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 16px;">
                              <strong style="font-family: AvenirNext-Bold; font-size: 16px; color: #4B118E;">
                                  <a style="color: #4B118E;">${currency(params.amount)}</a>
                              </strong></font>
                          </div>
                          </td>
                      </tr>
                  </table>

                  <table width="90%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                         <td align="right">
                          <div style="">
                             <div style="height: 50px;"> </div>
                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 14px;">
                              <strong style="font-family: AvenirNext-Bold; font-size: 14px; color: #FF3C00;">
                                 <br><a style="color: #FF3C00;">*Todos los precios son en pesos mexicanos</a>
                              </strong></font>
                          </div>
                          </td>
                      </tr>
                  </table>

                  <table width="90%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="left">
                          <div style="">
                              <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 10px;">
                              <strong style="font-family: AvenirNext-Bold; font-size: 10px; color: #4B118E;">
                                  <a style="color: #4B118E;">NOTA:<br>La utilidad y el tiempo del proyecto son estimados, tomando como referencia el valor del mercado actual. Recuerda que en cualquier momento puedes pedir el reembolso de tu inversión en caso de que decidas no continuar en el proyecto, es una garantía que solo INVERSPOT te da.<br> Puedes vender, empeñar tu propiedad en cualquier momento<br>que tu lo desees en tu cuenta de Inverspot.</a>
                              </strong></font>
                          </div>
                          </td>
                      </tr>
                  </table>

                  <table width="90%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                         <td align="center">
                              <div style="line-height: 24px;">
                                  <font face="AvenirNext-Bold" size="3" color="#000" style="font-size: 16px;">
                                  <strong style="font-family: AvenirNext-Bold; font-size: 16px; color: #FF3C00;">
                                      <br><br><a style="color: #FF3C00;">*Importante* Por favor realiza tu aportación económica en 7 dias naturales a partir de la firma de tu contrato, de no hacerlo así, Inverspot podrá retirar tu participación del proyecto</a>
                                  </strong></font>
                              </div>
                          </td>
                      </tr>
                  </table>
                  <!-- padding --><div style="height: 60px; line-height: 30px; font-size: 10px;"> </div>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgb(216, 216, 216);">
                      <tr><td align="justify" width="90%" >
                         <div style="text-align: justify; margin-left: 10%; width: 80%;">
                          <font face="Arial, Helvetica, sans-serif" size="3" color="#96a5b5" style="font-size: 11px; margin:2px;">
                          <span style="font-family: AvenirNext-Regular; font-size: 11px; color: black;"><br>
                              • En proyectos a desarollar no se tiene contemplados los impuestos, en las propiedades ya construidas ya se tienen contemplados la retencion de impuestos.<br>
                              • Inverspot no se hace responsable de los resultados finales del proyecto.<br>
                              • El valor de las acciones futuras podra aumentar sin previo aviso.<br>
                              • Inverspot te contactara para firmar los contratos necesarios que amparan tu inversion.<br>
                              • Por cada pago realizado obtendras un comprobante de aportacion.<br>
                              • En caso de que hayas decidido invertir y no realices las aportaciones, se te dará de baja de la plataforma.<br>
                              • Al usar la plataforma, aceptas que estás obligado a cumplir las condiciones universales de servicio y la política de privacidad.<br><br>
                              No respondas este correo electrónico. los correos electrónicos enviados a esta dirección no se responderán.
                          </span></font>
                         </div><br>
                      </td></tr>
                  </table>
              </td></tr>


              <!--footer -->
              <tr>
                  <td class="iage_footer" align="center" bgcolor="#4b118e">
                      <div style="height: 40px; line-height: 80px; font-size: 10px;"> </div>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                             <td align="center">
                              <font face="Arial, Helvetica, sans-serif" size="3" color="#fff" style="font-size: 13px;">
                              <span style="font-family: AvenirNext-Regular; font-size: 13px; color: #fff;">
                                  Copyright © 1999-2015 inverspot ®, hola@inverspot.mx todos los derechos reservados.
                              </span></font>
                              </td>
                          </tr>
                      </table>
                      <div style="height: 20px; line-height: 30px; font-size: 10px;"> </div>
                  </td>
              </tr>
              <!--footer END-->
              <tr>
                  <td>
                      <div style="height: 25px;"> </div>
                  </td>
              </tr>
          </table>

          </td></tr>
      </table>

  </div>
`
}
