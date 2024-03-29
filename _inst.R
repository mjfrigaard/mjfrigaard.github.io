pkgs <- c("AsioHeaders", "askpass", "assertthat", "attempt", "backports", 
"base64enc", "blob", "box", "brew", "brio", "broom", "bslib", 
"cachem", "callr", "cellranger", "checkmate", "chromote", "cli", 
"clipr", "colorspace", "commonmark", "config", "conflicted", 
"cpp11", "crayon", "credentials", "curl", "cyclocomp", "data.table", 
"DBI", "dbplyr", "debugme", "desc", "devtools", "diffobj", "digest", 
"downlit", "dplyr", "dtplyr", "ellipsis", "evaluate", "extrafont", 
"extrafontdb", "fansi", "farver", "fastmap", "fontawesome", "forcats", 
"fs", "gargle", "generics", "gert", "ggbeeswarm", "ggplot2", 
"ggplot2movies", "gh", "gitcreds", "globals", "glue", "golem", 
"googledrive", "googlesheets4", "gtable", "haven", "here", "highr", 
"htmltools", "htmlwidgets", "httpuv", "httr", "httr2", "ids", 
"ini", "isoband", "janitor", "jquerylib", "jsonlite", "kableExtra", 
"knitr", "labeling", "later", "lattice", "lazyeval", "leprechaun", 
"lifecycle", "lintr", "lobstr", "logger", "lubridate", "magrittr", 
"markdown", "memoise", "mime", "miniUI", "modelr", "munsell", 
"nlme", "openssl", "packer", "palmerpenguins", "parsedate", "pillar", 
"pingr", "pkgbuild", "pkgconfig", "pkgdown", "pkgload", "png", 
"praise", "prettyunits", "processx", "profvis", "promises", "proto", 
"ps", "purrr", "R.cache", "R.methodsS3", "R.oo", "R.utils", "R6", 
"ragg", "rappdirs", "rcmdcheck", "RColorBrewer", "Rcpp", "readxl", 
"rematch", "rematch2", "remotes", "repr", "reprex", "rex", "rhino", 
"rhub", "rlang", "rmarkdown", "roxygen2", "rprojroot", "rstudioapi", 
"Rttf2pt1", "rversions", "rvest", "rvg", "sass", "scales", "selectr", 
"sessioninfo", "shiny", "shinytest", "shinytest2", "showimage", 
"showtext", "skimr", "sloop", "sourcetools", "stringi", "stringr", 
"styler", "survival", "svglite", "sys", "systemfonts", "testthat", 
"textshaping", "tibble", "tidyr", "timechange", "tinytex", "urlchecker", 
"usethis", "utf8", "uuid", "vctrs", "vdiffr", "viridisLite", 
"waldo", "webdriver", "webshot", "websocket", "whisker", "whoami", 
"withr", "xfun", "xml2", "xmlparsedata", "xopen", "xtable", "yaml", 
"zip")
# "Matrix"
# dput(unique(sort(pkgs)))

pak::pkg_install(pkgs)  

# pak::pkg_install("mjfrigaard/utap")
# pak::pkg_install("mjfrigaard/dbap")
# pak::pkg_install("mjfrigaard/tsap")
# pak::pkg_install("mjfrigaard/st2ap")
