#######################################
## Breadcrumb                        ##
#######################################

lib.field_breadcrumb = HMENU
/*
lib.field_breadcrumb {
  special = rootline
  special.range = 1|-1
  entryLevel = 0
  wrap = <ul><li class="home icon"><a href="/" title="Zur Startseite"><img src="fileadmin/templates/images/icon-breadcrumb-home.png" alt="Zur Startseite" /></a></li><li class="home"><a href="/" title="Zur Startseite">Startseite</a></li>|</ul>
  1 = TMENU
  1 {
    noBlur = 1
    NO {
      stdWrap.htmlSpecialChars = 1
      allWrap = <li>|</li>
      stdWrap.htmlSpecialChars = 1
      doNotLinkIt = |*| 0 |*| 1
    }
  }
  #1.wrap = <ul><li class="home icon"><a href="/" title="Zur Startseite"><img src="fileadmin/template/images/icon-breadcrumb-home.png" alt="Zur Startseite" /></a></li><li class="home"><a href="/" title="Zur Startseite">Startseite</a></li>|</ul>
}
*/


lib.field_breadcrumb >
lib.field_breadcrumb = HMENU
lib.field_breadcrumb {
  special = rootline
  special.range = 0|-1
  entryLevel = 0
  stdWrap.wrap = <ul>|</ul>
  protectLvar = all
  #excludeUidList = 1
  1 = TMENU
  1 {
    expAll = 1
    noBlur = 1
    NO {
      wrapItemAndSub.insertData = 1
      wrapItemAndSub = <li class="first menu{field:uid}">|</li>|*|<li class="level1 menu{field:uid}">|</li>|*|<li class="last menu{field:uid}">|</li>
      ATagTitle.field = subtitle
    }
    ACT = 1
    ACT {
      wrapItemAndSub.insertData = 1
      wrapItemAndSub = <li class="first active menu{field:uid}">|</li>|*|<li class="active menu{field:uid}">|</li>|*|<li class="last active menu{field:uid}">|</li>
      ATagTitle.field = subtitle
    }
    CUR = 1
    CUR {
      wrapItemAndSub.insertData = 1
      doNotLinkIt = 1
      wrapItemAndSub = <li class="first current_page_item menu{field:uid}">|</li>|*|<li class="current_page_item menu{field:uid}">|</li>|*|<li class="last current_page_item menu{field:uid}">|</li>
      ATagTitle.field = subtitle
    }
  }
}