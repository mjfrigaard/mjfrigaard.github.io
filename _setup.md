<!-- https://mjfrigaard.github.io/ -->

# Using git (quarto blog)

```bash
git add -A
git commit -m "initial commit"
[main (root-commit) ae9bd6c] initial commit
 69 files changed, 7593 insertions(+)
 create mode 100644 .Rprofile
 create mode 100644 .gitignore
 create mode 100644 _freeze/posts/how-to-quarto/index/execute-results/html.json
 create mode 100644 _freeze/posts/how-to-quarto/index/figure-html/fig-penguins-1.png
 create mode 100644 _freeze/posts/post-with-code/index/execute-results/html.json
 create mode 100644 _freeze/site_libs/clipboard/clipboard.min.js
 create mode 100644 _freeze/site_libs/quarto-listing/list.min.js
 create mode 100644 _freeze/site_libs/quarto-listing/quarto-listing.js
 create mode 100644 _quarto.yml
 create mode 100644 _site/about.html
 create mode 100644 _site/index.html
 create mode 100644 _site/listings.json
 create mode 100644 _site/posts/how-to-quarto/eval-tab-comp.png
 create mode 100644 _site/posts/how-to-quarto/image.png
 create mode 100644 _site/posts/how-to-quarto/index.html
 create mode 100644 _site/posts/how-to-quarto/index_files/figure-html/fig-penguins-1.png
 create mode 100644 _site/posts/how-to-quarto/input-quarto.png
 create mode 100644 _site/posts/how-to-quarto/quarto-01.png
 create mode 100644 _site/posts/how-to-quarto/quarto-02.png
 create mode 100644 _site/posts/how-to-quarto/quarto-03.png
 create mode 100644 _site/posts/how-to-quarto/rendered-quarto.png
 create mode 100644 _site/posts/how-to-quarto/site.png
 create mode 100644 _site/posts/how-to-quarto/tf-tab-comp.png
 create mode 100644 _site/posts/welcome/index.html
 create mode 100644 _site/posts/welcome/thumbnail.jpeg
 create mode 100644 _site/profile.png
 create mode 100644 _site/search.json
 create mode 100644 _site/site_libs/bootstrap/bootstrap-icons.css
 create mode 100644 _site/site_libs/bootstrap/bootstrap-icons.woff
 create mode 100644 _site/site_libs/bootstrap/bootstrap.min.css
 create mode 100644 _site/site_libs/bootstrap/bootstrap.min.js
 create mode 100644 _site/site_libs/clipboard/clipboard.min.js
 create mode 100644 _site/site_libs/quarto-html/anchor.min.js
 create mode 100644 _site/site_libs/quarto-html/popper.min.js
 create mode 100644 _site/site_libs/quarto-html/quarto-syntax-highlighting.css
 create mode 100644 _site/site_libs/quarto-html/quarto.js
 create mode 100644 _site/site_libs/quarto-html/tippy.css
 create mode 100644 _site/site_libs/quarto-html/tippy.umd.min.js
 create mode 100644 _site/site_libs/quarto-listing/list.min.js
 create mode 100644 _site/site_libs/quarto-listing/quarto-listing.js
 create mode 100644 _site/site_libs/quarto-nav/headroom.min.js
 create mode 100644 _site/site_libs/quarto-nav/quarto-nav.js
 create mode 100644 _site/site_libs/quarto-search/autocomplete.umd.js
 create mode 100644 _site/site_libs/quarto-search/fuse.min.js
 create mode 100644 _site/site_libs/quarto-search/quarto-search.js
 create mode 100644 _site/styles.css
 create mode 100644 about.qmd
 create mode 100644 index.qmd
 create mode 100644 mjfrigaard.github.io.Rproj
 create mode 100644 posts/_metadata.yml
 create mode 100644 posts/how-to-quarto/eval-tab-comp.png
 create mode 100644 posts/how-to-quarto/image.png
 create mode 100644 posts/how-to-quarto/index.qmd
 create mode 100644 posts/how-to-quarto/input-quarto.png
 create mode 100644 posts/how-to-quarto/quarto-01.png
 create mode 100644 posts/how-to-quarto/quarto-02.png
 create mode 100644 posts/how-to-quarto/quarto-03.png
 create mode 100644 posts/how-to-quarto/rendered-quarto.png
 create mode 100644 posts/how-to-quarto/site.png
 create mode 100644 posts/how-to-quarto/tf-tab-comp.png
 create mode 100644 posts/welcome/index.qmd
 create mode 100644 posts/welcome/thumbnail.jpeg
 create mode 100644 profile.jpg
 create mode 100644 profile.png
 create mode 100644 renv.lock
 create mode 100644 renv/.gitignore
 create mode 100644 renv/activate.R
 create mode 100644 renv/settings.dcf
 create mode 100644 styles.css
 ```

## No `jekyll`

 ```bash
touch .nojekyll
git add -A
git commit -m "new .nojekyll"
[main 4fbc072] new .nojekyll
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 .nojekyll
```


## GitHub setup

```bash
git remote add origin git@github.com:mjfrigaard/mjfrigaard.github.io.git
git branch -M main
git push -u origin main
Enumerating objects: 81, done.
Counting objects: 100% (81/81), done.
Delta compression using up to 12 threads
Compressing objects: 100% (71/71), done.
Writing objects: 100% (81/81), 4.25 MiB | 2.65 MiB/s, done.
Total 81 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), done.
To github.com:mjfrigaard/mjfrigaard.github.io.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

*First, make sure you have committed all changes to your current working branch with `git status`.*

```bash
git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```


```bash
git checkout --orphan gh-pages
Switched to a new branch 'gh-pages'
git reset --hard
```

```bash
git commit --allow-empty -m "Initialising gh-pages branch"
[gh-pages (root-commit) 8bd928d] Initialising gh-pages branch
git push origin gh-pages
Enumerating objects: 2, done.
Counting objects: 100% (2/2), done.
Writing objects: 100% (2/2), 181 bytes | 181.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'gh-pages' on GitHub by visiting:
remote:      https://github.com/mjfrigaard/mjfrigaard.github.io/pull/new/gh-pages
remote: 
To github.com:mjfrigaard/mjfrigaard.github.io.git
 * [new branch]      gh-pages -> gh-pages
```

```bash
git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
```

## Set source repo to `gh-pages`

Deploy from `docs/`

## Publish

From Terminal:

```bash
quarto publish gh-pages
? Update site at https://mjfrigaard.github.io/? (Y/n) › Yes
From github.com:mjfrigaard/mjfrigaard.github.io
 * branch            gh-pages   -> FETCH_HEAD
Rendering for publish:

[1/4] posts/welcome/index.qmd
[2/4] posts/how-to-quarto/index.qmd
[3/4] index.qmd
[4/4] about.qmd

branch 'gh-pages' set up to track 'origin/gh-pages'.
HEAD is now at 4c6a0cd Built site for gh-pages
Preparing worktree (resetting branch 'gh-pages'; was at 4c6a0cd)
[gh-pages 21e966c] Built site for gh-pages
 6 files changed, 17 insertions(+), 22 deletions(-)
origin  git@github.com:mjfrigaard/mjfrigaard.github.io.git (fetch)
origin  git@github.com:mjfrigaard/mjfrigaard.github.io.git (push)
To github.com:mjfrigaard/mjfrigaard.github.io.git
   4c6a0cd..21e966c  HEAD -> gh-pages
```