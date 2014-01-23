#######################################
## Konfiguration                    ###
#######################################
page.config {
# XTHML Strict
    doctype = html5
    xhtml_cleaning = all
    htmlTag_langKey = de

    # XML Prolog ausknipsen
    xmlprologue = none

    # Sprachen definieren
    sys_language_uid = 0
    language = de
    locale_all = de_DE
    #locale_all = de-de oder de_DE
    metaCharset = utf-8

    #Textversion uebergeben
    #linkVars = text

    # SEO/SEF-Einstellungen
    #simulateStaticDocuments = 0
    #baseURL = http://ctserver.echo.local/projekte/typo3/
    #tx_realurl_enable = 1
    #prefixLocalAnchors = all
    #linkVars = L

    # Kommentare vom Content abstellen
    disablePrefixComment = 1
}
page.config.sys_language_uid = 0
page.config.language = de
page.config.locale_all = de_DE
page.config.htmlTag_langKey = de
page.config.date_stdWrap.strftime = %d. %B %Y
page.config.time_stdWrap.strftime = %H:%M

#######################################
## Page                              ##
#######################################

page = PAGE
page {
	config {

	}

	typeNum = 0

	//headTag = <head>

	//bodyTag = <body>

	headerData {
		20 = TEXT
		20.value (
            <meta charset="utf-8" />
            <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <link href="fileadmin/templates/stylesheets/style.css" rel="stylesheet" />
		)
	}
    /*
	10 = FLUIDTEMPLATE
	10 {
		file = fileadmin/templates/inhalt-mit-sidebar.html

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

