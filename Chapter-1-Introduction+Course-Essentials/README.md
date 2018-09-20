
## Why this course and Course plan

### Overview
- Overview the course and plan

### Detail

### Why this course

- Những công nghệ học được từ course đều được áp dụng vào website
- Hướng dẫn tạo responsive và từng bước một sử dụng photoshop
- Enhancement gồm có Responsive và Compressing image
- Test:
	- cross browser test
	- markup validation server
	- performance
- Build 3 stunning responsive websites
- Explain + apply many difference technology to website

### Course Plan

### Goal of this course:

	- Convert 3 file PSD
	- Code 3 stunning websites
	- Build 3 responsive websites
	
### Photoshop

	-	Use Photoshop
	-	Get color and font
	-	Explain the most common tool of adobe photoshop
	-	Control layers and useful short cuts...
	
### Bootstrap 4

	-	Introduction of bootstrap 4 and grid systems
	-	use components like forms, input, card,...
	-	Further explain most common bootstrap 4 classis
	
### Sass & Less CSS preprocessor

- What is a preprocessor?
- Why should use?
- Differences between Sass and Less
- How to install it
- Feature of Less and Sass

### Trello

- What is it?
- Why use it?
- How can use it in to our project

### While we are working with this websites you will learn how to:

1. Prepare your website files
2. Write reusable code with comments for section
3. Use the Less preprocessor
4. Use some of the bootstrap 4 components
5. How to make scroll as well as smooth code
6. Write jQuery animation
7. Use a plugin call a Slider and customize your slider
8. Use animate CSS library to animation some elements
9. After we are going to check responsive and Performance of websites

### 404 - penguins page

	- Advanced CSS keyframes animation and positoning
	
### Merkury Website

#### 2 projects

1. How to make an advanced animations
2. Use bootstrap 4 utility classis
3. Use CSS before and after seclectors
4. How to combine between bootstrap 4 cards and dropdown and customize themes
5. Learn how to use jQuery UI library
6. Learn how to use scroll plugin to animate elements white scrolling
7. Finish solutions working around
8. After we finish check responsive website and performance

### Bookmark

- None

## Editor

### Overview

- Introduction VSCode Editor

### Details
why choose **Visual studio**:
 - Có sẵn cả trên Windows, Mac, Linux
 - Hỗ trợ terminal đi kèm trong từng file code
 - Auto complete
 - Emmet tăng tốc độ code
 - Hỗ trợ nhiều Extensions  giúp dễ dang code Sass, Less
 - Recommend 2 plugin cho Sass: 
	- Live Sass compiler
	- Sass

### Bookmark

