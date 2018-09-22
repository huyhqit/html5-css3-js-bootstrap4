import sys, os

import sphinx_rtd_theme

primary_domain = 'js'

project = 'HTML5 CSS3 JS Bootstrap 4'
copyright = '2018, Pass'
author = 'Huy Ho'

version = '1.0.0'
release = '1.0.0'

extensions = ['recommonmark']

templates_path = ['_templates']

source_parsers = {
   '.md': 'recommonmark.parser.CommonMarkParser',
}

source_suffix = ['.rst', '.md']

master_doc = 'index'

language = None

exclude_patterns = ['_build', 'node_modules']

pygments_style = 'sphinx'

html_theme = 'sphinx_rtd_theme'

html_static_path = ['_static']

htmlhelp_basename = 'bootstrap-datepickerdoc'

latex_documents = [
    ('index', 'bootstrap-datepicker.tex', u'bootstrap-datepicker Documentation',
   u'eternicode', 'manual'),
]

man_pages = [
    ('index', 'bootstrap-datepicker', u'bootstrap-datepicker Documentation',
     [u'eternicode'], 1)
]

texinfo_documents = [
    ('index', 'bootstrap-datepicker', u'bootstrap-datepicker Documentation',
   u'eternicode', 'bootstrap-datepicker', 'One line description of project.',
   'Miscellaneous'),
]

epub_title = project

epub_exclude_files = ['search.html']

intersphinx_mapping = {'https://docs.python.org/': None}

todo_include_todos = True

html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]

scv_greatest_tag = True
scv_show_banner = True
scv_whitelist_branches = ('master', 'develop', 'feature/versioning')