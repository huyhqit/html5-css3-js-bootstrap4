<h1>Section 1</h1>

**Overview**
- Create folder structure for project

**Details**
- Folder structure:
    - buid
    - config
    - source
        - assets
            - fonts
            - imgs
        - scripts
        - styles
            - components // composed of many small components
            - modules // Header, Footer
            - pages
            - settings // fonts, colors, variables, animation, typography
            - style.less
            - layouts
            - overrides // third-party libary: Bootstrap, SemanticUI
        - templates
            - layouts // base-1, base-2
            - pages // home, landing page, dashboard
            - modules // header, footer
            - Use swig to split html files into small modules
        - vendors

- webpack hash filename avoids cache
- in project use yarn, npm, bower to manager package
- Bootstrap 3 and jQuery

**Bookmark**

- [swig](https://github.com/paularmstrong/swig)
- [bower](https://bower.io/)

<h1>Section 2</h1>

**Overview**
- Naming convention for Class and Id 
- When to use margin or padding
- Some rules work when covert PSD to HTML CSS

**Details**

- Naming convention
    - Class: (-) Semantic
    - Id: Quick trace, JS
        - (_), using double underscore (__) when next level element
        - example: section_1__text

- Using margin between two elements of the same level
- Padding between container and content
- Some rules:
    - Mapping 1:1 between PSD and HTML, CSS
    - Make from top to bottom
    - No resize PSD
    - Not ebbreviated

**Bookmark**

- None