- [Link Download VSCode](https://code.visualstudio.com/Download)

<h1 id='section3'> Photoshop</h1>

### Overview
- Step by step use Adobe Photoshop

### Details

- Sử dụng photoshop để cắt các layout websites
	- Tạo file mới: Ctrl + N
	- Mở file có sẵn: Ctrl + O
	- Zoom: Z
	- Lấy được các khoảng các giữa các vị trí: M
	- Lấy được màu: S
	- Font chữ, size chữ: T
	- Crop hình: C
	- Move layout: V

### Bookmark
- [Get step-by-step instructions](https://helpx.adobe.com/photoshop/user-guide.html)

## Bootstrap 4

### Overview

- What is bootstrap
- What does the bootstrap include?

### Details

- Bootstrap is an framework and open source toolkit for developing with HTML, CSS and Javascript
- Bootstrap is used to build responsive mobile on the web

	**GIRD SYSTEM**

	- uses a series of containers rows and columns to layout and content its built with flexbox
	- consists:
		- **container** are the most basic layout element
		- **container fluid** used for a full width container spanning the entire width of the viewport
		- **rows** are simply wrappers for columns use rows. Allows up to 12 columns
		- **columns** have four classes. it is support muilti width viewport

	**Components**

	- Some importain bootstrap components like:
		- **Buttons** Bootstrap provide different styles of buttons like Primary, Secondary, Success, Danger, Warning, Info, Light, Dark.
			- using class `btn btn-primary` `btn btn-secondary` `btn btn-success` `btn btn-danger` `btn btn-warning` `btn btn-info` `btn btn-light` `btn btn-dark`
		- **Cards** consists:
			- defined card class `card`
			- image top `card-img-top`
			- tilte `card-title`
			- content `card-text`
			- button link `btn`
		- **Drop downs** is a global menu, the user to choose one value from a predefined list
			- defined dropdown class `dropdown`
			- button `btn` have id
			- menu `dropdown-menu` use attribute aria-labelledby equal id
			- item `dropdown-item`
		- **Forms** have two sytle:
			- Stack form have syntax: class="form-group"
			- Inline form is: class="form-inline"
		- **Nav bar** is placed at the top of the page
		- **Scrollspy bar**

	**Utilites**

	- Utilites help class to quickly style element without using any css
	- Utilites consists:
		- Borders
		- Clearfix
		- Colors
		- Flex
		- Float
		- Text
		- Position
		- Shadows
		- Spacing
		
	**Tip**: You can use css and instead of utility class but these classes buy you some time and reduce the amount of css that your run.

### Bookmark

[Bootstrap 4 docs](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

## Preprocessors SASS vs LESS

### Overview

- What is LESS and SASS?
- Difference between LESS vs SASS?
- How to use?

### Details

- Syntactically Awesome Stylesheets (Sass) and Leaner CSS (LESS) are both CSS preprocessors
- Both Sass and LESS compile into CSS stylesheets so that browsers can read them, which is a necessary step because modern browsers cannot read .sass or .less file types

1. SASS is in Ruby. LESS is in Javascript
2. To assign variables: SASS uses $; LESS uses @
3. SASS has Compass, LESS has Preboot
4. LESS has better Error messages than SASS

### Feature of preprocessors

1. Variables
	
	LESS

		@width: 10px;
		@height: @width + 10px;

	SASS

		$width: 10px;
		$height: @width + 10px;
	
2. Nested rules

	LESS
	#header {
		color: black;
		.navigation {
			font-size: 12px;
		}
		.logo {
			width: 300px;
		}
	}

	SASS
	#main p {
		color: #00ff00;
		width: 97%;

		.redbox {
			background-color: #ff0000;
			color: #000000;
		}
	}
    
3. Mixins

	Mixins allow you to define styles that can be re-used throughout the stylesheet without needing to resort to non-semantic classes

	LESS

		#menu a {
			color: #111;
			.bordered();
		}

		.post a {
			color: red;
			.bordered();
		}

	SASS
	
		@mixin large-text {
			font: {
				family: Arial;
				size: 20px;
				weight: bold;
			}
			color: #ff0000;
		}

		.page-title {

			@include large-text;
			padding: 4px;
			margin-top: 10px;
		}

4. Extends

5. Inline Imports

### Using Sass:
- Add extensions:
	- 	LESS: Easy LESS
	-	SASS: Live Sass Compiler
- Applications:
	-	Recommand: Koala because it is free and support Linux, Window and Mac
- Command Line:
	- In Windows `choco install sass`
	- Other [Read more here](https://sass-lang.com/install)


### Bookmark

- [Difference between LESS and SASS](https://www.thebalancecareers.com/sass-vs-less-2071912)
- [LESS docs](http://lesscss.org)
- [SASS docs](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## Trello

### Overview

- Why use Trello?
- How to use?

### Details

- Why use trello?
    - It's free. 
    - Trello keeps track of everything
    - Using cards to organize tasks and visualize progress
    - Allow add members to projects
    - Keep your clients or the project progress

- How to use:
    - Step 1: Create Board
    - Step 2: Add List. Example `To do` `In progress` `Test` `Done`
    - Step 3: Add cards to List

### Bookmark

- Go to [Trello](https://trello.com/) now.