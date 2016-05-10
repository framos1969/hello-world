/**
 * Created by framos on 22/03/2016.
 */

var HW = HW || {};

HW.config = function($, configParams, pageUrl, isDebug) {

    /**
     * Version del js
     */
    var version = '1.0';

    /**
     * URL de la pagina actual
     */
    var url = (pageUrl) ? pageUrl : document.URL;

    /**
     * Modo debug (consola activa)
     */
    var debug = (isDebug) ? true : false;

    var params;

    /* inicio ejecucion metodos */

    setParams(configParams);

    /* fin ejecucion metodos */

    /**
     * Metodos privados
     */

    /* setters y getters */
    function setParams(configParams) {
        params = configParams;

        return this;
    }

    function getParams() {
        return params;
    }
    /* fin setters y getters */

    function showMessage() {
        var p = getParams();
        var texto = p.p1 + ", " + p.p2 + "<br>" + "url = " + url ;

        $("body").append("<p>el texto es = " + texto + "</p>");
    }

    /**
     * Metodos publicos
     */
    return {
        version: function() {
            return version;
        }
        ,showMessage: showMessage

    };
}
