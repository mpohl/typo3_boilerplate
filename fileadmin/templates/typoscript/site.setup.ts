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

    /*
    headTag = <head>
    bodyTag = <body>
    */

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

    # favicon
    shortcutIcon = fileadmin/images/favicon.ico


    headerData {
		0 = TEXT
		0.value (
            <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
		)
	}

	10 = FLUIDTEMPLATE
    10 {
        template = FILE
        template.file = fileadmin/templates/fluid/page.html
        variables {
            content < styles.content.get
            navigation  < lib.field_navigation
            breadcrumb < lib.field_breadcrumb
        }
        /*
        variables {
            logo < lib.field_logo

            topnavigation < lib.field_topnavigation

            navigation  < lib.field_navigation

            teaser < styles.content.getLeft
            teaser {
                select.where = colPos = 0
            }

            einleitung < styles.content.getLeft
            einleitung {
                select.where = colPos = 5
            }

            breadcrumb < lib.field_breadcrumb

            sidebar < lib.field_sidebar

            inhalt < styles.content.getLeft
            inhalt {
                select.where = colPos = 1
            }

            footer < lib.field_footer
        }
        */
    }

}
