#######################################
## Konfiguration                    ###
#######################################

page.config {
    doctype = html5
    xhtml_cleaning = all
    htmlTag_langKey = de

    # XML Prolog ausknipsen
    xmlprologue = none

    # Sprachen definieren
    sys_language_uid = 0
    language = de
    #locale_all = de-de oder de_DE
    locale_all = de_DE
    metaCharset = utf-8
    htmlTag_langKey = de

    /*
    #Textversion uebergeben
    #linkVars = text
    */

    # SEO/SEF-Einstellungen
    simulateStaticDocuments = 0
    #baseURL = http://ctserver.echo.local/projekte/typo3/
    baseURL = http://bz-kassel.marko/
    tx_realurl_enable = 1
    prefixLocalAnchors = all
    linkVars = L


    #css zusammenfassen
    concatenateCss = 0
    #javascript zusammenfassen
    concatenateJs = 0

    # Kommentare vom Content abstellen
    disablePrefixComment = 1

    date_stdWrap.strftime = %d. %B %Y
    time_stdWrap.strftime = %H:%M



}

# Cache abschalten wenn beUser eingeloggt
[globalVar  =TSFE : beUserLogin > 0]
    page.config.no_cache = 1
[global]


#######################################
## Page                              ##
#######################################

page = PAGE

page {

    /*
    typeNum = 0
    */

    headTag = <head>
    bodyTag = <body>


    ## Head

    includeCSS {
        mainStyle = fileadmin/templates/stylesheets/style.css
    }

     includeJS {
        mainScript = fileadmin/templates/javascripts/site.js
     }

     /*
     includeJSFooter {
        footerScript = fileadmin/templates/javascripts/footer.j
     }
     */



    /*
    meta.keywords.field = keywords
    meta.description.field = description
    description.ifEmpty (
        Eine Einführung in das TYPO3 Backend und Tutorials zum CMS TYPO3
    )
    */



}


