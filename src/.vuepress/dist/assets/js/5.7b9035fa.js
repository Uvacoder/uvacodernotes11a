(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{383:function(t,e,a){t.exports=a.p+"assets/img/git_lifecycle.b65dc1f4.png"},384:function(t,e,a){t.exports=a.p+"assets/img/git revert vs reset.b90a0c41.png"},385:function(t,e,a){t.exports=a.p+"assets/img/git branches.40f57e27.png"},386:function(t,e,a){t.exports=a.p+"assets/img/git branches best practice.af341592.png"},487:function(t,e,a){"use strict";a.r(e);var i=a(45),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"git"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" GIT")]),t._v(" "),i("p",[t._v("Git works by recording the changes you make to a project, storing those changes, then allowing you to reference them as needed.")]),t._v(" "),i("hr"),t._v(" "),i("h2",{attrs:{id:"git-basic-commands"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-basic-commands"}},[t._v("#")]),t._v(" Git Basic Commands")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Command")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git init")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Create repository (=Folder with superpower)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git status")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Show Status")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git add <Filename>")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Add File")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git add .")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Add all Files")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git diff")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("check differences between the working directory and the staging area")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git commit")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("stores changes (opens vim - close with "),i("code",[t._v(":x")]),t._v(" )")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v('git commit -m "message"')])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("commit with message")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git log")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("show log")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git --help")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("get help")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),i("h3",{attrs:{id:"git-init"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-init"}},[t._v("#")]),t._v(" "),i("code",[t._v("git init")])]),t._v(" "),i("p",[t._v("Create repository (=Folder with superpower)")]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("Git project can be thought of as having three parts:")]),t._v(" "),i("ul",[i("li",[t._v("A "),i("em",[t._v("Working Directory")]),t._v(": where you’ll be doing all the work: creating, editing, deleting and organizing files")]),t._v(" "),i("li",[t._v("A "),i("em",[t._v("Staging Area")]),t._v(": where you’ll list changes you make to the working directory")]),t._v(" "),i("li",[t._v("A "),i("em",[t._v("Repository")]),t._v(": where Git permanently stores those changes as different "),i("em",[t._v("versions")]),t._v(" of the project")])]),t._v(" "),i("p",[t._v("In Git, we save changes with a "),i("em",[t._v("commit")]),t._v(",")]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-status"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-status"}},[t._v("#")]),t._v(" "),i("code",[t._v("git status")])]),t._v(" "),i("p",[t._v("Show Status")]),t._v(" "),i("p",[t._v("git knows 4 States of files:")]),t._v(" "),i("ol",[i("li",[t._v("Untracked - If you create a new file locally, it is firstuntracked. Git knows that it is there, but it won’t do anything with it.")]),t._v(" "),i("li",[t._v("Unmodified - All changes that you committed now have the status unmodified.")]),t._v(" "),i("li",[t._v("Modified - If you now change a file that has been added or committed before it is modified")]),t._v(" "),i("li",[t._v("Staged - If you add a file with the git add command, the file gets staged. git knows the file, has collected all changes and willinclude them in the next commit")])]),t._v(" "),i("img",{staticStyle:{zoom:"67%"},attrs:{src:a(383),alt:"git_lifecycle"}}),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-add"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-add"}},[t._v("#")]),t._v(" "),i("code",[t._v("git add")])]),t._v(" "),i("p",[t._v("Before doing a commit, you have to collect all your changes -> stage them.")]),t._v(" "),i("p",[i("code",[t._v("git add <Filename>")]),t._v(" - Add File")]),t._v(" "),i("p",[i("code",[t._v("git add .")]),t._v("- Add everything")]),t._v(" "),i("p",[i("code",[t._v("git add *.txt")]),t._v(" - Add all txt-Files")]),t._v(" "),i("p",[i("code",[t._v("git add <filename_1> <filename_2>")]),t._v(" - add multiple files at once")]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-diff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-diff"}},[t._v("#")]),t._v(" "),i("code",[t._v("git diff")])]),t._v(" "),i("p",[t._v("check the differences between the working directory and the staging area with:")]),t._v(" "),i("p",[i("code",[t._v("git diff *filename*")])]),t._v(" "),i("ul",[i("li",[t._v("​\t\tChanges to the file are marked with a "),i("code",[t._v("+")]),t._v(" and are indicated in green.")])]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-commit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" "),i("code",[t._v("git commit")])]),t._v(" "),i("p",[t._v("A "),i("em",[t._v("commit")]),t._v(" is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository.")]),t._v(" "),i("p",[i("code",[t._v('git commit -m "Complete first line of dialogue"')])]),t._v(" "),i("p",[t._v("Standard Conventions for Commit Messages:")]),t._v(" "),i("ul",[i("li",[t._v("​\t\tMust be in quotation marks")]),t._v(" "),i("li",[t._v("​\t\tWritten in the present tense")]),t._v(" "),i("li",[t._v("​\t\tShould be brief (50 characters or less) when using -m")])]),t._v(" "),i("p",[i("code",[t._v("git commit")]),t._v(" - will open vim. Write the commit message and close with :x")]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-log"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-log"}},[t._v("#")]),t._v(" "),i("code",[t._v("git log")])]),t._v(" "),i("p",[t._v("Commits are stored chronologically in the repository and can be viewed with:")]),t._v(" "),i("ul",[i("li",[t._v("​\t\tA 40-character code, called a "),i("em",[t._v("SHA")]),t._v(", that uniquely identifies the commit. This appears in orange text.")]),t._v(" "),i("li",[t._v("​\t\tThe commit author (you!)")]),t._v(" "),i("li",[t._v("​\t\tThe date and time of the commit")]),t._v(" "),i("li",[t._v("​\t\tThe commit message")])]),t._v(" "),i("p",[t._v("If the log is getting too long, git will show a colon :at the end. This means: you are in scroll mode. You can scroll down or up with your arrow keys. Exit the scroll mode by typing q")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("$ git log --pretty=oneline")])]),t._v(" "),i("li",[i("code",[t._v("git lg")])])]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-reset-soft-head-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-reset-soft-head-1"}},[t._v("#")]),t._v(" "),i("code",[t._v("git reset --soft HEAD~1")])]),t._v(" "),i("p",[t._v("Undo last commit by resetting it.")]),t._v(" "),i("ul",[i("li",[t._v("The "),i("code",[t._v("--soft")]),t._v(" flag has the effect that all changes of your last commit are not deleted, but they are now uncommitted modified files.")]),t._v(" "),i("li",[t._v("The tilde ~ sign followed by a 1 means: take the HEAD (your current position in the git history) and reset one commit from there")])]),t._v(" "),i("hr"),t._v(" "),i("h2",{attrs:{id:"undoing-changes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#undoing-changes"}},[t._v("#")]),t._v(" Undoing Changes")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Command")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("code",[t._v("git checkout -- .")])]),t._v(" "),i("td",[t._v("discard all changes in all modified files")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("git checkout -- <file>")])]),t._v(" "),i("td",[t._v("reset file")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("git reset --soft HEAD~1")])]),t._v(" "),i("td",[t._v("undo the last commit by resetting it")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("git reset --hard HEAD~1")])]),t._v(" "),i("td",[t._v("delete all changes of the last commit permanently")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("git reset HEAD .")])]),t._v(" "),i("td",[t._v("remove all files from the stage")])]),t._v(" "),i("tr",[i("td",[i("code",[t._v("git reset HEAD")])]),t._v(" "),i("td")])])]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-checkout"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout"}},[t._v("#")]),t._v(" "),i("code",[t._v("git checkout --")])]),t._v(" "),i("p",[i("code",[t._v("git checkout -- .")]),t._v(" - discard all changes in all modified files (The dot is a shortcut for all files)")]),t._v(" "),i("p",[i("code",[t._v("git checkout -- <file>")]),t._v(" - Resetting Modified Files: undo local changes,")]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-reset"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-reset"}},[t._v("#")]),t._v(" "),i("code",[t._v("git reset")])]),t._v(" "),i("p",[i("code",[t._v("git reset HEAD")]),t._v(" - Removing files from the stage - If you have staged files, but you don’t want to commit them")]),t._v(" "),i("p",[i("code",[t._v("git reset HEAD .")]),t._v(" - remove all files from the stage")]),t._v(" "),i("p",[i("code",[t._v("git reset --soft HEAD~1")]),t._v(" - undo the last commit by resetting it.")]),t._v(" "),i("ul",[i("li",[t._v("The --soft flag has the effect that all changes of your last commit are not deleted, but they are now uncommitted modified files.")]),t._v(" "),i("li",[t._v("The tilde ~ sign followed by a 1 means: take the HEAD (your current position in the githistory) and reset one commit from there")])]),t._v(" "),i("p",[i("code",[t._v("git reset --hard HEAD~1")]),t._v(" - delete all changes of the last commit and never see them again.")]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"revert-vs-reset"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#revert-vs-reset"}},[t._v("#")]),t._v(" Revert vs Reset")]),t._v(" "),i("p",[t._v("The difference is: if you reset a commit, you remove it; if you revert a commit, you add an additional commit to the history that undoes the changes.")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Use "),i("strong",[t._v("Reset")]),t._v(" when: You want to undo the lastcommit(s).")])]),t._v(" "),i("li",[i("p",[t._v("Use "),i("strong",[t._v("Revert")]),t._v(" when: You want to undo a commit that is some commits back in the commithistory and it is important that you see in the point in the commit history when the revert has been done (may be important in large projects with many developers).")])])]),t._v(" "),i("img",{staticStyle:{zoom:"50%"},attrs:{src:a(384),alt:"git revert vs reset"}}),t._v(" "),i("hr"),t._v(" "),i("h2",{attrs:{id:"backtracking"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#backtracking"}},[t._v("#")]),t._v(" Backtracking")]),t._v(" "),i("h4",{attrs:{id:"head-commit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#head-commit"}},[t._v("#")]),t._v(" head commit")]),t._v(" "),i("p",[t._v("The commit you are currently on is known as the HEAD commit. In many cases, the most recently made commit is the HEAD commit.")]),t._v(" "),i("h4",{attrs:{id:"see-the-head-commit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#see-the-head-commit"}},[t._v("#")]),t._v(" See the HEAD commit")]),t._v(" "),i("p",[i("code",[t._v("git show HEAD")])]),t._v(" "),i("hr"),t._v(" "),i("h4",{attrs:{id:"discards-changes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#discards-changes"}},[t._v("#")]),t._v(" Discards changes")]),t._v(" "),i("p",[i("code",[t._v("git checkout HEAD filename")]),t._v("\nor shorthand: "),i("code",[t._v("git checkout -- filename")])]),t._v(" "),i("p",[t._v("Discards changes in the working directory. To restore the file in your working directory to look exactly as it did when you last made a commit")]),t._v(" "),i("hr"),t._v(" "),i("h4",{attrs:{id:"unstage-a-file-from-the-staging-area-before-it-is-commited"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#unstage-a-file-from-the-staging-area-before-it-is-commited"}},[t._v("#")]),t._v(" Unstage a file from the staging area before it is commited")]),t._v(" "),i("p",[i("code",[t._v("git reset HEAD filename")])]),t._v(" "),i("p",[t._v("Unstages file changes in the staging area. -> "),i("em",[t._v("resets")]),t._v(" the file in the staging area to be the same as the HEAD commit.")]),t._v(" "),i("p",[t._v("Notice in the output, “Unstaged changes after reset”:"),i("code",[t._v("M scene-2.txt")]),t._v("\t\tM is short for “modification”")]),t._v(" "),i("hr"),t._v(" "),i("h4",{attrs:{id:"resets-to-a-previous-commit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#resets-to-a-previous-commit"}},[t._v("#")]),t._v(" Resets to a previous commit")]),t._v(" "),i("p",[t._v("Git enables you to rewind to the part before you made the wrong turn. You can do this with:")]),t._v(" "),i("p",[i("code",[t._v("git reset *commit_SHA*")])]),t._v(" "),i("p",[t._v("Resets to a previous commit in your commit history. This command works by using the first 7 characters of the SHA of a previous commit. For example, if the SHA of the previous commit is 5d692065cf51a2f50ea8e7b19b5a7ae512f633ba, use:")]),t._v(" "),i("p",[i("code",[t._v("git reset 5d69206")])]),t._v(" "),i("p",[t._v("-> and then "),i("code",[t._v("git chekout *filename*")])]),t._v(" "),i("hr"),t._v(" "),i("h2",{attrs:{id:"git-branches"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-branches"}},[t._v("#")]),t._v(" GIT Branches")]),t._v(" "),i("img",{staticStyle:{zoom:"33%"},attrs:{src:a(385),alt:"git branches"}}),t._v(" "),i("p",[t._v("A branch is a string of commits that is independent of the other commits.")]),t._v(" "),i("ul",[i("li",[t._v("The master branch is usually the default branch.")]),t._v(" "),i("li",[t._v("If you want to make changes independently from the other developers, you create a branch. When you are done, these can be merged back to the master branch.")])]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("Keep in mind:")]),t._v(" "),i("ul",[i("li",[t._v("​\t\tYour goal is to update master with changes you made to fencing.")]),t._v(" "),i("li",[t._v("​\t\tfencing is the giver branch, since it provides the changes.")]),t._v(" "),i("li",[t._v("​\t\tmaster is the receiver branch, since it accepts those changes.")])]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"commands"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Command")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git branch")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Shows")]),t._v(" all existing branches, marks the one you are on.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git branch <newbranch>")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Creates")]),t._v(" a new branch")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git checkout -b <newbranch>")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Shorthand:")]),t._v(" Create new branch and switch")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git branch -d <oldbranch>")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Delete branch")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git branch -D <oldbranch>")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Delete unmerged branch")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("git merge <name>")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Merge branch into the active branch")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),i("p",[t._v("Branch names can’t contain whitespaces")]),t._v(" "),i("hr"),t._v(" "),i("h4",{attrs:{id:"workflow-merging-a-branch-into-master"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#workflow-merging-a-branch-into-master"}},[t._v("#")]),t._v(" Workflow: Merging a branch into master")]),t._v(" "),i("ol",[i("li",[t._v("you need to be on the master branch - "),i("code",[t._v("git checkout master")])]),t._v(" "),i("li",[t._v("Then, merge your branch into master - "),i("code",[t._v("git merge branchname")])]),t._v(" "),i("li",[t._v("You don’t need the merged branch anymore, so you can delete it. - "),i("code",[t._v("git branch -d branchname")])])]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"best-practice"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice:")]),t._v(" "),i("ul",[i("li",[t._v("Always delete branches that you don’t need anymore. The less branches you have, the better: it is much less confusing.")]),t._v(" "),i("li",[t._v("Make it a habit to delete old branches before you create a new one.")])]),t._v(" "),i("p",[t._v("An example for a popular branching strategy for larger teams with continuous delivery: "),i("a",{attrs:{href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A successful Git branching model"),i("OutboundLink")],1)]),t._v(" "),i("img",{staticStyle:{zoom:"33%"},attrs:{src:a(386),alt:"git branches best practice"}}),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"merge-conflict"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#merge-conflict"}},[t._v("#")]),t._v(" Merge conflict")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git merge branchname\n")])])]),i("p",[t._v("We must fix the merge conflict.")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("<<<<<<< HEAD\nmaster version of line\n=======\nfencing version of line\n\\>>>>>>> fencing\n")])])]),i("p",[t._v("Git asks us which version of the file to keep")]),t._v(" "),i("p",[t._v("Delete "),i("strong",[t._v("all of Git’s special markings")]),t._v(" including the words HEAD and fencing. If any of Git’s markings remain, for example, >>>>>>> and =======, the conflict remains.")]),t._v(" "),i("p",[t._v("In Git, branches are usually a means to an end. You create them to work on a new project feature, but the end goal is to merge that feature into the master branch. After the branch has been integrated into master, it has served its purpose and can be deleted.")]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-stash"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[t._v("#")]),t._v(" Git stash")]),t._v(" "),i("hr"),t._v(" "),i("p",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=Uszj_k0DGsg",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git for professionals"),i("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);