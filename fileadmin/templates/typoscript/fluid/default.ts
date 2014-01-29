## Fluid template
page = PAGE
page{
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