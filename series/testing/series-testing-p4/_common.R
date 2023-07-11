co_box <- function(color, header, contents = "Your text") {
  class <- switch(color,
    b = "note",
    g = "tip",
    r = "important",
    o = "caution",
    stop("Invalid `type`", call. = FALSE)
  )
  switch(color,
    b = cat(paste0(
      "\n",
      ":::: {.callout-", class, " collapse='true'}", "\n\n",
      "## ", header, "\n\n",
      "::: {style='font-size: 1.10em; color: #696969;'}\n\n",
      glue::glue_collapse(contents), "\n\n",
      "::: \n\n",
      "::::", "\n"
    )),
    g = cat(paste0(
      "\n",
      ":::: {.callout-", class, " collapse='true'}", "\n\n",
      "## ", header, "\n\n",
      "::: {style='font-size: 1.10em; font-weight: bold; color: #696969;'}\n\n",
      glue::glue_collapse(contents), "\n\n",
      "::: \n\n",
      "::::", "\n"
    )),
    o = cat(paste0(
      "\n",
      ":::: {.callout-", class, " collapse='false'}", "\n\n",
      "## ", header, "\n\n",
      "::: {style='font-size: 1.10em; color: #696969;'}\n\n",
      glue::glue_collapse(contents), "\n\n",
      "::: \n\n",
      "::::", "\n"
    )),
    r = cat(paste0(
      "\n",
      ":::: {.callout-", class, " collapse='false'}", "\n\n",
      "## ", header, "\n\n",
      "::: {style='font-size: 1.10em; font-weight: bold; color: #696969;'}\n\n",
      glue::glue_collapse(contents), "\n\n",
      "::: \n\n",
      "::::", "\n"
    )),
    stop("Invalid `type`", call. = FALSE)
  )
}