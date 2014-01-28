#######################################
## Breadcrumb                        ##
#######################################


lib.field_breadcrumb = HMENU
lib.field_breadcrumb {
  special = rootline
  special.range = 0|-1
  entryLevel = 0
  stdWrap.wrap = <ul>|</ul>
  protectLvar = all
  1 = TMENU
  1 {
    expAll = 1
    noBlur = 1
    NO {
      wrapItemAndSub.insertData = 1
      wrapItemAndSub = <li class="first menu{field:uid}">|</li>|*|<li class="menu{field:uid}">|</li>|*|<li class="last menu{field:uid}">|</li>
      ATagTitle.field = subtitle
    }
    CUR = 1
    CUR {
      wrapItemAndSub.insertData = 1
      doNotLinkIt = 1
      wrapItemAndSub = <li class="first menu{field:uid} current">|</li>|*|<li class="current_page_item menu{field:uid}">|</li>|*|<li class="last current_page_item menu{field:uid}">|</li>
      ATagTitle.field = subtitle
    }
  }
}