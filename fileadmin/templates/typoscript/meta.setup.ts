# favicon

page {

    shortcutIcon = fileadmin/images/favicon.ico

	meta {
		# Apploication Name - Um welche Anwendung handelt es sich?
		# application-name = Webpage
		# Keywords - auslesen und ggf. vererben
		keywords.data = page:keywords
		keywords.ifEmpty.data = levelfield :-1, keywords, slide
		keywords.keywords = 1
		# Description - auslesen und ggf. vererben
		description.data = page:description
		description.ifEmpty.data = levelfield :-1, description, slide
		# Author - auslesen und ggf. vererben
		author.data = page:author
		author.ifEmpty.data = levelfield :-1, author, slide
		# Author Email - auslesen und ggf. vererben
		author_email.data = page:author_email
		author_email.ifEmpty.data = levelfield :-1, author_email, slide
		# Abstract - auslesen und ggf. vererben
		# abstract.data = page:abstract
		# abstract.ifEmpty.data = levelfield :-1, abstract, slide
		# Publisher/ Author - auslesen und ggf. vererben
		publisher.data = page:author
		publisher.ifEmpty.data = levelfield :-1, author, slide
		# Copyright - Wer ist Urheber dieser Seite?
		copyright = www.webseite.de, Max Mustermann
		# Language - In welcher Sprache ist diese Seite?
		language.data = TSFE:lang
		# Robots - Such-Robots sollen den Links folgen und diese indizieren.
		robots = index, follow
		# Revisit After - Nach frühestens sollen die Such-Robots wieder kommen.
		revisit-after = 7 days
	}
	# Meta-Tag "Last-Modified" aus dem Datensatz der Seite auslesen.
	# Alternativ kann auch das Feld last_update ausgelesen werden.
	headerData {
		0 = TEXT
        0.value (
            <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        )

		1 = TEXT
		1 {
			data = page:SYS_LASTCHANGED
			date = c
			wrap = <meta name="Last-Modified" content="|" />
		}
	}
}