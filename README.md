This is the repository for developing the curriculum Desarrollador Front End Trainee curriculum - Module 4 (Vue) for Coding Dojo.


STYLE GUIDE
===========
Title
-----
A simple title should be provided to explain what the module is going to cover. Where possible, the technical "glossary" term for the information being provided. This allows the chapter to essentially function as a reference guide--when a student is struggling with the concept of rendering a template, it should be intuitive to click on "Template Rendering" to find the information they are looking for.
```
<h1>Title</h1>
```

Objectives
----------
For each module (page) of curriculum, you should be able to outline at the top of the page 2-3 specific goals for the given module. If the module has more than 3 goals, you are likely trying to put too much content into a single page and will likely lose your reader’s attention.
```
<h2>Objectives:</h2>
<ul>
    <li>Understand...</li>
    <li>Review...</li>
</ul>
```

Code Snippets
-------------
For code snippets, particularly when the snippets span multiple files, provide an h4 header above each code snippet indicating which file is being manipulated. Add language-appropriate comments to explain how the code is being updated or changed. For example, if multiple code snippets are building off previous snippets, include the previous code, or provide a comment indicating where this new code is in relation to previous code.
```
<h4>folder/filename.ext</h4>
<pre data-language="javascript">
    // code snippet
</pre>
```

Terminal/Command Prompt Commands
--------------------------------
When providing terminal commands, distinguish from programming language code by using the bash data-language attribute and providing the terminal line.
```
<pre data-language="bash">
    ~/myRepoName/projectName$ md whatever
</pre>
```

Videos
------
Videos should not contain any content that is not also provided in text. Rather, videos should be used to help students piece together the content already provided, by perhaps demonstrating how the code works together, and highlighting verbally the main takeaways for the module.

Assignments
-----------
For assignments, break down the assignment into specific steps to help give structure and clarity. 
```
<ul>
    <li></li>
</ul>
```
If possible, and not necessarily for every assignment, add NINJA and SENSEI bonuses--these are targeted at those students who are ahead or are seeking more challenging work; sensei bonuses are even more difficult and are deliberately ambiguous to encourage students to stretch and be creative. With discretion, encourage students to challenge themselves with these bonsues, but help the beginner-level students focus on the core portion of the assignment and ensure they understand fundamentals before trying to accomplish more challenging tasks.

Miscellaneous
-------------
For content/images to appear side-by-side, inline styling is required. Use divs to section the content, and set the divs to inline-block, vertical-align: top, with a total width of no more than 99%.