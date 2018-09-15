project = 'HTML5, CSS3, Bootstrap 4 Documentation'
copyright = 'Huy Ho'
author = 'Duy Pham'

templates_path = ['_templates']

source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'restructuredtext',
    '.md': 'markdown',
}

language = None

html_theme = 'alabaster'

master_doc = 'index'

exclude_patterns = ['node_modules/*']

extensions = [
    'sphinx.ext.coverage',
    'sphinx.ext.imgmath',
]



source_parsers = {'.md': 'recommonmark.parser.CommonMarkParser'}
