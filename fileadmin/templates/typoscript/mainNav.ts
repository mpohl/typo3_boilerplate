#######################################
## Navigation                        ##
#######################################
lib.field_navigation = COA
lib.field_navigation {
	10 = TEXT
	10 {
		value (
<div class="mobilemenu">Menü</div>
		)
	}

	20 = HMENU
	20 {
		special = directory
		special.value = 1
		excludeUidList = 8,9,10,11,12
		stdWrap.wrap = <ul>|</ul>
		protectLvar = all
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
				wrapItemAndSub = <li class="first current_page_item menu{field:uid}">|</li>|*|<li class="current_page_item menu{field:uid}">|</li>|*|<li class="last current_page_item menu{field:uid}">|</li>
				ATagTitle.field = subtitle
			}

			IFSUB = 1
			IFSUB {
				wrapItemAndSub.insertData = 1
				wrapItemAndSub = <li class="dropdown menu{field:uid}">|</li>
				ATagTitle.field = subtitle
			}

			ACTIFSUB < .IFSUB
			ACTIFSUB {
				wrapItemAndSub = <li class="dropdown active menu{field:uid}">|</li>
			}

			CURIFSUB < .IFSUB
			CURIFSUB {
				wrapItemAndSub = <li class="dropdown current_page_item menu{field:uid}">|</li>
			}
		}

		2 < .1
		2 {
		  stdWrap.wrap = <ul class="sub">|</ul>

		  NO {
			wrapItemAndSub.insertData = 1
			wrapItemAndSub = <li class="first level2">|</li>|*|<li class="level2">|</li>|*|<li class="last level2">|</li>
			ATagTitle.field = subtitle
		  }

		  ACT < .NO
		  CUR < .NO
		  IFSUB = 1
		  IFSUB {
		  		wrapItemAndSub.insertData = 1
				wrapItemAndSub = <li class="first level2 hassub">|</li>|*|<li class="level2 hassub">|</li>|*|<li class="last level2 hassub">|</li>
				ATagTitle.field = subtitle
		  }
		}

		3 < .1
		3{
		  stdWrap.wrap = <ul class="sub">|</ul>

		  NO {
			wrapItemAndSub.insertData = 1
			wrapItemAndSub = <li class="first level2">|</li>|*|<li class="level2">|</li>|*|<li class="last level2">|</li>
			ATagTitle.field = subtitle
		  }

		  ACT < .NO
		  CUR < .NO
		  IFSUB < .NO
		  IFSUB {
				wrapItemAndSub = <li class="first level2 hassub">|</li>|*|<li class="level2 hassub">|</li>|*|<li class="last level2 hassub">|</li>
		  }
		}
	}
}