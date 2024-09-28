# Docs

This is the complete documentation for maintaining and operating this website.

This guide outlines the project's folder structure, how to create a blog post, how to add content to the pages, and explains all the features of the project.

## General

### Styling

In the [/app](./app) directory, there is a [global.css](./app/globals.css) file responsible for the global styling across the website.

Each page and component has an associated [SASS](https://sass-lang.com/) file (.scss). These files handle the styling for individual pages and components.

### Layout and Pages

The website's [layout](./app/layout.tsx) remains consistent across the entire project. This file contains information such as metadata, imported fonts, and components used throughout the site.

In the [/app](./app) directory, the main landing [page](./app/page.tsx) can be found. Additional pages are located in the [(pages)](./app/(pages)) folder (the brackets indicate that the folder name "pages" will not be included in the website's URL).

### Components and Icons

All components and icons are located in the [/app/ui](./app/ui/) directory.

Icons are converted from SVG to TSX format to facilitate easier importing and manipulation.

### Utils

The [/app/utils](./app/utils/) directory contains important features for blog management, resource handling, and hobby actions and displays.

Detailed information on specific features can be found in the respective sections below.

### Public Folder

The [public](./public/) folder contains assets such as images and SVG files.

### Content

The [/content](./content/) directory houses blog posts in the .mdx file format.

More information about blog posts is available in the [Blog Post](#blog-post) section below.

### Metadata

Metadata is located in the [layout.tsx](./app/layout.tsx) file. This includes titles for the pages, descriptions, keywords, link images, and additional data for social media platforms.

The website's icon is located in the [/app](./app/) directory as the [favicon.ico](./app/favicon.ico) file.

The link image dimentions are preferably 1200px × 630px.

![dimentions-link-thumbnail](/public/docs/dimentions-link-thumbnail.svg)

## Home Page

The Home Page, located at [/app/page.tsx](./app/page.tsx), serves as the first page users land on. It is designed to provide brief information about you and give a sample of your work in an interactive, unique, and fun way.

### Preloader

The Preloader, located at [/app/ui/sections/preloader/preloader.tsx](./app/ui/sections/preloader/preloader.tsx), acts as an introduction to the website.

The Preloader features an animation with text that greets the user and cycles through various languages: English, French, Italian, Portuguese, Japanese, Swedish, German, and then back to English. At the end, the Preloader slides up, revealing the Home Page. The entire duration of the Preloader is 2 seconds.

### Hero Section

The Hero section, located at [/app/ui/sections/hero/hero.tsx](./app/ui/sections/hero/hero.tsx), serves as a hook for the user.

This section features your name as a headline and your specialty. Below that, there is social proof with some statistics and an image of yourself.

The image dimentions are preferably 560px × 900px.

![dimentions-home-self](/public/docs/dimentions-home-self.svg)

### About Section

The About section, located at [/app/ui/sections/about/about.tsx](./app/ui/sections/about/about.tsx), provides keywords that describe your skills.

The animation in the About section is based on scroll progress and mouse position. Each line moves left or right depending on the scroll progress, and when hovered over, a small icon appears describing the section.

This section is also a link that redirects users to the [About Page](./app/(pages)/about/page.tsx).

### Blog Section

The Blog section, located at [/app/ui/sections/blog/blog.tsx](./app/ui/sections/blog/blog.tsx), displays the four highlighted blog posts.

Its animation includes a hover effect where each blog post lights up, and a modal appears. The modal has a background color of your choice and a thumbnail image. The modal slides up and down depending on the blog post the cursor is hovering over.

You can control which blog posts are displayed by editing the [display.ts](./app/utils/blog/display.ts) file. It is essencial to have at least 4 posts ready in order for the page to work properly. Replace one of the current blog entries with a new one, **ensuring the link matches the name of the post in the [/content/post](./content/post/) directory**. More details can be found in the [Blog Post](#blog-post) section.

### Resources Section

The Resources section, located at [/app/ui/sections/resources/resources.tsx](./app/ui/sections/resources/resources.tsx), includes a parallax animation effect and a hover effect similar to that of the [About Section](#about-section).

This section links to the [Resources Page](./app/(pages)/resources/page.tsx).

### Footer Section

The Footer section, located at [/app/ui/sections/footer/footer.tsx](./app/ui/sections/footer/footer.tsx), contains a contact form.

Here, users can click on your email, which will open their device's native email app. Other contact options include Discord and Instagram.

## About Page

The About Page, located at [/app/(pages)/about/page.tsx](./app/(pages)/about/page.tsx), serves as a place for you to tell your story and allow users to get to know you better.

The maximum width for the article is set to 760px for readability. Every component is responsive based on the size of the device.

When updating the code, ensure that all text is within the `<article></article>` tag, and the image and image parallax are within the `<section></section>` tag.

### Display image

The Display image, located at [/public/images/about/self](./public/images/about/self/), is the first thing a user will see when visiting this page.

The image dimensions should ideally be 590px × 630px.

![dimensions-about-self](/public/docs/dimentions-about-self.svg)

### Subheading

The Subheading component, located at [/app/ui/components/subheading/subheading.tsx](./app/ui/components/subheading/subheading.tsx), is your typical subheading.

This component is imported once at the top of the page:

```tsx
import Subheading from '@/app/ui/components/subheading/subheading'
```

To use this component, follow this structure:

```html
<Subheading>
  Subheading content
</Subheading>
```

### Paragraph

The Paragraph component, located at [/app/ui/components/paragraph/paragraph.tsx](./app/ui/components/paragraph/paragraph.tsx), is your typical paragraph.

This component is imported once at the top of the page:

```tsx
import Paragraph from '@/app/ui/components/paragraph/paragraph'
```

To use this component, follow this structure:

```html
<Paragraph>
  Paragraph content
</Paragraph>
```

### Image Parallax

The Image Parallax component, located at [/app/ui/components/image-parallax/imageParallax.tsx](./app/ui/components/image-parallax/imageParallax.tsx), displays three images at a time.

The animation is a parallax effect, where two of the three images move at different speeds based on the scroll progress. On hover, the images transition from grayscale to colored (on mobile devices, the images are automatically colored as there is no hover functionality).

This component is imported once at the top of the page:

```tsx
import ImageParallax from '@/app/ui/components/image-parallax/imageParallax'
```

To use this component, follow this structure:

```html
<ImageParallax imagesArray={['image1.png', 'image2.png', 'image3.png']}/>
```

The images in the `imagesArray` **must** be located at [public/images/about/](./public/images/about/) and **must** exactly three images.

The image dimensions should ideally as follows:

![dimensions-about-display](/public/docs/dimentions-about-display.svg)

## Blog Page

The Blog Page, located at [/app/(pages)/blog/page.tsx](./app/(pages)/blog/page.tsx), displays all your blog posts.

The layout is divided into three columns. When you hover over a post, the background color changes, rounds up corners, the thumbnail zooms in, and the tag transitions to a gradient.

Blog posts are displayed in order, from newest to oldest, retrieved from the [/content/post/](./content/post/) directory. The name of the blog post serves as its URL (recommended format: lowercase with dashes instead of spaces, ending with the .mdx file extension).

### Blog post

Each Blog Post, located at [/content/post/](./content/post/), follows a similar structure. At the top, you'll find the post title, date, a back button, a thumbnail, and the content itself.

To create content, the file must include metadata (title, date, description, tag, and thumbnail) at the beginning:

```mdx
---
  title: "Everything about Cyber Security in less than 10 minutes"
  date: "August 22nd 2024"
  description: "With technology evolving at an exponential rate, it’s never been more important for organisations and individuals to bolster their cyber security practices..."
  tag: "Cyber Security"
  thumbnail: "1.png"
---
```

The post content follows the structure of a markdown file. You can learn more about the syntax [here](https://www.markdownguide.org/cheat-sheet/).

To link the Blog section ([./app/ui/sections/blog/](./app/ui/sections/blog/)) and the blog itself, navigate to [/app/utils/blog/display.ts](./app/utils/blog/display.ts). Ensure the link in this file matches the filename (lowercase with dashes, omit the .mdx extension).

The image dimensions should ideally be 800px × 450px.

![dimensions-thumbnails](/public/docs/dimentions-thumbnails.svg)

The images **must** be located in the [/public/images/thumbnails/](./public/images/thumbnails/) directory.

## Resources Page

The Resources Page, located at [/app/(pages)/resources/page.tsx](./app/(pages)/resources/page.tsx), serves as place for you to share your best and helpful resources used for your projects.

### Source widget

The Source Widget component, located at [/app/ui/components/source-widget/sourceWidget.tsx](./app/ui/components/source-widget/sourceWidget.tsx), is a versatile link element designed to enhance user interaction with resources.

This component is imported once at the top of the page:

```tsx
import SourceWidget from '@/app/ui/components/source-widget/sourceWidget'
```

To use this component, follow this structure:

```html
<SourceWidget href='/link' blueT='Title' grayT='Subtitle' tartget={'_blank'} />
```

The target (options: "_blank", "_self", "_top", "_parent") prop is optional, however everything else must be there.

### Subheading

The Subheading component, located at [/app/ui/components/subheading/subheading.tsx](./app/ui/components/subheading/subheading.tsx), is your typical subheading.

This component is imported once at the top of the page:

```tsx
import Subheading from '@/app/ui/components/subheading/subheading'
```

To use this component, follow this structure:

```html
<Subheading>
  Subheading content
</Subheading>
```

### Paragraph

The Paragraph component, located at [/app/ui/components/paragraph/paragraph.tsx](./app/ui/components/paragraph/paragraph.tsx), is your typical paragraph.

This component is imported once at the top of the page:

```tsx
import Paragraph from '@/app/ui/components/paragraph/paragraph'
```

To use this component, follow this structure:

```html
<Paragraph>
  Paragraph content
</Paragraph>
```

## Hobby Page

The Hobby Page, located at [/app/(pages)/hobby/page.tsx](./app/(pages)/hobby/page.tsx), serves as a visual showcase of your hobbies, featuring images with descriptive captions.

### Hobby gallery

The Hobby gallery is a single component, located at [/app/ui/components/hobby-gallery/hobbyGallery.tsx](./app/ui/components/hobby-gallery/hobbyGallery.tsx), that ensures the whole gallery works.

The animation on hover rounds up the corners. On click the image enlarges and reveals the caption below the image and on a second click the image closes.

To add content to the Hobby gallery, head to [/app/utils/hobby/content.ts](./app/utils/hobby/content.ts) and add an extra object into the `hobbyData` array with src, caption and an alt.

the images **must** be in the [/public/images/hobby/](./public/images/hobby/) directory.

-------

This project and documentation was provided by [@CodedByCoffeCup](https://x.com/CodedByCoffeCup). If you have any questions or issues please contact me via [discord](https://discord.com) (username: donaldog5939).